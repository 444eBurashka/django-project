from django.db import models
from django.contrib.postgres.fields import ArrayField


class General(models.Model):
    year = models.IntegerField(unique=True)
    mean = models.FloatField()


class Quantity(models.Model):
    year = models.IntegerField(unique=True)
    cnt = models.IntegerField()


class Level(models.Model):
    city = models.CharField(max_length=100)
    mean = models.FloatField()


class Fraction(models.Model):
    city = models.CharField(max_length=100)
    cnt = models.IntegerField()

class Top(models.Model):
    year = models.IntegerField()
    top20 = ArrayField(models.CharField(max_length=200))


# Python developer
class GeneralPython(models.Model):
    year = models.IntegerField(unique=True)
    mean = models.FloatField()


class QuantityPython(models.Model):
    year = models.IntegerField(unique=True)
    cnt = models.IntegerField()


class LevelPython(models.Model):
    city = models.CharField(max_length=100)
    mean = models.FloatField()


class FractionPython(models.Model):
    city = models.CharField(max_length=100)
    cnt = models.IntegerField()

class TopPython(models.Model):
    year = models.IntegerField()
    top20 = ArrayField(models.CharField(max_length=200))