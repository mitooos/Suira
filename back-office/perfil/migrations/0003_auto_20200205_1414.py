# Generated by Django 3.0.2 on 2020-02-05 14:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('perfil', '0002_remove_perfil_cliente'),
    ]

    operations = [
        migrations.AddField(
            model_name='perfil',
            name='trayectoria',
            field=models.CharField(blank=True, max_length=500),
        ),
        migrations.AlterField(
            model_name='perfil',
            name='descripcion',
            field=models.CharField(max_length=500),
        ),
    ]
