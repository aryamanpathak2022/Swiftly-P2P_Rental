from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .models import Message,Product
from django.shortcuts import get_object_or_404



@login_required
def index(request):
    return render(request, 'index.html')

def login_view(request):
    if request.method == 'POST':
        # Handle login form submission
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('index')
        else:
            # Handle invalid login
            return render(request, 'login.html', {'error': 'Invalid credentials'})
    else:
        return render(request, 'login.html')

@login_required
def logout_view(request):
    logout(request)
    return redirect('login')

@login_required
def search_user(request):
    if request.method == 'POST':
        username = request.POST['username']
        users = User.objects.filter(username__icontains=username).exclude(username=request.user.username)
        return render(request, 'search_user.html', {'users': users})
    else:
        return render(request, 'search_user.html')

from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404
from django.views.generic import View

from .models import Message

class ChatRoomView(LoginRequiredMixin, View):
    def get(self, request, user_id):
        # Get the recipient user
        recipient = get_object_or_404(User, pk=user_id)

        # Check if user can chat with recipient (e.g., are friends)
        # ... (implement your authorization logic)

        # Get existing messages for the chat thread
        messages = Message.objects.filter(
            thread_name=f'{request.user.id}_{user_id}'
        ).order_by('timestamp') | Message.objects.filter(
            thread_name=f'{user_id}_{request.user.id}'
        ).order_by('timestamp')
        current_user_id = request.user.id
        room_name = f'{current_user_id}_{user_id}' if current_user_id < user_id else f'{user_id}_{current_user_id}'


        context = {'recipient': recipient, 'messages': messages , 'room_name': room_name }
        return render(request, 'chat/private_chat.html', context)

# create a post requet using api for sign up  using   djanog auth  taking email,name , password



from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer, LoginSerializer,SignupSerializer



def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class SignupView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = SignupSerializer(data=request.data)
        if serializer.is_valid():
            user = User.objects.create_user(
                username=serializer.validated_data['email'],
                email=serializer.validated_data['email'],
                password=serializer.validated_data['password'],
                first_name=serializer.validated_data['name']
            )
            tokens = get_tokens_for_user(user)
            return Response({
                'tokens': tokens,
                'user': {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email
                }
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)


        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            # print email and password
            print(email)
            print(password)
            try:
                user = User.objects.get(email=email)

            except User.DoesNotExist:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
            # print(user.username)
            user = authenticate(username=user.username, password=password)
    
            if user is not None:
                tokens = get_tokens_for_user(user)
                return Response({
                    'tokens': tokens,
                    'user': {
                        'id': user.id,
                        'username': user.username,
                        'email': user.email
                    }
                }, status=status.HTTP_200_OK)
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# crete all the function to add product,rent it to a person,returned product ,etc
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Product
from .serializers import ProductSerializer
from django.utils import timezone

class ProductView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            product = Product.objects.create(
                name=serializer.validated_data['name'],
                per_day_rent=serializer.validated_data['per_day_rent'],
                owner=request.user
            )
            return Response(ProductSerializer(product).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, *args, **kwargs):
        products = Product.objects.filter(is_active=True, is_deleted=False)
        return Response(ProductSerializer(products, many=True).data, status=status.HTTP_200_OK)
    

class RentProductView(APIView):
    def post(self, request, product_id, *args, **kwargs):
        product = Product.objects.get(pk=product_id)
        if product.is_active and not product.is_deleted and product.renter is None:
            product.renter = request.user
            product.save()
            return Response(ProductSerializer(product).data, status=status.HTTP_200_OK)
        return Response({'error': 'Product is not available for rent'}, status=status.HTTP_400_BAD_REQUEST)
    
class ReturnProductView(APIView):
    def post(self, request, product_id, *args, **kwargs):
        product = Product.objects.get(pk=product_id)
        if product.is_active and not product.is_deleted and product.renter == request.user:
            product.renter = None
            product.save()
            return Response(ProductSerializer(product).data, status=status.HTTP_200_OK)
        return Response({'error': 'Product is not rented by you'}, status=status.HTTP_400_BAD_REQUEST)

class DeleteProductView(APIView):
    def post(self, request, product_id, *args, **kwargs):
        product = Product.objects.get(pk=product_id)
        if product.is_active and not product.is_deleted and product.owner == request.user:
            product.is_deleted = True
            product.deleted_at = timezone.now()
            product.save()
            return Response(ProductSerializer(product).data, status=status.HTTP_200_OK)
        return Response({'error': 'Product is not owned by you'}, status=status.HTTP_400_BAD_REQUEST)

class MyProductsView(APIView):
    def get(self, request, *args, **kwargs):
        products = Product.objects.filter(owner=request.user, is_active=True, is_deleted=False)
        return Response(ProductSerializer(products, many=True).data, status=status.HTTP_200_OK)

class RentedProductsView(APIView):
    def get(self, request, *args, **kwargs):
        products = Product.objects.filter(renter=request.user, is_active=True, is_deleted=False)
        return Response(ProductSerializer(products, many=True).data, status=status.HTTP_200_OK)

