from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from .logic import *
from .seializers.serializer import *
from .seializers.fullSerializer import PerfilSerializerAll

# Create your views here.

@api_view(['GET', 'POST'])
def list(request):
    if request.method == 'GET':
        perfiles = get_perfiles()
        serializer = PerfilSerializerAll(perfiles, many=True)
        return JsonResponse(serializer.data, safe=False)

