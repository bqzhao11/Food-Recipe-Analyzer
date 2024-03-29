import React, { useState } from "react";
import "axios"
import axios from "axios";
import { useAuth } from "./auth";


function NewFood() {
    let auth = useAuth()

    const [foodName, setFoodName] = useState('');
    const [calories, setCalories] = useState('');
    const [fat, setFat] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [sugar, setSugar] = useState('');
    const [servingWeight, setServingWeight] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (foodName === "") {
            alert("Please enter a food name");
        }

        const req = {
            food_name: foodName,
            calories: parseInt(calories),
            fat: parseFloat(fat),
            protein: parseFloat(protein),
            carbs: parseFloat(carbs),
            sugar: parseFloat(sugar),
            serving_weight: parseFloat(servingWeight),
            user_id: auth.user 
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
                </label><br />
                <label>
                    Calories: <input type='text' 
                               value={calories} 
                               onChange={e => setCalories(e.target.value)} 
                               placeholder="Calories" />
                </label><br />
                <label>
                    Fat: <input type='text' 
                                value={fat} 
                                onChange={e => setFat(e.target.value)}
                                placeholder="Fat" />
                </label><br />
                <label>
                    Protein: <input type='text' 
                                    value={protein} 
                                    onChange={e => setProtein(e.target.value)} 
                                    placeholder="Protein" />
                </label><br />
                <label>
                    Carbs: <input type='text' 
                                  value={carbs} 
                                  onChange={e => setCarbs(e.target.value)}
                                  placeholder="Carbs" />
                </label><br />
                <label>
                    Sugar: <input type='text' 
                                  value={sugar} 
                                  onChange={e => setSugar(e.target.value)}
                                  placeholder="Sugar" />
                </label><br />
                <label>
                    Serving Weight: <input type='text' 
                                           value={servingWeight} 
                                           onChange={e => setServingWeight(e.target.value)}
                                           placeholder="Serving Weight (g)" />
                </label><br />
                <input type="submit" value="Add Food" />
            </form>
        </div>
    );
}

export default NewFood;

