from .models import Portfolio
from rest_framework import viewsets, permissions
from .serializers import PortfolioSerializer

# Portfolio Viewset

class PortfolioViewSet(viewsets.ModelViewSet):
    permissions = [
        permissions.IsAuthenticated
    ]
    serializer_class = PortfolioSerializer

    def get_queryset(self):
            return self.request.user.portfolio.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    

    