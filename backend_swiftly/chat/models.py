from django.db import models
from django.contrib.auth.models import User



class Room(models.Model):
    name = models.CharField(max_length=255)
    participants = models.ManyToManyField(User, related_name='rooms')

class Message(models.Model):

    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['timestamp']

# chat/models.py
# chat/models.py

class ChatMessage(models.Model):
    room = models.ForeignKey(Room, on_delete=models.CASCADE, related_name='messages')
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='messages')
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.content}'    
