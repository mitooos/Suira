from rest_framework import serializers
from .models import Cliente
from usuario.serializer import UserSerializer
from perfil.serializer import PerfilSerializer

class ClienteSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    profile = PerfilSerializer()

    class Meta:
        model = Cliente
        fields = ['user', 'profile', '__all__']