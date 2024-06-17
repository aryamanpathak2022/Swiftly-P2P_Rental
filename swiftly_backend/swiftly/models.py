from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()

class Message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_messages')
    recipient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_messages', default=None)
    message = models.TextField(default='')  # Add the default value here
    thread_name = models.CharField(max_length=255)  # Stores unique identifier for the chat thread
    timestamp = models.DateTimeField(auto_now_add=True)  # Captures message creation time
