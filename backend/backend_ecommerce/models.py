from django.db import models
from django.contrib.auth.models import User

class shop_category(models.Model):
    name = models.CharField(max_length=100,unique=True)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name
    
class product_item(models.Model):
    category = models.ForeignKey(shop_category,related_name='products',on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10,decimal_places=2)
    image = models.ImageField(upload_to='products/', blank=True)
    created_by = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.name
    
class user_profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    phone = models.CharField(max_length=15,blank=True)
    address = models.TextField(blank=True)

    def __str__(self):
        return self.user.username
    

    
class Cart(models.Model):
    product = models.ForeignKey(product_item, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    image = models.ImageField(upload_to='products/', blank=True)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)



# ORDER

class Order(models.Model):

    PAYMENT_CHOICES = (
        ('Card', 'Card'),
        ('UPI', 'UPI'),
        ('Cash On Delivery', 'Cash On Delivery'),
    )

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    full_name = models.CharField(max_length=200)

    phone = models.CharField(max_length=15)

    address = models.TextField()

    payment_method = models.CharField(
        max_length=100,
        choices=PAYMENT_CHOICES
    )

    delivery_charge = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0
    )

    total_amount = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"Order {self.id}"


# ORDER ITEMS

class OrderItem(models.Model):

    order = models.ForeignKey(
        Order,
        related_name='items',
        on_delete=models.CASCADE
    )

    product = models.ForeignKey(
        product_item,
        on_delete=models.CASCADE
    )

    quantity = models.IntegerField(default=1)

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    def __str__(self):
        return f"{self.quantity} x {self.product.name}"