from django.contrib import admin
from .models import shop_category,product_item,user_profile,Order,OrderItem
admin.site.register(shop_category)
admin.site.register(product_item)
admin.site.register(user_profile)
admin.site.register(Order)
admin.site.register(OrderItem)
