from django.db import models



class Perfil(models.Model):
    empresa = models.CharField(max_length=50)
    ruta_imagen = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=500)
    trayectoria = models.CharField(max_length=500)
    telefono = models.CharField(max_length=30)