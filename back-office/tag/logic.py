from .models import Tag

def create_tag(validated_data, perfil):
    nombre = validated_data.get('nombre')
    return Tag(perfil=perfil, nombre=nombre).save()

def update_tag(validated_data, id):
    instance = Tag.objects.get(pk=id)
    instance.nombre = validated_data.get('nombre')
    instance.save()
    return instance

def delete_tag(instance):
    return instance.delete()