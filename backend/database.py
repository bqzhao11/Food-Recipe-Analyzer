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

def add_user(user_data):
    query = f"INSERT INTO User(userName, password, firstName, lastName, email, location) " \
            f"VALUES ('{user_data['userName']}', " \
            f"'{user_data['password']}', " \
            f"'{user_data['firstName']}', " \
            f"'{user_data['lastName']}', " \
            f"'{user_data['email']}', " \
            f"'{user_data['location']}');"
    conn = db.connect()
    conn.execute(query)
    conn.close()

def get_user(user_name):
    query = f"SELECT userId, userName, firstName, lastName, email, location " \
            f"FROM User " \
            f"WHERE userName LIKE '%%{user_name}%%';"
    conn = db.connect()
    query_results = conn.execute(query).fetchall()
    conn.close()

    user_results = []
    for result in query_results:
        userId, userName, firstName, lastName, email, location = result
        user_results.append({
            "userId": userId,
            "userName": userName,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "location": location,
        })

    return user_results

def delete_user(user_id):
    query = f"DELETE FROM User WHERE userId={user_id}"
    conn = db.connect()
    conn.execute(query)
    conn.close()

def update_password(user_data):
    query = f"UPDATE User SET password='{user_data['newPassword']}' " \
            f"WHERE userName='{user_data['userName']}' AND " \
            f"password='{user_data['oldPassword']}';"
    conn = db.connect()
    conn.execute(query)
    conn.close()