from django.urls import path
from swiftly import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('search/', views.search_user, name='search'),
    path('chat/<int:user_id>/', views.ChatRoomView.as_view(), name='private_chat'),
]
