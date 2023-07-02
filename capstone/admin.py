from django.contrib import admin
from .models import Categories, Sites, Favorites

# Register your models here.
admin.site.register(Categories)
admin.site.register(Sites)
admin.site.register(Favorites)
