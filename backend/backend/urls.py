from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include('user.urls')),
    path('api-auth/', include('rest_framework.urls')),  # Optional: Enables login for browsable API
]
