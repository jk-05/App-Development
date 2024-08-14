from django.core.management.base import BaseCommand
from core.models import User

class Command(BaseCommand):
    help = 'Create a superuser'

    def handle(self, *args, **kwargs):
        email = input("Email: ")
        name = input("Name: ")
        password = input("Password: ")

        if User.objects.filter(email=email).exists():
            self.stdout.write(self.style.ERROR(f"User with email {email} already exists."))
            return

        user = User(email=email, name=name, password=password)
        user.save()
        self.stdout.write(self.style.SUCCESS(f"Superuser {name} created successfully."))
