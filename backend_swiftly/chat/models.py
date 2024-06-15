from django.db import models



class Room(models.Model):
    name = models.CharField(max_length=255)

class Message(models.Model):

    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['timestamp']

# chat/models.py
# chat/models.py

class ChatMessage(models.Model):
    room_name = models.CharField(max_length=255)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.content}'
