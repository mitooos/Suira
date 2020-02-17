from rest_framework import serializers
from ..models import Perfil
from tag.serializer import TagSerializer
from link.serializer import LinkSerializer


class PerfilSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)
    links = LinkSerializer(many=True)
    class Meta:
        model = Perfil
        fields = '__all__'