from rest_framework.routers import DefaultRouter
from .api import *


router = DefaultRouter()
router.register('api/general', GeneralViewSet, 'General')
router.register('api/quantity', QuantityViewSet, 'Quantity')
router.register('api/level', LevelViewSet, 'Level')
router.register('api/fraction', FractionViewSet, 'Fraction')
router.register('api/top', TopViewSet, 'Top')
router.register('api/generalpython', GeneralPythonViewSet, 'GeneralPython')
router.register('api/quantitypython', QuantityPythonViewSet, 'QuantityPython')
router.register('api/levelpython', LevelPythonViewSet, 'LevelPython')
router.register('api/fractionpython', FractionPythonViewSet, 'FractionPython')
router.register('api/toppython', TopPythonViewSet, 'TopPython')

urlpatterns = router.urls