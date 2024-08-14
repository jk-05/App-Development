from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LoginView, UserViewSet, RoleViewSet, ApplicationViewSet, ProfileViewSet, EmployeeViewSet, AdminViewSet
from . import views
# Create a router and register viewsets
router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'roles', RoleViewSet)
router.register(r'applications', ApplicationViewSet)
router.register(r'profiles', ProfileViewSet)
router.register(r'employees', EmployeeViewSet)
router.register(r'admin', AdminViewSet)

urlpatterns = [
    # Include the router URLs
    path('', include(router.urls)),
    # Add the login URL
    path('login/', LoginView.as_view(), name='login'),
   # path('api/roles/', RoleViewSet.as_view({'get': 'list', 'post': 'create'})),
   path('api/roles/<int:pk>/', RoleViewSet.as_view({'get': 'retrieve', 'delete': 'destroy'})),
   
   
]
