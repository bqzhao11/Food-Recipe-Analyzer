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

@app.route('/contains/add', methods=['POST'])
def add_contains():
    data = request.get_json()

    try:
        db_helper.add_contains(data)
        result = {
            'success': True,
            'response': 'contains added successfully'
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }

    return jsonify(result)

@app.route('/goes-well-with/add', methods=['POST'])
def add_goes_well_with():
    data = request.get_json()
    try:
        db_helper.add_goes_well_with(data)
        result = {
            'success': True,
            'response': 'goes well with successfully'
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': "Something went wrong"
        }

    return jsonify(result)
        

@app.route('/recipe/add', methods=["POST"])
def add_recipe():
    data = request.get_json()

    try:
        last_inserted_index = db_helper.add_recipe(data)
        result = {
            'success': True,
            'response': last_inserted_index 
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }

    return jsonify(result)

@app.route('/recipes', methods=['GET'])
def show_recipe():

    try:
        recipes = db_helper.show_recipe()
        result = {
            'success': True,
            'response': recipes
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }
    
    return jsonify(result)

@app.route('/recipes/<string:recipe_name>', methods=['GET'])
def get_recipe_name(recipe_name):
    try:
        recipe_results = db_helper.get_recipe_name(recipe_name)
        result = {
            'success': True,
            'response': recipe_results
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }
    
    return jsonify(result)

@app.route('/recipe/update/<int:recipe_id>', methods = ["POST"])
def update_recipe(recipe_id):
    data = request.get_json()
    try:
        db_helper.update_recipe(recipe_id, data)
        result = {
            'success': True,
            'response': f'Updated {recipe_id} successfully'
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }

    return jsonify(result)

@app.route('/recipe/delete/<int:recipe_id>', methods = ["POST"])
def delete_recipe(recipe_id):
    try:
        db_helper.delete_recipe(recipe_id)
        result = {
            'success': True,
            'response': f'Deleted successfully'
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }
    
    return jsonify(result)

@app.route('/recipe/search_recipe/<string:recipe_name>', methods=['GET'])
def search_recipe():
    try:
        recupe_returns = db_helper.search_recipe(recipe_name)
        result = {
            'success': True,
            'response': recupe_returns
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }
    
    return jsonify(result)

@app.route('/recipe/search_healthy', methods=['GET'])
def search_healthy():
    try:
        healthy_results = db_helper.search_healthy()
        result = {
            'success': True,
            'response': healthy_results
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }

    return jsonify(result)

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

@app.route('/overview/<string:attributeName>/<string:upperBound>/<string:lowerBound>', methods = ["GET"])
def bounded_overview(attributeName, upperBound, lowerBound):
    try:
        overview_results = db_helper.bounded_overview(attributeName, upperBound, lowerBound)
        result = {
            'success': True,
            'response': overview_results
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }
    
    return jsonify(result)


@app.route('/drinks')
def get_all_drinks():
    pass

@app.route('/drinks/add', methods=["POST"])
def add_drink():
    data = request.get_json()

    try:
        db_helper.add_drink(data)
        result = {
            'success': True,
            'response': 'Drink added'
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }

    return jsonify(result)

@app.route('/drinks/<int:drink_id>', methods=['GET'])
def get_drink_id(drink_id):

    try:
        drink_results = db_helper.get_drink_id(drink_id)
        result = {
            'success': True,
            'response': drink_results
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }
    
    return jsonify(result)

@app.route('/drinks/<string:drink_name>/<int:limit>', methods=['GET'])
def get_drink_name(drink_name, limit):

    try:
        drink_results = db_helper.get_drink_name(drink_name, limit)
        result = {
            'success': True,
            'response': drink_results
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }
    
    return jsonify(result)

@app.route('/drinks/update/<int:drink_id>', methods=['POST'])
def update_drink_id(drink_id):
    data = request.get_json()

    try:
        db_helper.update_drink_id(drink_id, data)
        result = {
            'success': True,
            'response': f'Updated {drink_id} successfully'
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }

    return jsonify(result)
    

@app.route('/drinks/delete/<int:drink_id>', methods=['POST'])
def delete_drink_id(drink_id):
    try:
        db_helper.delete_drink_id(drink_id)
        result = {
            'success': True,
            'response': f'Deleted {drink_id} successfully'
        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }
    
    return jsonify(result)


@app.route('/drinks/advanced-query', methods=['GET'])
def run_advanced_query():
    try:
        query_results = db_helper.run_advanced_query()
        result = {
            'success': True,
            'response': query_results        }
    except Exception as e:
        print(e)
        result = {
            'success': False,
            'response': 'Something went wrong'
        }

    return jsonify(result) 

    





