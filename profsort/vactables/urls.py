from rest_framework.routers import DefaultRouter
from .api import *


router = DefaultRouter()
router.register('general', GeneralViewSet, 'General')
router.register('quantity', QuantityViewSet, 'Quantity')
router.register('level', LevelViewSet, 'Level')
router.register('fraction', FractionViewSet, 'Fraction')
router.register('top', TopViewSet, 'Top')
router.register('generalpython', GeneralPythonViewSet, 'GeneralPython')
router.register('quantitypython', QuantityPythonViewSet, 'QuantityPython')
router.register('levelpython', LevelPythonViewSet, 'LevelPython')
router.register('fractionpython', FractionPythonViewSet, 'FractionPython')
router.register('toppython', TopPythonViewSet, 'TopPython')

urlpatterns = router.urls