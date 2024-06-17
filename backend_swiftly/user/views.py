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
from django.shortcuts import get_object_or_404


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


# chat/views.py
from django.shortcuts import render
from .models import ChatMessage
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required

# views.py

from django.urls import reverse_lazy
from django.contrib.auth.views import LoginView

class CustomLoginView(LoginView):
    template_name = 'chat/login.html'
    redirect_authenticated_user = True

    def get_success_url(self):
        return reverse_lazy('search_users')

def index(request):
    return render(request, 'chat/index.html')

# render login.html and do the login



def room(request, room_name):
    messages = ChatMessage.objects.filter(room_name=room_name).order_by('timestamp')
    return render(request, 'chat/room.html', {
        'room_name': room_name,
        'messages': messages
    })


@login_required
def search_users(request):
    query = request.GET.get('q')
    users = []
    if query:
        users = User.objects.filter(username__icontains=query).exclude(username=request.user.username)
    return render(request, 'search.html', {'users': users, 'query': query})


@login_required
def private_chat_room(request, username):
    user1 = request.user
    user2 = get_object_or_404(User, username=username)

    # Ensure user cannot chat with themselves
    if user1 == user2:
        return redirect('search_users')

    # Check if a room already exists, otherwise create a new one
    room, created = PrivateRoom.objects.get_or_create(
        user1__in=[user1, user2],
        user2__in=[user1, user2],
    )

    return render(request, 'private_chat.html', {'room': room, 'other_user': user2})