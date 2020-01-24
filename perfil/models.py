from django.db import models
from cliente.models import Cliente

# Create your models here.


class Perfil():
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    empresa = models.CharField(max_length=50)
    ruta_imagen = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=250)
    telefono = models.CharField(max_length=30)