from vactables.models import *
from rest_framework import viewsets, permissions
from .serializers import *

class GeneralViewSet(viewsets.ModelViewSet):
    queryset = General.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = GeneralSerializer

class QuantityViewSet(viewsets.ModelViewSet):
    queryset = Quantity.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = QuantitySerializer

class LevelViewSet(viewsets.ModelViewSet):
    queryset = Level.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LevelSerializer

class FractionViewSet(viewsets.ModelViewSet):
    queryset = Fraction.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = FractionSerializer

class TopViewSet(viewsets.ModelViewSet):
    queryset = Top.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TopSerializer

class GeneralPythonViewSet(viewsets.ModelViewSet):
    queryset = GeneralPython.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = GeneralPythonSerializer

class QuantityPythonViewSet(viewsets.ModelViewSet):
    queryset = QuantityPython.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = QuantityPythonSerializer

class LevelPythonViewSet(viewsets.ModelViewSet):
    queryset = LevelPython.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LevelPythonSerializer

class FractionPythonViewSet(viewsets.ModelViewSet):
    queryset = FractionPython.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = FractionPythonSerializer

class TopPythonViewSet(viewsets.ModelViewSet):
    queryset = TopPython.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TopPythonSerializer