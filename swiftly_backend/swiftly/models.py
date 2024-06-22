from django.contrib.auth import get_user_model
from django.db import models
from django.utils import timezone

User = get_user_model()

class Message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_messages')
    recipient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_messages', default=None)
    message = models.TextField(default='')
    thread_name = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.sender.username} to {self.recipient.username} at {self.timestamp}"

class Product(models.Model):
    name = models.CharField(max_length=255)
    per_day_rent = models.DecimalField(max_digits=10, decimal_places=2)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owned_products')
    renter = models.ForeignKey(User, on_delete=models.CASCADE, related_name='product_rented', null=True, blank=True)
    rented_on = models.DateTimeField(null=True, blank=True)
    returned_on = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    is_deleted = models.BooleanField(default=False)
    deleted_at = models.DateTimeField(null=True, blank=True)
    product_image = models.ImageField(upload_to='product_images/', null=True, blank=True)

    def __str__(self):
        return self.name

class Transaction(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='transaction_owned_products')
    renter = models.ForeignKey(User, on_delete=models.CASCADE, related_name='transaction_rented_products', null=True, blank=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    transaction_date = models.DateTimeField(default=timezone.now)
    transaction_type = models.CharField(max_length=10, choices=[('rent', 'Rent'), ('return', 'Return')])

    def __str__(self):
        return f"{self.owner.username} - {self.product.name} - {self.transaction_type} - {self.transaction_date}"
