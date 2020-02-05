from rest_framework import serializers
from .models import Cliente
from usuario.serializer import UserSerializer
from perfil.seializers.serializer import PerfilSerializer

class ClienteSerializer(serializers.ModelSerializer):
    usuario = UserSerializer()
    perfil = PerfilSerializer()

    class Meta:
        model = Cliente
        fields = '__all__'

class SimpleClienteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cliente
        fields = ['nombre', 'email']