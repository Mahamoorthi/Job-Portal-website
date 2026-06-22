from django.contrib import admin
from django.urls import path
from .views import category_list, hello, register_user,shop_product, user_login,get_cart,add_to_cart,update_cart,delete_cart,create_order,get_orders
from django.views.static import serve
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('hello/', hello),
    path('register_user/', register_user),
    path('user_login/', user_login),
    path('shop_category/', category_list),
    path('product_items/', shop_product),
    path('cart/', get_cart),
    path('add-to-cart/', add_to_cart),
    path('media/<path:path>', serve, {
        'document_root': settings.MEDIA_ROOT
    }),
    path('update-cart/', update_cart),
    path('delete-cart/', delete_cart),

    path('create_order/', create_order),

    path('get_orders/', get_orders),
]