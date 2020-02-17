from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from backOffice.authentication.permissions import get_user_from_token

from .logic import *
from .serializer import ClienteSerializer

@api_view(['GET', 'POST'])
def list(request):
    user = get_user_from_token(request)
    if user is None or user.role != 'admin':
        return HttpResponse(status=401)

    if request.method == 'GET':
        clientes = get_clientes()
        serializer = ClienteSerializer(clientes, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ClienteSerializer(data=data)
        if serializer.is_valid():
            create_cliente(validated_data=data)
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@api_view(['GET', 'PUT', 'DELETE'])
def detail(request, pk):

    user = get_user_from_token(request)
    if user is None or user.role != 'admin':
        return HttpResponse(status=401)
        
    cliente = get_cliente(pk)
    if request.method == 'GET':
        serializer = ClienteSerializer(cliente)
        return JsonResponse(serializer.data)
    
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = ClienteSerializer(data=data)
        if serializer.is_valid():
            update_cliente(cliente, data)
            return JsonResponse(serializer.data, status=204)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        delete_cliente(cliente)
        return HttpResponse(status=204)