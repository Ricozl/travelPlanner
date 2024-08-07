from django.contrib import admin
from .models import Categories, Sites, Favorites

# Register your models here.
class SitesAdmin(admin.ModelAdmin):
    list_display = ("title", "description", "sites_category")

admin.site.register(Categories)
admin.site.register(Sites, SitesAdmin)
admin.site.register(Favorites)
