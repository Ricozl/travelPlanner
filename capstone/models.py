from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass

class Categories(models.Model):
    cat_name = models.CharField(max_length=64, blank=True, null=True)

    class Meta:
        ordering = ['cat_name']

    def __str__(self):
        return self.cat_name

class Sites(models.Model):
    title = models.CharField(max_length=64)
    description = models.CharField(max_length=512)
    image_url = models.URLField(max_length=1024, blank=True)
    sites_category = models.ForeignKey(Categories, on_delete=models.CASCADE, related_name="sites_cat")

    class Meta:
        ordering = ['title']

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "image_url": self.image_url,
            "sites_category": self.sites_category.cat_name
        }

    def __str__(self):
        return "Sites title: {}, Sites Category: {}, Description: {}, Image URL: {}".format(self.title, self.sites_category.cat_name, self.description, self.image_url)

class Favorites(models.Model):
    item = models.ForeignKey(Sites, on_delete=models.CASCADE, related_name='fav_list')
    watcher = models.ForeignKey(User, on_delete=models.CASCADE, related_name='fav_user')
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['watcher', 'item', 'is_active']

    def serialize(self):
        return {
            "item": self.item.fav_list,
            "watcher": self.watcher.fav_user,
            "is_active": self.is_active
        }

    def __str__(self):
        return "Watcher: {}, Site: {}, Is_active: {}".format(self.watcher.username, self.item.title, self.is_active)
