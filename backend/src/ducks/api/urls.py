from django.urls import path

from .views import DuckListView, DuckDetailedView, DuckCreateView, DuckUpdateView, DuckDeleteView

urlpatterns = [
    path('', DuckListView.as_view()),
    path('create/', DuckCreateView.as_view()),
    path('<pk>', DuckDetailedView.as_view()),
    path('<pk>/update/', DuckUpdateView.as_view()),
    path('<pk>/delete/', DuckDeleteView.as_view())
]
