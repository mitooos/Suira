from django.db import models
from usuario.models import Usuario
from perfil.models import Perfil


class Cliente(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    perfil = models.ForeignKey(Perfil, on_delete=models.SET_NULL, null=True)
    nombre = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    n_trabajos = models.IntegerField()
    proxima_fecha = models.DateField(blank=True)
    comentarios = models.TextField(blank=True, null=True)