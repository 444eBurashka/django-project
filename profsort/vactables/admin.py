from django.contrib import admin
from .models import *

# Регистрация моделей для общего раздела
@admin.register(General)
class GeneralAdmin(admin.ModelAdmin):
    list_display = ('year', 'mean')

@admin.register(Quantity)
class QuantityAdmin(admin.ModelAdmin):
    list_display = ('year', 'cnt')

@admin.register(Level)
class LevelAdmin(admin.ModelAdmin):
    list_display = ('city', 'mean')

@admin.register(Fraction)
class FractionAdmin(admin.ModelAdmin):
    list_display = ('city', 'cnt')

@admin.register(Top)
class TopAdmin(admin.ModelAdmin):
    list_display = ('year', 'top20')

# Регистрация моделей для Python разработчиков
@admin.register(GeneralPython)
class GeneralPythonAdmin(admin.ModelAdmin):
    list_display = ('year', 'mean')

@admin.register(QuantityPython)
class QuantityPythonAdmin(admin.ModelAdmin):
    list_display = ('year', 'cnt')

@admin.register(LevelPython)
class LevelPythonAdmin(admin.ModelAdmin):
    list_display = ('city', 'mean')

@admin.register(FractionPython)
class FractionPythonAdmin(admin.ModelAdmin):
    list_display = ('city', 'cnt')

@admin.register(TopPython)
class TopPythonAdmin(admin.ModelAdmin):
    list_display = ('year', 'top20')