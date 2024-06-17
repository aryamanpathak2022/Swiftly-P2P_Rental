from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
from .views import register_user
from django.urls import path
from . import views

from django.contrib.auth import views as auth_views
from .views import CustomLoginView
from .views import private_chat_room

urlpatterns = [
    path('register/', register_user, name='register_user'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('login/', views.login_view, name='login'),
     path('login/', CustomLoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('search/', views.search_users, name='search_users'),
     path('chat/<str:username>/', private_chat_room, name='private_chat_room'),



]
