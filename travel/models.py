from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    numFollowers = models.IntegerField(default=0, null=True, blank=True)


