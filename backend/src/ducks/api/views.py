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

# Used for DuckListView in Frontend to list all the reports.
class DuckListView(ListAPIView):
    queryset = Duck.objects.all()
    serializer_class = DuckSerializer

# Used for DuckDetailView in Frontend to show detailed infomation.
class DuckDetailedView(RetrieveAPIView):
    queryset = Duck.objects.all()
    serializer_class = DuckSerializer

# Used for DuckCreateView in Frontend to craete new report.
class DuckCreateView(CreateAPIView):
    queryset = Duck.objects.all()
    serializer_class = DuckSerializer

# Used for DuckDetailView in Frontend to update existing reports in database.
class DuckUpdateView(UpdateAPIView):
    queryset = Duck.objects.all()
    serializer_class = DuckSerializer

# Used for to delete report from database.
class DuckDeleteView(DestroyAPIView):
    queryset = Duck.objects.all()
    serializer_class = DuckSerializer