
from django.urls import path

from . import views

APP_NAME = "capstone"

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("places", views.places, name="places"),


# API routes
    path("sites/<str:site>/", views.sites, name="sites"),
]