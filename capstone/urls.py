
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

APP_NAME = "capstone"

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("places", views.places, name="places"),
    path("favorites", views.favorites, name="favorites"),
    path("updateRecord/<str:name>", views.updateRecord, name="updateRecord"),

# API routes
    path("sites/<str:site>", views.sites, name="sites"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
