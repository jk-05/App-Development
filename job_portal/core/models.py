from django.db import models
from django.contrib.auth.hashers import make_password

class User(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=255)

class Role(models.Model):
    role = models.CharField(max_length=100)
    companyName = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    skills = models.TextField()
    experience = models.IntegerField()
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    imageURL = models.URLField()

class Application(models.Model):
    name = models.CharField(max_length=100)
    education = models.CharField(max_length=100)
    graduationYear = models.IntegerField()
    skills = models.TextField()
    languages = models.TextField()
    native = models.CharField(max_length=100)
    cgpa = models.FloatField()
    phoneNumber = models.CharField(max_length=15)
    status = models.CharField(max_length=50, default='Pending')
    role = models.CharField(max_length=100, default='Unknown')  # Set default value here
    company = models.CharField(max_length=100, default='Unknown')  # Set default value here



class Profile(models.Model):
    companyName = models.CharField(max_length=100)
    url = models.URLField()


class Employee(models.Model):
    companyName = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=255)

class Admin(models.Model):
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=255)
