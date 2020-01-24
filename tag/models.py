from django.db import models
from perfil.models import Perfil

# Create your models here.

class Tag():
    perfil = models.ForeignKey(Perfil, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=30)