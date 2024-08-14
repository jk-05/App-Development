from rest_framework import serializers
from .models import User, Role, Application, Profile, Employee, Admin

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'name', 'password']
       
       

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['id','role', 'companyName', 'location', 'skills', 'experience', 'salary', 'imageURL']

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ['id', 'name', 'education', 'graduationYear', 'skills', 'languages', 'native', 'cgpa', 'phoneNumber', 'status', 'role', 'company']

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['companyName', 'url']

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['companyName', 'name', 'password']
        #extra_kwargs = {'password': {'write_only': True}}

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ['id','name', 'password']
        #extra_kwargs = {'password': {'write_only': True}}
