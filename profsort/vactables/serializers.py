from rest_framework import serializers
from vactables.models import *

class GeneralSerializer(serializers.ModelSerializer):
    class Meta:
        model = General
        fields = "__all__"


class QuantitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Quantity
        fields = "__all__"


class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = "__all__"


class FractionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fraction
        fields = "__all__"


class TopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Top
        fields = "__all__"


class GeneralPythonSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneralPython
        fields = "__all__"


class QuantityPythonSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuantityPython
        fields = "__all__"


class LevelPythonSerializer(serializers.ModelSerializer):
    class Meta:
        model = LevelPython
        fields = "__all__"


class FractionPythonSerializer(serializers.ModelSerializer):
    class Meta:
        model = FractionPython
        fields = "__all__"


class TopPythonSerializer(serializers.ModelSerializer):
    class Meta:
        model = TopPython
        fields = "__all__"
