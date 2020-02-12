from .models import Link

def create_link(validated_data):
    perfil = validated_data.get('perfil')
    plataforma = validated_data.get('plataforma')
    url = validated_data.get('url')
    Link(perfil=perfil, plataforma=plataforma, url=url).save()
