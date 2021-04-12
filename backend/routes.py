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

@app.route('/foods/<int:food_id>', methods=['GET'])
def get_food_id(food_id):

    try:
        food_results = db_helper.get_food_id(food_id)
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

@app.route('/foods/<string:food_name>/<int:limit>', methods=['GET'])
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

@app.route('/foods/update/<int:food_id>', methods=['POST'])
def update_food_id(food_id):
    data = request.get_json()

    try:
        db_helper.update_food_id(food_id, data)
        result = {
            'success': True,
            'response': f'Updated {food_id} successfully'
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }

    return jsonify(result)
    

@app.route('/foods/delete/<int:food_id>', methods=['POST'])
def delete_food_id(food_id):
    try:
        db_helper.delete_food_id(food_id)
        result = {
            'success': True,
            'response': f'Deleted {food_id} successfully'
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }
    
    return jsonify(result)

@app.route('/foods/adv-query', methods=['GET'])
def run_adv_query():
    try:
        query_result = db_helper.run_adv_query()
        result = {
            'success': True,
            'response': query_result
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }

    return jsonify(result)


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

@app.route('/user/add', methods = ["POST"])
def add_user():
    data = request.get_json()

    try:
        db_helper.add_user(data)
        result = {
            'success': True,
            'response': 'User added'
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }

    return jsonify(result)

@app.route('/user/<string:user_name>', methods = ["GET"])
def get_user(user_name):
    data = request.get_json()

    try:
        user_results = db_helper.get_user(user_name)
        result = {
            'success': True,
            'response': user_results
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }
    
    return jsonify(result)

@app.route('/user/delete/<int:user_id>', methods = ["POST"])
def delete_user(user_id):
    data = request.get_json()

    try:
        db_helper.delete_user(user_id)
        result = {
            'success': True,
            'response': 'Deleted user'
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }
    
    return jsonify(result)

@app.route('/user/update', methods = ["POST"])
def update_password():
    data = request.get_json()
    try:
        db_helper.update_password(data)
        result = {
            'success': True,
            'response': 'Successfully changed password'
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }
    
    return jsonify(result)