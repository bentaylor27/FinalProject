from flask import Flask, jsonify, g
from flask_cors import CORS
import pymongo # Import pymongo module

import models
from resources.shows import show


# Establish a connection 
from pymongo import MongoClient
# Connection to MongoDB cluster

client = pymongo.MongoClient("mongodb+srv://bentaylor:bentaylor27@cluster0.7sasy.mongodb.net/archive?retryWrites=true&w=majority")
db = client.test


db = client['Archive']
collection = db['GD']


document = {
    'date': '1973-03-24',
    'venue': 'The Spectrum',
    'location': 'Philadelphia, PA'
}

id = collection.insert_one(document).inserted_id
print('id')
print(id)


DEBUG = True
PORT = 8000

# Initialize an instance of the Flask class.
# This starts the website!
app = Flask(__name__)

# Database logic
@app.before_request
def before_request():
    '''Connect to the database before each request.'''
    g.db = models.DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    '''Close the connection after each request.'''
    g.db.close()
    return response


CORS(show, origins=['http://localhost:8000'], supports_credentials=True)

app.register_blueprint(show, url_prefix='/api/v1/shows')

# The default URL ends in / ("my-website.com/").
@app.route('/')
def index():
    return 'hello world'


# Run the app when the program starts!
if __name__ == '__main__':
    models.initialize()
    app.run(debug=DEBUG, port=PORT)