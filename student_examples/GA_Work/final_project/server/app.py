import os
from flask import Flask, jsonify, request, g
from flask_cors import CORS
import pymongo # Import pymongo module

import models
from resources.shows import show



# Establish a connection 
from pymongo import MongoClient
# Connection to MongoDB cluster

client = pymongo.MongoClient("mongodb+srv://bentaylor:bentaylor27@cluster0.7sasy.mongodb.net/archive?retryWrites=true&w=majority")
db = client.test

# MongoDB test data
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
    print("you should see this before each request")
    g.db = models.DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    '''Close the connection after each request.'''
    print("you should see this after each request")
    g.db.close()
    return response


CORS(show, origins=['http://localhost:8000'], supports_credentials=True)

app.register_blueprint(show, url_prefix='/api/v1/shows')

# The default URL ends in / ("my-website.com/").
@app.route('/api', methods=['GET'])
def index():
    # value = request.json[]
    return {
        'date': '1969-11-08',
        'venue': 'Fillmore West',
        'location': 'San Francisco, CA'
    },
    {
        'date': '1973-03-24',
        'venue': 'The Spectrum',
        'location': 'Philadelphia, PA'
    },
    {
        'date': '1977-10-29',
        'venue': 'Northern Illinois University',
        'location': 'Dekalb, IL'
    },
    {
        'date': '1978-09-15',
        'venue': 'Gizah Sound and Light Theater',
        'location': 'Cairo, Egypt'
    },
    {
        'date': '1987-03-27',
        'venue': 'Hartford Civic Center',
        'location': 'Hartford, CT'
    }


if 'ON_HEROKU' in os.environ:
    print('\non heroku!')
    models.initialize()

# Run the app when the program starts!
if __name__ == '__main__':
    models.initialize()
    app.run(debug=DEBUG, port=PORT)
