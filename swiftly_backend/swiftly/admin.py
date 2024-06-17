from django.contrib import admin

# Register your models here.
#register message model
from .models import Message
admin.site.register(Message)

