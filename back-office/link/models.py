from django.db import models
from perfil.models import Perfil

# Create your models here.
class Link(models.Model):
    perfil = models.ForeignKey(Perfil, on_delete=models.CASCADE, related_name='links')
    plataforma = models.CharField(max_length=20)
    url = models.URLField()