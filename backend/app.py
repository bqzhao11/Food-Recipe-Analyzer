import time
from flask import Flask


app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return { 'time': time.time() }


@app.route('/foods')
def get_all_foods():
    pass

@app.route('/foods/add')
def add_food():
    pass

@app.route('/foods/<string:food_name>')
def get_food_name(food_name):
    pass

@app.route('/foods/update/<int:food_id>')
def update_food_id(food_id):
    pass

@app.route('/foods/delete/<int:food_id>')
def delete_food_id(food_id):
    pass
