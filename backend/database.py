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

def get_food_id(food_id):

    query = f"select foodName, calories, fat, protein, carbs, sugar, servingWeight " \
            f"from Foods " \
            f"where foodId = {food_id}"

    conn = db.connect()
    query_results = conn.execute(query).fetchall()
    conn.close()

    foodName, calories, fat, protein, carbs, sugar, servingWeight = query_results[0]

    return {
        "foodName": foodName,
        "calories": calories,
        "fat": fat,
        "protein": protein,
        "carbs": carbs,
        "sugar": sugar,
        "servingWeight": servingWeight
    }

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

def update_food_id(food_id, food_data):
    query = f"update Foods " \
            f"set foodName = '{food_data['food_name']}', " \
            f"calories = {food_data['calories']}, " \
            f"fat = {food_data['fat']}, " \
            f"protein = {food_data['protein']}, " \
            f"carbs = {food_data['carbs']}, " \
            f"sugar = {food_data['sugar']}, " \
            f"servingWeight = {food_data['serving_weight']} " \
            f"where foodId = {food_id}"
    
    conn = db.connect()
    query_results = conn.execute(query).fetchall()
    conn.close()

def run_adv_query():
    query = "(select 'Food', calories, avg(sugar) as avgSugar " \
            "from Foods " \
            "where sugar > 1 " \
            "group by calories " \
            "order by calories desc " \
            "limit 7) " \
            "union " \
            "(select 'Drinks', calories, avg(sugar) as avgSugar " \
            "from Drinks " \
            "where sugar > 1 " \
            "group by calories " \
            "order by calories desc " \
            "limit 8); " 
    
    conn = db.connect()
    query_results = conn.execute(query).fetchall()
    conn.close()

    adv_results = []   
    for result in query_results:
        name, calories, avg_sugar = result
        adv_results.append({
            'type': name,
            'calories': calories,
            'avg_sugar': avg_sugar
        })
    
    return adv_results

def add_recipe(data):
    query = f'INSERT INTO Recipes(recipeName)'
            f'VALUES('data['recipe_name']}'

    conn = db.connect()
    conn.execute(query)
    conn.close()

def update_recipe(recipe_id):
    query = f'UPDATE Recipes' \
            f'SET recipeName = Newrecipe_name' \
            f'WHERE recipeName = Oldrecipe_name'
    conn = db.connect()
    conn.execute(query).fetchall()
    conn.close()

def delete_recipe(recipe_id):
    query = f'DELETE FROM Recipes'
            f'WHERE recipeName = deleteRecipeName'
    
    conn = db.connect()
    conn.execute(query)
    conn.close()

def search_healthy():
    query = 'COPY THE ADV SQL INTO HERE'

    
    conn = db.connect()
    query_results = conn.execute(query).fetchall()
    conn.close()

    healthy_results = []
    for result in query_results:
        foodName, drinkName, calories, sugar = result
        healthy_results.append({
            "foodName": foodName,
            "drinkName": drinkName,
            "calories": calories,
            "sugar": sugar
        })

    return healthy_results

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

def bounded_overview(attributeName, upperBound, lowerBound):
    query = f"SELECT _name, avg(calories) as avgCalories, avg(fat) as avgFat, avg(protein) as avgProtein, avg(carbs) as avgCarbs, avg(sugar) as avgSugar\n" \
            f"FROM ((SELECT 'Food' as _name, calories, fat, protein, carbs, sugar\n" \
            f"FROM Foods\n" \
            f"WHERE {attributeName} <= {upperBound} AND " \
            f"{attributeName} >= {lowerBound})\n" \
            f"UNION\n" \
            f"(SELECT 'Drink' as _name, calories, fat, protein, carbs, sugar\n" \
            f"FROM Drinks\n" \
            f"WHERE {attributeName} <= {upperBound} AND " \
            f"{attributeName} >= {lowerBound})) as t\n" \
            f"group by _name\n;"
    
    conn = db.connect()
    query_results = conn.execute(query).fetchall()
    conn.close()

    overview_results = []
    for result in query_results:
        _name, avgCalories, avgFat, avgProtein, avgCarbs, avgSugar = result
        overview_results.append({
            "_name": _name,
            "avgCalories": str(avgCalories),
            "avgFat": str(avgFat),
            "avgProtein": str(avgProtein),
            "avgCarbs": str(avgCarbs),
            "avgSugar": str(avgSugar),
        })
    
    return overview_results


def add_drink(drink_data):
    query = f"insert into Drinks(drinkName, calories, fat, protein, carbs, sugar, servingWeight, userId) " \
            f"values ('{drink_data['drink_name']}', " \
            f"{drink_data['calories']}, " \
            f"{drink_data['fat']}, " \
            f"{drink_data['protein']}, " \
            f"{drink_data['carbs']}, " \
            f"{drink_data['sugar']}, " \
            f"{drink_data['serving_weight']}, " \
            f"{drink_data['user_id']});"    

    conn = db.connect()
    conn.execute(query)
    conn.close()

def get_drink_id(drink_id):

    query = f"select drinkName, calories, fat, protein, carbs, sugar, servingWeight " \
            f"from Drinks " \
            f"where drinkId = {drink_id}"

    conn = db.connect()
    query_results = conn.execute(query).fetchall()
    conn.close()

    drinkName, calories, fat, protein, carbs, sugar, servingWeight = query_results[0]

    return {
        "drinkName": drinkName,
        "calories": calories,
        "fat": fat,
        "protein": protein,
        "carbs": carbs,
        "sugar": sugar,
        "servingWeight": servingWeight
    }

def get_drink_name(drink_name, limit):
    
    query = f"select drinkId, drinkName, calories, fat, protein, carbs, sugar, servingWeight " \
            f"from Drinks " \
            f"where drinkName like '%%{drink_name}%%' " \
            f"limit {limit};"
            
    conn = db.connect()
    query_results = conn.execute(query).fetchall()
    conn.close()

    drink_results = []
    for result in query_results:
        drinkId, drinkName, calories, fat, protein, carbs, sugar, servingWeight = result
        drink_results.append({
            "drinkId": drinkId,
            "drinkName": drinkName,
            "calories": calories,
            "fat": fat,
            "protein": protein,
            "carbs": carbs,
            "sugar": sugar,
            "servingWeight": servingWeight
        })

    return drink_results 

def delete_drink_id(drink_id):

    query = f'delete from Drinks where drinkId={drink_id}'

    conn = db.connect()
    conn.execute(query)
    conn.close()

def update_drink_id(drink_id, drink_data):
    query = f"update Drinks " \
            f"set drinkName = '{drink_data['drink_name']}', " \
            f"calories = {drink_data['calories']}, " \
            f"fat = {drink_data['fat']}, " \
            f"protein = {drink_data['protein']}, " \
            f"carbs = {drink_data['carbs']}, " \
            f"sugar = {drink_data['sugar']}, " \
            f"servingWeight = {drink_data['serving_weight']} " \
            f"where drinkId = {drink_id}"
    
    conn = db.connect()
    conn.execute(query)
    conn.close()


def run_advanced_query():
    query = " (select 'Food', carbs, avg(protein) as avgPro, avg(fat) as avgfat  " \
            " from Foods " \
            " where carbs > 49 " \
            " group by carbs " \
            " order by carbs " \
            " limit 10) " \
            "union" \
            " (select 'Drink', carbs,avg(protein) as avgPro , avg(fat) as avgfat " \
            " from Drinks " \
            " where carbs > 49 " \
            " group by carbs " \
            " order by carbs " \
            " limit 10); " 

    
    conn = db.connect()
    query_r = conn.execute(query).fetchall()
    conn.close()
    


    advanced_results = []
    for result in query_r:
        name, carbs, avgPro, avgfat = result
        advanced_results.append({
            'type': name,
            'carbs': carbs,
            'avgPro': avgPro,
            'avgfat': avgfat
        })
    
    return advanced_results
    

    





