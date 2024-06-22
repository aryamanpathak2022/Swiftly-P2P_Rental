from django.urls import path
from swiftly import views
from swiftly.views import SignupView, LoginView,ProductView,MyProductsView,RentedProductsView,RentProductView,ReturnProductView,DeleteProductView,TransactionView,SearchUserAPIView

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('search/', SearchUserAPIView.as_view(), name='search'),
    path('chat/<int:user_id>/', views.ChatRoomView.as_view(), name='private_chat'),
    path('signupp/', SignupView.as_view(), name='signup'),
    path('loginn/', LoginView.as_view(), name='login'),
    # create all product urls
    path('product/', ProductView.as_view(), name='product'),
    path('my-products/', MyProductsView.as_view(), name='my_products'),
    path('rented-products/', RentedProductsView.as_view(), name='rented_products'),
    path('rent-product/<int:product_id>/', RentProductView.as_view(), name='rent_product'),
    path('return-product/<int:product_id>/', ReturnProductView.as_view(), name='return_product'),
    path('delete-product/<int:product_id>/', DeleteProductView.as_view(), name='delete_product'),
    path('transaction/', TransactionView.as_view(), name='transaction'),

    

]

from django.conf import settings
from django.conf.urls.static import static


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

