from django.db import models
from decimal import Decimal
from django.contrib.auth.models import User



# Create your models here.
class Stock(models.Model):
    ticker = models.CharField(max_length = 5, unique = True, default = "")
    short_name = models.CharField(max_length = 25, default = "")
    long_name = models.CharField(max_length = 256, default = "")
    current_price = models.DecimalField(max_digits = 20, decimal_places=2, default=Decimal(0))
    invested = models.DecimalField(max_digits = 20, decimal_places=2, default=Decimal(0))
    stocks_bought = models.DecimalField(max_digits = 20, decimal_places=8, default=Decimal(0))


class Portfolio(models.Model):
    user = models.CharField(max_length = 60, unique=True, default = "")
    owner = models.ForeignKey(User, related_name="portfolio", on_delete=models.CASCADE, null=True)
    email = models.EmailField(max_length = 100, unique=True)
    funds = models.DecimalField(max_digits = 20, decimal_places=2, default=Decimal(0))
    created_at = models.DateTimeField(auto_now_add=True)
    stocks = models.ManyToManyField(Stock)

    
