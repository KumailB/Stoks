from rest_framework import serializers
from .models import Portfolio
from .models import Stock

class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = '__all__'

class PortfolioSerializer(serializers.ModelSerializer):
    stocks = StockSerializer(read_only=True, many=True)

    class Meta:
        model = Portfolio
        fields = '__all__'


