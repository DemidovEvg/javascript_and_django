# Generated by Django 4.0.4 on 2022-05-21 14:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0006_alter_review_date_update'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='review',
            unique_together=set(),
        ),
    ]
