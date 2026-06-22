from rest_framework import serializers
from django.contrib.auth.models import User
from backend_ecommerce.models import shop_category,product_item,Cart, Order,OrderItem

class RegisterSerializers(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    class Meta:
        model = User
        fields =['username','email','password']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class category_serializers(serializers.ModelSerializer):
    class Meta:
        model = shop_category
        fields = fields = ['id', 'name', 'slug'] 

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = product_item
        fields = ['id', 'name', 'price', 'image', 'category']

class cartSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source='product.name', read_only=True)
    product_image = serializers.ImageField(source='product.image', read_only=True)

    class Meta:
        model = Cart
        fields = ['id', 'product', 'product_name', 'quantity', 'total_price','product_image']


# ORDER ITEM SERIALIZER

class OrderItemSerializer(serializers.ModelSerializer):

    product_name = serializers.CharField(
        source='product.name',
        read_only=True
    )

    product_image = serializers.ImageField(
        source='product.image',
        read_only=True
    )

    class Meta:

        model = OrderItem

        fields = [
            'id',
            'product',
            'product_name',
            'product_image',
            'quantity',
            'price'
        ]


# ORDER SERIALIZER

class OrderSerializer(serializers.ModelSerializer):

    items = OrderItemSerializer(
        many=True,
        read_only=True
    )

    class Meta:

        model = Order

        fields = [
            'id',
            'user',
            'full_name',
            'phone',
            'address',
            'payment_method',
            'delivery_charge',
            'total_amount',
            'created_at',
            'items'
        ]