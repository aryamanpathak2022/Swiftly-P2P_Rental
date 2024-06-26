import os
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
import swiftly.routing
from django.urls import path
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend_swiftly.settings')


application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(
            swiftly.routing.websocket_urlpatterns,
           
        )
    ),
})
