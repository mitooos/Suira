# Generated by Django 3.0.2 on 2020-02-04 17:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('perfil', '0002_remove_perfil_cliente'),
        ('tag', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tag',
            name='perfil',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tags', to='perfil.Perfil'),
        ),
    ]
