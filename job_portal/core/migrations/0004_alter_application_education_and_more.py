# Generated by Django 5.0.8 on 2024-08-12 15:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_delete_customuser'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='education',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='application',
            name='languages',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='application',
            name='name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='application',
            name='native',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='application',
            name='phoneNumber',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='application',
            name='status',
            field=models.CharField(default='Pending', max_length=50),
        ),
    ]
