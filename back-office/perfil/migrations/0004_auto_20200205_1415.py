# Generated by Django 3.0.2 on 2020-02-05 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('perfil', '0003_auto_20200205_1414'),
    ]

    operations = [
        migrations.AlterField(
            model_name='perfil',
            name='trayectoria',
            field=models.CharField(max_length=500),
        ),
    ]
