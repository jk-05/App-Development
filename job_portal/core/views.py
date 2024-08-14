from django.contrib.auth import authenticate
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User, Role, Application, Profile, Employee, Admin
from .serializers import UserSerializer, RoleSerializer, ApplicationSerializer, ProfileSerializer, EmployeeSerializer, AdminSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny
class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            # Check if the user exists in the User table
            user = User.objects.get(email=email)
            if user.password == password:
                # Successful login
                return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
            else:
                # Incorrect password
                return Response({'message': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            # User not found
            return Response({'message': 'User not found'}, status=status.HTTP_400_BAD_REQUEST)

# Define the viewsets
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    

class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    permission_classes = [AllowAny]

class ApplicationViewSet(viewsets.ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    
class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class AdminViewSet(viewsets.ModelViewSet):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer
