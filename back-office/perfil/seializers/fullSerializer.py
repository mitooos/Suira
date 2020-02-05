from rest_framework import serializers
from ..models import Perfil
from cliente.serializer import SimpleClienteSerializer
from tag.serializer import TagSerializer

class PerfilSerializerAll(serializers.ModelSerializer):
    cliente = SimpleClienteSerializer(source='clientes', many=True)
    tags = TagSerializer(many=True)
    class Meta:
        model = Perfil
        fields = ('__all__')