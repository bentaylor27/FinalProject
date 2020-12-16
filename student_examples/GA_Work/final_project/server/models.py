from peewee import *
import datetime

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