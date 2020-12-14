from flask import Blueprint, jsonify, request, make_response
from ..models import Cube, Image, db
import json


cube_routes = Blueprint('cubes', __name__)


@cube_routes.route('/')
def fetch_images():
    response = db.session.query(Cube, Image).join(Image).all()
    cube_dict = {}
    for cube, image in response:
        cube_instance = cube.to_dict()
        image_instance = image.to_dict()
        if cube_instance['id'] == image_instance['cube_id']:
            cube_instance['urls'].append(image_instance['url'])

        if cube_instance['id'] in cube_dict:
            cube_dict[cube_instance['id']]['urls'].append(
                image_instance['url'])
        else:
            cube_dict[cube_instance['id']] = cube_instance

    return jsonify(cube_dict)


@cube_routes.route('/<int:id>')
def cube(id):
    cube = Cube.query.filter_by(id=id).first()
    images = Image.query.filter_by(cube_id=id).all()
    image = []
    cam = cube.to_dict()
    for img in images:
        img_instance = img.to_dict()
        url = img_instance['url']
        image.append(url)
    cam['urls'] = image
    return jsonify(cam)
