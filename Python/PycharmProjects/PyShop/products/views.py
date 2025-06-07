from django.http import HttpResponse
from django.shortcuts import render                         # we use this function to render a template, it was added by default
from .models import Product                                 #we're importing the product so that we can view them in the index function (main web page) after storing the products in the database


def index(request):
    products = Product.objects.all()                        # method that returns all the products we have in the database, one of the useful methods this class inherited from django.db Model class in models module, other useful methods like .filter(), for filtering products ex. only out of stock ones, and .get() to return a single product, and .save() for inserting a product or updating one
    return render(request, 'index.html',       # make this index view method return the index.html template using the render function, request needs to be put as first argument
                  {'products':products})            # in the third argument we pass the list of products we loaded from the database, need to pass it as a dictionary, adding one key => value pair, we'll call the key products, but it can be any name it doesn't matter, and the value for that key should be the object(variable) products defined in the line above, this dictionary is called the context, it provides data to be used in a template, in this case we have a property called 'products' (the key), which we can access in the index.html template, in the for loop


def new(request):
    return HttpResponse("New Products!")

