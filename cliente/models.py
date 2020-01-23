from django.db import models


class Cliente(models.Model):
    nombre = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    nTrabajos = models.IntegerField()
    proximaFecha = models.DateField(blank=True)
    comentarios = models.TextField(blank=True, null=True)