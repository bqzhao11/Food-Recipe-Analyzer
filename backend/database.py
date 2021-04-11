from backend import db

def add_food(food_data):

    query = f"insert into Foods(foodName, calories, fat, protein, carbs, sugar, servingWeight, userId) " \
            f"values ('{food_data['food_name']}', " \
            f"{food_data['calories']}, " \
            f"{food_data['fat']}, " \
            f"{food_data['protein']}, " \
            f"{food_data['carbs']}, " \
            f"{food_data['sugar']}, " \
            f"{food_data['serving_weight']}, " \
            f"{food_data['user_id']});"

    conn = db.connect()
    conn.execute(query)
    conn.close()

def get_food_name(food_name, limit):
    
    query = f"select foodId, foodName, calories, fat, protein, carbs, sugar, servingWeight " \
            f"from Foods " \
            f"where foodName like '%%{food_name}%%' " \
            f"limit {limit};"
            
    conn = db.connect()
    query_results = conn.execute(query).fetchall()
    conn.close()

    food_results = []
    for result in query_results:
        foodId, foodName, calories, fat, protein, carbs, sugar, servingWeight = result
        food_results.append({
            "foodId": foodId,
            "foodName": foodName,
            "calories": calories,
            "fat": fat,
            "protein": protein,
            "carbs": carbs,
            "sugar": sugar,
            "servingWeight": servingWeight
        })

    return food_results 

def delete_food_id(food_id):

    query = f'delete from Foods where foodId={food_id}'

    conn = db.connect()
    conn.execute(query)
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