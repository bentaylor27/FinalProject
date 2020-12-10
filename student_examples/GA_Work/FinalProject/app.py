from flask import Flask


# Establish a connection 
from pymongo import MongoClient
# Connection to MongoDB cluster
client = MongoClient('localhost', 8000)
# cluster = MongoClient('mongodb+srv://bentaylor:<password>@cluster0.7sasy.mongodb.net/<dbname>?retryWrites=true&w=majority')
db = client.pymongo_test

# post = {'_id': 0, 'item': '1973-06-10: RFK Stadium'}
# collection.insert_one(post)


DEBUG = True
PORT = 8000

# Initialize an instance of the Flask class.
# This starts the website!
app = Flask(__name__)

# The default URL ends in / ("my-website.com/").
@app.route('/')
def index():
    return 'hello world'


# Run the app when the program starts!
if __name__ == '__main__':
    app.run(debug=DEBUG, port=PORT)