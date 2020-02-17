from .models import Link

def create_link(validated_data, perfil):
    plataforma = validated_data.get('plataforma')
    url = validated_data.get('url')
    link = Link(perfil=perfil, plataforma=plataforma, url=url)
    link.save()
    return link

def update_link(validated_data, id):
    instance = Link.objects.get(pk=id)
    instance.plataforma = validated_data.get('plataforma')
    instance.url = validated_data.get('url')
    instance.save()
    return instance

def delete_link(instance):
    return instance.delete()