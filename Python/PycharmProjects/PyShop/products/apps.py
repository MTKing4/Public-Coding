from django.apps import AppConfig


class ProductsConfig(AppConfig):                            #to add the products app to the installed apps, add the package.module.ClassName of the app in the pyshop settings.py module
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'products'


