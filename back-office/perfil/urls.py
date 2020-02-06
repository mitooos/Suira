from django.urls import path
from .views import *

urlpatterns = [
    path('', list),
    path('<int:pk>/', detail)
]