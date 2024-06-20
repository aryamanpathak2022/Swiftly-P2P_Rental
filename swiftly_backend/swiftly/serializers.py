from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Product

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)


class SignupSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['email'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['name']
        )
        return user
    
# # crete product serializer
# this is the model class Product(models.Model):
#     name = models.CharField(max_length=255)
#     per_day_rent = models.DecimalField(max_digits=10, decimal_places=2)
#     owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owned_products')
#     renter = models.ForeignKey(User, on_delete=models.CASCADE, related_name='rented_products', null=True, blank=True)
#     rented_on = models.DateTimeField(null=True, blank=True)
#     returned_on = models.DateTimeField(null=True, blank=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
#     is_active = models.BooleanField(default=True)
#     is_deleted = models.BooleanField(default=False)
#     deleted_at = models.DateTimeField(null=True, blank=True)

#     def __str__(self):
#         return self.name

class ProductSerializer(serializers.ModelSerializer):

    product_image=serializers.ImageField(required=False)
    class Meta:
        model = Product
        fields = '__all__'
        read_only_fields = ('owner', 'is_active', 'is_deleted', 'deleted_at', 'created_at', 'updated_at','product_image')
        # print product_image
        # print("hello")
        # print(model.product_image)

    
