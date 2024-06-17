from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .models import Message
from django.shortcuts import get_object_or_404


@login_required
def index(request):
    return render(request, 'index.html')

def login_view(request):
    if request.method == 'POST':
        # Handle login form submission
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('index')
        else:
            # Handle invalid login
            return render(request, 'login.html', {'error': 'Invalid credentials'})
    else:
        return render(request, 'login.html')

@login_required
def logout_view(request):
    logout(request)
    return redirect('login')

@login_required
def search_user(request):
    if request.method == 'POST':
        username = request.POST['username']
        users = User.objects.filter(username__icontains=username).exclude(username=request.user.username)
        return render(request, 'search_user.html', {'users': users})
    else:
        return render(request, 'search_user.html')

from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404
from django.views.generic import View

from .models import Message

class ChatRoomView(LoginRequiredMixin, View):
    def get(self, request, user_id):
        # Get the recipient user
        recipient = get_object_or_404(User, pk=user_id)

        # Check if user can chat with recipient (e.g., are friends)
        # ... (implement your authorization logic)

        # Get existing messages for the chat thread
        messages = Message.objects.filter(
            thread_name=f'{request.user.id}_{user_id}'
        ).order_by('timestamp') | Message.objects.filter(
            thread_name=f'{user_id}_{request.user.id}'
        ).order_by('timestamp')
        current_user_id = request.user.id
        room_name = f'{current_user_id}_{user_id}' if current_user_id < user_id else f'{user_id}_{current_user_id}'


        context = {'recipient': recipient, 'messages': messages , 'room_name': room_name }
        return render(request, 'chat/private_chat.html', context)
