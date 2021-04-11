from backend import db

def add_food(food_data):
    conn = db.connect()
    query = f"insert into Foods(foodName, calories, fat, protein, carbs, sugar, servingWeight, userId) " \
            f"values ({food_data['food_name']}, " \
            f"{food_data['calories']}, " \
            f"{food_data['fat']}, " \
            f"{food_data['protein']}, " \
            f"{food_data['carbs']}, " \
            f"{food_data['sugar']}, " \
            f"{food_data['serving_weight']}, " \
            f"{food_data['user_id']});"
    
    conn.execute(query)
    print('reached')
    conn.close()

def add_recipe(data):
    conn = db.connect()
    query = 'INSERT INTO Recipes(recipeName,userId) VALUES(recipe_name, 1)'
    conn.execute(query).fetchall()
    conn.close()

def update_recipe(recipe_id):
    conn = db.connect()
    query = 'UPDATE Recipes SET recipeName = Newrecipe_name WHERE recipeName = Oldrecipe_name'
    conn.execute(query).fetchall()
    conn.close()

def delete_recipe(recipe_id):
    conn = db.connect()
    query = 'DELETE FROM Recipes WHERE recipeName = deleteRecipeName'
    conn.execute(query).fetchall()
    conn.close()