from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from .logic import *
from .seializers.serializer import *
from .seializers.fullSerializer import PerfilSerializerAll

# Create your views here.

@api_view(['GET',])
def list(request):
    if request.method == 'GET':
        perfiles = get_perfiles()
        serializer = PerfilSerializerAll(perfiles, many=True)
        return JsonResponse(serializer.data, safe=False)

@api_view(['GET',])
def detail(request, pk):
    try:
        instance = get_profile(pk)
    except:
        return HttpResponse(status=404)
    if request.method == 'GET':
        serilizer = PerfilSerializerAll(instance)
        return JsonResponse(serilizer.data)


