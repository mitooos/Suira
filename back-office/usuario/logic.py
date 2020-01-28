from .models import Usuario

def create_usuario(validated_data):
    username = validated_data.get('username')
    password = validated_data.get('password')
    usr = Usuario(username=username)
    usr.set_password(password) 
    usr.save()
    return usr

def update_usuario(instance, validated_data):
    instance.username = validated_data.get('username')
    password = validated_data.get('password')
    instance.set_password(password) 
    instance.save()
    return instance