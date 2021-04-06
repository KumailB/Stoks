from rest_framework import routers
from .api import PortfolioViewSet

router = routers.DefaultRouter()
router.register('api/Portfolio', PortfolioViewSet, 'Portfolio')

urlpatterns = router.urls
