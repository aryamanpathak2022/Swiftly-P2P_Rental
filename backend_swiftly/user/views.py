from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .serializers import UserSerializer, MyTokenObtainPairSerializer,UserLoginSerializer
from django.conf import settings
User = settings.AUTH_USER_MODEL
from django.shortcuts import render, redirect
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.decorators import login_required


@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from django.shortcuts import render

@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    serializer = UserLoginSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.validated_data['user']
        refresh = RefreshToken.for_user(user)
        return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

