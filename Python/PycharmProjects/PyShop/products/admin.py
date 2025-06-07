from django.contrib import admin
from .models import Product, Offer                                 # .models means the models module in the current folder, import the Product class


class ProductAdmin(admin.ModelAdmin):                       #create new class, naming convention, syntax: ModelnameAdminsuffix, ProductAdmin, class is inherited from django's admin module's class ModelAdmin, which has all the common functionality for managing models in the admin area, we're doing this so that we can make the columns visible in the new added product in the admin panel
    list_display = ('name', 'price', 'stock')               #in the body of this class we can overwrite/change functionalities/attributes, list_display attribute specifies the coluns that should be visible in the table in admin panel, will set it to a tuple


class OfferAdmin(admin.ModelAdmin):
    list_display = ('code', 'discount', 'description')


admin.site.register(Product, ProductAdmin)                  # we need to register ProductAdmin now as well so that it shows on admin panel
admin.site.register(Offer, OfferAdmin)