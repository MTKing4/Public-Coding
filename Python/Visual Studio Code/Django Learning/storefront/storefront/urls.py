"""
URL configuration for storefront project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
import debug_toolbar                                                # Added for debug toolbar
# from debug_toolbar.toolbar import debug_toolbar_urls                # Added for debug toolbar

urlpatterns = [
    path('admin/', admin.site.urls),
    path('playground/', include('playground.urls')),                #plyaground/ path means everything inside the playground directory, since we typed it here, there's no need to retype it in the playground's urls.py, we just type the name of the directory inside it
    path('__debug__/', include(debug_toolbar.urls))                 # Added for debug toolbar
]
