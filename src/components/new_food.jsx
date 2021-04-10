import React, { useState, useEffect } from "react";
import "axios"
import axios from "axios";


function NewFood() {

    const [foodName, setFoodName] = useState('');
    const [calories, setCalories] = useState('');
    const [fat, setFat] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [sugar, setSugar] = useState('');
    const [servingWeight, setServingWeight] = useState('');
    const [userId, setUserId] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (foodName === "") {
            alert("Please enter a food name");
        }

        const req = {
            food_name: foodName,
            calories: calories,
            fat: fat,
            protein: protein,
            carbs: carbs,
            sugar: sugar,
            serving_weight: servingWeight,
            user_id: userId
        }
        
        axios.post('/foods/add', req)
             .then(res => {
                 console.log(res)
             })
             .catch(err => {
                 console.log(err)
             })
    }

    return(
        <div>
            <h2>This is the New Food Page</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Food Name: <input type='text' 
                                      value={foodName} 
                                      onChange={e => setFoodName(e.target.value)} 
                                      placeholder="Food Name" />
                </label>
                <label>
                    Calories: <input type='text' 
                               value={calories} 
                               onChange={e => setCalories(e.target.value)} 
                               placeholder="Calories" />
                </label>
                <label>
                    Fat: <input type='text' 
                                value={fat} 
                                onChange={e => setFat(e.target.value)}
                                placeholder="Fat" />
                </label>
                <label>
                    Protein: <input type='text' 
                                    value={protein} 
                                    onChange={e => setProtein(e.target.value)} 
                                    placeholder="Protein" />
                </label>
                <label>
                    Carbs: <input type='text' 
                                  value={carbs} 
                                  onChange={e => setCarbs(e.target.value)}
                                  placeholder="Carbs" />
                </label>
                <label>
                    Sugar: <input type='text' 
                                  value={sugar} 
                                  onChange={e => setSugar(e.target.value)}
                                  placeholder="Sugar" />
                </label>
                <label>
                    Serving Weight: <input type='text' 
                                           value={servingWeight} 
                                           onChange={e => setServingWeight(e.target.value)}
                                           placeholder="Serving Weight (g)" />
                </label>
                <label>
                    User ID: <input type='text' 
                                    value={userId} 
                                    onChange={e => setUserId(e.target.value)}
                                    placeholder="User ID" />
                </label>
                <input type="submit" value="Add Food" />
            </form>
        </div>
    );
}

export default NewFood;

