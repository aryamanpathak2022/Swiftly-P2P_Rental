# chat/views.py
from django.shortcuts import render
from .models import ChatMessage

def index(request):
    return render(request, 'chat/index.html')

def room(request, room_name):
    messages = ChatMessage.objects.filter(room_name=room_name).order_by('timestamp')
    return render(request, 'chat/room.html', {
        'room_name': room_name,
        'messages': messages
    })
