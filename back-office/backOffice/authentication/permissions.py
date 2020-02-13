from usuario.models import Usuario
import jwt
from ..settings import SECRET_KEY

def get_user_from_token(request):
    encoded_jwt = request.META.get('HTTP_BEARER')
    if encoded_jwt is None:
        return None
    try:
        payload = jwt.decode(encoded_jwt, SECRET_KEY, algorithms=['HS256'])
        pk = payload['user_id']
        usuario = Usuario.objects.get(pk=pk)
        return usuario
    except:
        return None