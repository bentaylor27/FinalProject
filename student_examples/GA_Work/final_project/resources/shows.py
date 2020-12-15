import models

from flask import Blueprint, jsonify, request
from playhouse.shortcuts import model_to_dict

show = Blueprint('shows', 'show')

# Routes
# Gets index route
@show.route('/', methods=['GET'])
def get_all_shows():
    try:
        shows = [model_to_dict(show) for show in models.Show.select()]
        print(shows)
        return jsonify(data=shows, status={'code': 200, 'message': 'Success'})
    except models.DoesNotExist:
        return jsonify(data={}, status={'code': 401, 'message': 'Error getting the resources'})

# Create route
@show.route('/', methods=['POST'])
def create_shows():
    payload = request.get_json()
    print(type(payload), 'payload')
    show = models.Show.create(**payload)
    print(show.__dict__)
    print(dir(show))
    print(model_to_dict(show), 'model to dict')
    show_dict = model_to_dict(show)
    return jsonify(data=show_dict, status={'code': 201, 'message': 'Success'})

# Show route
@show.route('/<id>', methods=['GET'])
def get_one_show(id):
    print(id, 'reserved word')
    show = models.Show.get_by_id(id)
    print(show.__dict__)
    return jsonify(data=model_to_dict(show), status={'code': 200, 'message': 'Success'})

# Update route
@show.route('/<id>', methods=['PUT'])
def update_show(id):
    payload = request.get_json()
    query = models.Show.update(**payload).where(models.Show.id==id)
    query.execute()
    return jsonify(data=model_to_dict(models.Show.get_by_id(id)),
    status={'code': 200, 'message': 'Resource updated successfully'})

# Delete route
@show.route('/<id>', methods=['DELETE'])
def delete_show(id):
    query = models.Show.delete().where(models.Show.id==id)
    query.execute()
    return jsonify(data='Resource successfully deleted', status={'code': 200, 'message': 'Resource deleted successfully'})