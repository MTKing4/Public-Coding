# NOTES: Steps ( terminal commands) to install a virtual enviroment and start a django project
# 1. mkdir storefront                                           make a directory
# 2. pipenv install django                                      install django in the virtual enviroment
# 3. code .                                                     open the project in vs code
# 4. pipenv shell                                               Activate virtual environment so that python interpreter will be used inside the virtual environment
# 5. django-admin startproject storefront                       To start the django project and name it
#    django-admin startproject .                                To start the django project in the current folder .
# 6. django-admin runserver
# 7. python manage.py runserver 9000
# 8. pipenv --venv                                              Find the virtual environment path


#--------------------------------------file: Settings.py--------------------------------------------------
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',                              # legacy, not used anymore, a session is a temporary memory on the server for managing user's data, it'd not used when building apis with django anymore
    'django.contrib.messages',                              # used for displaying one-time notifications for the user
    'django.contrib.staticfiles',                           # for serving static files like images, css files, etc.
    'playground'                                            # Added the newly created app here
]



# NOTES:
# Commands
# 1. python manage.py startapp playground                  # to create a new app

#--------------------------------------

# type Annotations and return annotations (new puthon feature)

#type Annotations: is to describe what the paramater's data type is and, syntax :str
#return annotations: is to describe what this function will return, syntax ->
#empty (...) can be used in functions for example if it's empty to accept it even if it's empty

#Example:
# (function) def path(
#     route: str,
#     view: (...) -> _ResponseType,
#     kwargs: dict[str, Any] = ...,
#     name: str = ...
# ) -> URLPattern

#--------------------------------------file: playground/views.py--------------------------------------------------

from django.shortcuts import render
from django.http import HttpResponse

def say_hello(request):
    return HttpResponse('Hello World')


#--------------------------------------file: urls.py--------------------------------------------------

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('playground/', include('playground.urls'))                #plyaground/ path means everything inside the playground directory, since we typed it here, there's no need to retype it in the playground's urls.py
]


#--------------------------------------file: playground/urls.py--------------------------------------------------

from django.urls import path
from . import views


urlpatterns =  [
 path('hello/', views.say_hello)                # hello path means playground/hello/, there's no need to retype it because it's already defined in in storefront's urls.py
]


#

from django.shortcuts import render
from django.http import HttpResponse

def say_hello(request):
    return render(request, 'hello.html', {'name': 'Mohammad'})          # to render a template, third paramter is context, used to map a string to an object of any  type


#--------------------------------------file: playground/urls.py--------------------------------------------------


{% if name %}
<h1>Hello {{ name }}</h1>
{% else %}
<h1>Hello World</h1>
{% endif %}