import os
from peewee import *
import datetime
from playhouse.db_url import connect

DATABASE = SqliteDatabase('shows.sqlite')

# change db connection code to conditionally connect to Heroku PostgreSQL or local db
if 'ON_HEROKU' in os.environ:
    DATABASE = connect(os.environ.get('DATABASE_URL'))
else:
    DATABASE = SqliteDatabase('shows.sqlite')

class Show(Model):
    date = CharField()
    venue = CharField()
    location = CharField()
    
    class Meta: 
        database = DATABASE


def initialize():
    DATABASE.connect()
    DATABASE.create_tables([Show], safe=True)
    print('TABLES Created')
    DATABASE.close()