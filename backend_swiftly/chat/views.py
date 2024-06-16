# chat/views.py
from django.shortcuts import render
from .models import ChatMessage
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required

def index(request):
    return render(request, 'chat/index.html')


def room(request, room_name):
    messages = ChatMessage.objects.filter(room_name=room_name).order_by('timestamp')
    return render(request, 'chat/room.html', {
        'room_name': room_name,
        'messages': messages
    })


@login_required
def search_users(request):
    query = request.GET.get('q')
    users = User.objects.filter(username__icontains=query).exclude(username=request.user.username)
    return render(request, 'search.html', {'users': users, 'query': query})