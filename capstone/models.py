from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass


class Sites(models.Model):
    title = models.CharField(max_length=64)
    description = models.CharField(max_length=512)
    image_url = models.URLField(max_length=1024, blank=True)

    class Meta:
        ordering = ['title']

    def __str__(self):
        return "Sites title: {}, Sites Category: {}, Description: {}, Image URL: {}".format(self.title, self.sites_category.cat_name, self.description, self.image_url)
