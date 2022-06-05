from django.contrib import admin
from django.urls import include, path
from baseapp.views import *
from django.conf.urls.static import static

from django.conf import settings


urlpatterns = [
    path('admin/', include('adminapp.urls')),
    path('', include('shop.urls')),

    path('i18n/', include('django.conf.urls.i18n')),

    path('base/', include('baseapp.urls')),

    path('accounts/', include('accounts.urls')),
]

urlpatterns += static(settings.MEDIA_URL,
                      document_root=settings.MEDIA_ROOT)
