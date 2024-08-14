# Register your models here.
from django.contrib import admin
from .models import Application
from .models import Profile

@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('name', 'education', 'graduationYear', 'skills', 'languages', 'native', 'cgpa', 'phoneNumber', 'status', 'role', 'company')
    
@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('companyName', 'url')
    search_fields = ('companyName',)