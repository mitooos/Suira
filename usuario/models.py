from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Usuario(AbstractUser):
    username = models.CharField(max_length=30, unique=True)


    USERNAME_FIELD = 'username'
