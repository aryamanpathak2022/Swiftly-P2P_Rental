from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()

class Message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_messages')
    recipient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_messages', default=None)
    message = models.TextField(default='')  # Add the default value here
    thread_name = models.CharField(max_length=255)  # Stores unique identifier for the chat thread
    timestamp = models.DateTimeField(auto_now_add=True)  # Captures message creation time

# product model which contain info about product name , product per day rent , owner and renter which will be null initially
class Product(models.Model):
    name = models.CharField(max_length=255)
    per_day_rent = models.DecimalField(max_digits=10, decimal_places=2)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owned_products')
    renter = models.ForeignKey(User, on_delete=models.CASCADE, related_name='rented_products', null=True, blank=True)
    rented_on = models.DateTimeField(null=True, blank=True)
    returned_on = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    is_deleted = models.BooleanField(default=False)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.name