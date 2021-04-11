from flask import render_template, request, jsonify
from backend import app
from backend import database as db_helper


@app.route('/foods')
def get_all_foods():
    pass

@app.route('/foods/add', methods=["POST"])
def add_food():
    data = request.get_json()

    try:
        db_helper.add_food(data)
        result = {
            'success': True,
            'response': 'Food added'
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }

    return jsonify(result)


@app.route('/foods/<string:food_name>/<int:limit>')
def get_food_name(food_name, limit):

    try:
        food_results = db_helper.get_food_name(food_name, limit)
        result = {
            'success': True,
            'response': food_results
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }
    
    return jsonify(result)

@app.route('/foods/update/<int:food_id>')
def update_food_id(food_id):
    pass

@app.route('/foods/delete/<int:food_id>')
def delete_food_id(food_id):
    pass


@app.route('/recipe/add')
def add_recipe():
    data = request.get_json()
    try:
        db_helper.add_recipe(data)
        result = {
            'success': True,
            'response': 'Recipe added'
        }
    except:
        result = {
            'success': False,
            'response': 'Something went wrong'
        }

    return jsonify(result)

@app.route('/recipe/update/<int:recipe_id>')
def update_recipe(recipe_id):
    pass

@app.route('/recipe/delete/<int:recipe_id>')
def delete_recipe(recipe_id):
    pass