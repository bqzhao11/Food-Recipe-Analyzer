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

