"""Setup at app startup"""
import os
import sqlalchemy
from flask import Flask, request, jsonify
from yaml import load, Loader

def init_connection_engine():
    """ initialize database setup
    Takes in os variables from environment if on GCP
    Reads in local variables that will be ignored in public repository.
    Returns:
        pool -- a connection to GCP MySQL
    """


    # detect env local or gcp
    if os.environ.get('GAE_ENV') != 'standard':
        try:
            variables = load(open("app.yaml"), Loader=Loader)
        except OSError as e:
            print("Make sure you have the app.yaml file setup")
            print(e)
            os._exit()

        env_variables = variables['env_variables']
        for var in env_variables:
            os.environ[var] = env_variables[var]

    pool = sqlalchemy.create_engine(
        sqlalchemy.engine.url.URL(
            drivername="mysql+pymysql",
            username=os.environ.get('MYSQL_USER'),
            password=os.environ.get('MYSQL_PASSWORD'),
            database=os.environ.get('MYSQL_DB'),
            host=os.environ.get('MYSQL_HOST')
        )
    )

    return pool


app = Flask(__name__)
# db = init_connection_engine()
@app.route('/foods')
def get_all_foods():
    pass

@app.route('/foods/add', methods=["POST"])
def add_food():
    data = request.get_json()

    print(data)

@app.route('/foods/<string:food_name>')
def get_food_name(food_name):
    pass

@app.route('/foods/update/<int:food_id>')
def update_food_id(food_id):
    pass

@app.route('/foods/delete/<int:food_id>')
def delete_food_id(food_id):
    pass