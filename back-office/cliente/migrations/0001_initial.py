# Generated by Django 2.2.5 on 2020-01-24 17:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=50)),
                ('n_trabajos', models.IntegerField()),
                ('proxima_fecha', models.DateField(blank=True)),
                ('comentarios', models.TextField(blank=True, null=True)),
            ],
        ),
    ]
