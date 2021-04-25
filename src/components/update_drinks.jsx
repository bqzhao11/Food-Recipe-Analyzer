import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdateDrinks(p) {
    const [drinkName, setDrinkName] = useState('');
    const [calories, setCalories] = useState('');
    const [fat, setFat] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [sugar, setSugar] = useState('');
    const [servingWeight, setServingWeight] = useState('');

    useEffect(() => {
        axios.get(`/drinks/${p.drinkId}`)
             .then(res => {
                 if (res.data.success) {
                     setDrinkName(res.data.response.drinkName);
                     setCalories(res.data.response.calories);
                     setFat(res.data.response.fat);
                     setProtein(res.data.response.protein);
                     setCarbs(res.data.response.carbs);
                     setSugar(res.data.response.sugar);
                     setServingWeight(res.data.response.servingWeight);
                 }
             })
    }, []);

    const handleSubmit = e => {

        const req = {
            drink_name: drinkName,
            calories: calories,
            fat: fat,
            protein: protein,
            carbs: carbs,
            sugar: sugar,
            serving_weight: servingWeight
        }

        axios.post(`drinks/update/${p.drinkId}`, req)
             .then(res => {
                 console.log(res);
             })
             .catch(err => {
                 console.log(err);
             });

        p.turnOffUpdate();
        p.handleSubmit(e);
    }

    return (
        <div>
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
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}


export default UpdateDrinks;















