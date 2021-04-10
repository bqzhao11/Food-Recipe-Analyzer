from app import db

def add_food(food_data):
    conn = db.connect()
    query = ''
    conn.execute(query).fetchall()
    conn.close()

