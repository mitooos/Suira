from django.db import models
from perfil.models import Perfil

# Create your models here.

class Tag(models.Model):
    perfil = models.ForeignKey(Perfil, on_delete=models.CASCADE, related_name='tags')
    nombre = models.CharField(max_length=30)