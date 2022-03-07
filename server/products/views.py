from django.shortcuts import render
from rest_framework import viewsets
from products.models import Product
from products.serializers import ProductSerializer


# Create your views here.
class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
