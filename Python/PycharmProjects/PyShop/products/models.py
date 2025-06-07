from django.db import models                                       # from django.db package, import models module, which contains the Model Class from django, this module is imported by default


class Product(models.Model):                                       # we will inherit this class from the Model class in django, Model class defines the characteristics and behavior for models in a django application ex. storing models in a database, or read them from a database, or delete them, common operations that we need to perform on model objects, by inheriting them, our Product class will have all these capabilities built in without having to code them
    name = models.CharField(max_length = 255)                      # defining an attribute for our product, setting it to an instance of the CharField class from models module, CharField (Character Field) is a class that represents a field that can contain textual data, will also supply it with a maximum length to prevent malicious user form entering large data, passing a keyword argument (kwarg) max_length
    price = models.FloatField()                                    # field for floating point numbers
    stock = models.IntegerField()                                  # field for Integer numbers
    image_url = models.CharField(max_length = 2083)                # 2083 is the standard maximum length for urls


class Offer(models.Model):
    code = models.CharField(max_length = 7)
    description = models.CharField(max_length = 255)
    discount = models.FloatField()

