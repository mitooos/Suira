from .models import Cliente
from usuario.logic import *
from perfil.logic import *

def get_clientes():
    return Cliente.objects.all()

def get_cliente(id):
    return Cliente.objects.get(id=id)

def create_cliente(validated_data):
    usr = create_usuario(validated_data.pop('usuario'))
    profile = create_profile(validated_data.pop('perfil'))

    
    nombre = validated_data.get('nombre')
    email = validated_data.get('email')
    n_trabajos = validated_data.get('n_trabajos')
    proxima_fecha = validated_data.get('proxima_fecha')
    comentarios = validated_data.get('comentarios')

    cliente = Cliente(usuario=usr,perfil=profile,nombre=nombre,email=email,n_trabajos=n_trabajos,proxima_fecha=proxima_fecha,comentarios=comentarios)
    cliente.save()
    return cliente

def update_cliente(instance, validated_data):
    usr = update_usuario(instance.usuario,validated_data.pop('usuario'))
    profile = update_profile(instance.perfil,validated_data.pop('perfil'))

    
    instance.nombre = validated_data.get('nombre')
    instance.email = validated_data.get('email')
    instance.n_trabajos = validated_data.get('n_trabajos')
    instance.proxima_fecha = validated_data.get('proxima_fecha')
    instance.comentarios = validated_data.get('comentarios')

    instance.save()
    return instance

def delete_cliente(instance):
    instance.delete()