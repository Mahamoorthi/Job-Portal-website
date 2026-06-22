from rest_framework.decorators import api_view
from rest_framework.response import Response
from decimal import Decimal
from backend_ecommerce.models import  shop_category,product_item,Cart,OrderItem,Order
from .serializers import ProductSerializer, RegisterSerializers, cartSerializer, category_serializers,cartSerializer,OrderSerializer
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

@api_view(['GET'])
def hello(request):
    return Response({"message":"hello from django"})

@api_view(['POST'])
def register_user(request):
    serializer = RegisterSerializers(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({"message":"User Register Successfully!"},status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def user_login(request):
    username = request.data.get('username')
    password = request.data.get('password')


    user = authenticate(username=username, password=password)

    if user is not None:
        return Response({"user_id":user.id,"username":user.username ,"message": "login successful"}, status=status.HTTP_200_OK)
    else:
        return Response({"message": "Invalid Credentials"}, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def category_list(request):
    category = shop_category.objects.all()
    category_Serializers = category_serializers(category,many=True)
    return Response(category_Serializers.data)

@api_view(['GET'])
def shop_product(request):
    category_id = request.GET.get('category')

    if category_id:
        product = product_item.objects.filter(category_id=category_id)
    else:
        product = product_item.objects.all()
    
    Product_Serializers = ProductSerializer(product,many=True)
    return Response(Product_Serializers.data)

@api_view(['POST'])
def add_to_cart(request):
    try:
        print("DATA:", request.data)

        product_id = request.data.get('product_id')
        quantity = int(request.data.get('quantity', 1))

        if not product_id:
            return Response({"error": "Product ID missing"}, status=400)

        product = product_item.objects.get(id=product_id)

        cart_item = Cart.objects.filter(product=product).first()

        if cart_item:
            return Response({"message": "Product already in cart"})


        total = Decimal(product.price) * Decimal(quantity)

        Cart.objects.create(
            product=product,
            quantity=quantity,
            total_price=total
        )

        return Response({"message": "Added to cart"})

    except Exception as e:
        return Response({"error": str(e)}, status=500)

    except Exception as e:
        print("ERROR:", e)
        return Response({"error": str(e)}, status=500)


@api_view(['GET'])
def get_cart(request):
    try:
        cart_items = Cart.objects.all()
        serializer = cartSerializer(cart_items, many=True)
        return Response(serializer.data)
    except Exception as e:
        print("ERROR:", e)
        return Response({"error": str(e)}, status=500)
    
@api_view(['POST'])
def update_cart(request):
    try:
        cart_id = request.data.get('cart_id')
        quantity = int(request.data.get('quantity'))

        cart = Cart.objects.get(id=cart_id)
        cart.quantity = quantity
        cart.total_price = cart.product.price * quantity
        cart.save()

        return Response({"message": "Updated"})

    except Exception as e:
        return Response({"error": str(e)}, status=500)


@api_view(['POST'])
def delete_cart(request): 
    cart_id = request.data.get('cart_id')
    Cart.objects.get(id=cart_id).delete()
    return Response({"message": "Deleted"})


# CREATE ORDER

@api_view(['POST'])
def create_order(request):

    try:

        user_id = request.data.get('user_id')

        product_id = request.data.get('product_id')

        quantity = int(
            request.data.get('quantity')
        )

        full_name = request.data.get('full_name')

        phone = request.data.get('phone')

        address = request.data.get('address')

        payment_method = request.data.get(
            'payment_method'
        )

        delivery_charge = Decimal(
            request.data.get('delivery_charge')
        )

        user = User.objects.get(id=user_id)

        product = product_item.objects.get(
            id=product_id
        )

        total_amount = (
            Decimal(product.price)
            * Decimal(quantity)
        ) + delivery_charge

        # CREATE ORDER

        order = Order.objects.create(

            user=user,

            full_name=full_name,

            phone=phone,

            address=address,

            payment_method=payment_method,

            delivery_charge=delivery_charge,

            total_amount=total_amount
        )

        # CREATE ORDER ITEM

        OrderItem.objects.create(

            order=order,

            product=product,

            quantity=quantity,

            price=product.price
        )

        return Response({

            "message": "Order Placed Successfully",

            "order_id": order.id

        })

    except Exception as e:

        return Response({
            "error": str(e)
        }, status=500)


# GET ORDERS

@api_view(['GET'])
def get_orders(request):

    try:

        user_id = request.GET.get('user_id')

        orders = Order.objects.filter(
            user_id=user_id
        ).order_by('-created_at')

        serializer = OrderSerializer(
            orders,
            many=True
        )

        return Response(serializer.data)

    except Exception as e:

        return Response({
            "error": str(e)
        }, status=500)