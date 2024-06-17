# swiftly/routing.py

from django.urls import path
from swiftly import consumers

websocket_urlpatterns = [
    path('ws/chat/private/<str:room_name>/', consumers.ChatConsumer.as_asgi()),
   #  path('ws/chat/private/1_2/', consumers.ChatConsumer.as_asgi()),
]
