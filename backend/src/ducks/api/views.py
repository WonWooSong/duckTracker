from rest_framework import permissions
from ducks.models import Duck
from .serializers import DuckSerializer
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)


class DuckListView(ListAPIView):
    queryset = Duck.objects.all()
    serializer_class = DuckSerializer

class DuckDetailedView(RetrieveAPIView):
    queryset = Duck.objects.all()
    serializer_class = DuckSerializer

class DuckCreateView(CreateAPIView):
    queryset = Duck.objects.all()
    serializer_class = DuckSerializer

class DuckUpdateView(UpdateAPIView):
    queryset = Duck.objects.all()
    serializer_class = DuckSerializer

class DuckDeleteView(DestroyAPIView):
    queryset = Duck.objects.all()
    serializer_class = DuckSerializer