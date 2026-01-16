from django.urls import path
from . import views


urlpatterns =  [
 path('hello/', views.say_hello)                # hello/ path means playground/hello/, there's no need to retype it because it's already defined in in storefront's urls.py
]



