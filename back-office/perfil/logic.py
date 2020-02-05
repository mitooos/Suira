from .models import Perfil

def get_perfiles():
    return Perfil.objects.all()

def create_profile(validated_data):
    empresa = validated_data.get('empresa')
    ruta_imagen = validated_data.get('ruta_imagen')
    descripcion = validated_data.get('descripcion')
    telefono = validated_data.get('telefono')

    perfil = Perfil(empresa=empresa, ruta_imagen=ruta_imagen,descripcion=descripcion,telefono=telefono)
    perfil.save()
    return perfil

def update_profile(instance,validated_data):
    instance.empresa = validated_data.get('empresa')
    instance.ruta_imagen = validated_data.get('ruta_imagen')
    instance.descripcion = validated_data.get('descripcion')
    instance.telefono = validated_data.get('telefono')

    instance.save()
    return instance