# Generated by Django 3.0.2 on 2020-02-12 12:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('perfil', '0004_auto_20200205_1415'),
    ]

    operations = [
        migrations.CreateModel(
            name='Link',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plataforma', models.CharField(max_length=20)),
                ('url', models.URLField()),
                ('perfil', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='perfil.Perfil')),
            ],
        ),
    ]
