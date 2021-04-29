import React, { useState } from "react";
import "axios"
import axios from "axios";
import { useAuth } from "./auth";


function NewDrinks() {
    let auth = useAuth()

    const [drinkName, setDrinkName] = useState('');
    const [calories, setCalories] = useState('');
    const [fat, setFat] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [sugar, setSugar] = useState('');
    const [servingWeight, setServingWeight] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (drinkName === "") {
            alert("Please enter a drink name");
        }

        const req = {
            drink_name: drinkName,
            calories: parseInt(calories),
            fat: parseFloat(fat),
            protein: parseFloat(protein),
            carbs: parseFloat(carbs),
            sugar: parseFloat(sugar),
            serving_weight: parseFloat(servingWeight),
            user_id: auth.user
        }
        
        axios.post('/drinks/add', req)
             .then(res => {
                 console.log(res)
             })
             .catch(err => {
                 console.log(err)
             })
    }

    return(
        <div className="container-fluid">
            <h2>All information Regarding Beverages</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Drink Name: <input type='text' 
                                      value={drinkName} 
                                      onChange={e => setDrinkName(e.target.value)} 
                                      placeholder="Drink Name" />
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
                <input type="submit" value="Add Drink" />
            </form>
        </div>
    );
}

export default NewDrinks;

