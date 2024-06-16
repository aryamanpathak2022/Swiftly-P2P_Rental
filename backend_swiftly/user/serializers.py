from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import get_user_model
User = get_user_model()
from django.contrib.auth import authenticate

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            password=validated_data['password']
        )
        return user
    
class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')
        
        if email and password:
            user = authenticate(request=self.context.get('request'),
                                email=email, password=password)
            print(user)

            if not user:
                raise serializers.ValidationError('Invalid email or password')
        else:
            raise serializers.ValidationError('Must include "email" and "password".')

        attrs['user'] = user
        return attrs

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data.update({'user': self.user.email})
        return data
