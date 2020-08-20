from django.contrib import admin
from django.urls import path, include
from ducks import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('ducks.api.urls')),
]
