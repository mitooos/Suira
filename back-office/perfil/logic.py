from .models import Perfil
from tag.logic import *
from link.logic import *

def get_perfiles():
    return Perfil.objects.all()

def get_profile(pk):
    return Perfil.objects.get(pk=pk)

def create_profile(validated_data):
    empresa = validated_data.get('empresa')
    ruta_imagen = validated_data.get('ruta_imagen')
    descripcion = validated_data.get('descripcion')
    trayectoria = validated_data.get('trayectoria')
    telefono = validated_data.get('telefono')
    ubicacion = validated_data.get('ubicacion')

    perfil = Perfil(empresa=empresa, ruta_imagen=ruta_imagen,descripcion=descripcion,trayectoria=trayectoria,telefono=telefono, ubicacion=ubicacion)
    perfil.save()

    tags = validated_data.pop('tags')
    for tag in tags:
        create_tag(validated_data=tag, perfil=perfil)

    links = validated_data.pop('links')
    for link in links:
        create_link(validated_data=link, perfil=perfil)

    return perfil

def update_profile(instance,validated_data):
    instance.empresa = validated_data.get('empresa')
    instance.ruta_imagen = validated_data.get('ruta_imagen')
    instance.descripcion = validated_data.get('descripcion')
    instance.trayectoria = validated_data.get('trayectoria')
    instance.telefono = validated_data.get('telefono')
    instance.ubicacion = validated_data.get('ubicacion')

    old_tags = instance.tags.all()
    new_tags = []
    tags = validated_data.pop('tags')
    for tag in tags:
        try:
            id = tag.get('id')
            new_tag = update_tag(tag, id)
        except:
            new_tag = create_tag(validated_data=tag, perfil=instance)
        new_tags.append(new_tag)

    for old_tag in old_tags:
        if old_tag not in new_tags:
            delete_tag(old_tag)

    old_links = instance.links.all()
    new_links = []
    links = validated_data.pop('links')
    for link in links:
        try:
            id = link.get('id')
            new_link = update_link(link,id)

        except:
            new_link = create_link(validated_data=link, perfil=instance)  
        new_links.append(new_link)
    
    for old_link in old_links:
        if old_link not in new_links:
            delete_link(old_link)

    instance.save()
    return instance