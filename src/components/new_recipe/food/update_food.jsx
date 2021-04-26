import React, { useState, useEffect } from "react";
import axios from "axios";


function UpdateFood(props) {
    const [foodName, setFoodName] = useState('');
    const [calories, setCalories] = useState('');
    const [fat, setFat] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [sugar, setSugar] = useState('');
    const [servingWeight, setServingWeight] = useState('');

    useEffect(() => {
        axios.get(`/foods/${props.foodId}`)
             .then(res => {
                 if (res.data.success) {
                     setFoodName(res.data.response.foodName);
                     setCalories(res.data.response.calories);
                     setFat(res.data.response.fat);
                     setProtein(res.data.response.protein);
                     setCarbs(res.data.response.carbs);
                     setSugar(res.data.response.sugar);
                     setServingWeight(res.data.response.servingWeight);
                 }
             })
    }, [props.foodId]);

    const handleSubmit = e => {

        const req = {
            food_name: foodName,
            calories: calories,
            fat: fat,
            protein: protein,
            carbs: carbs,
            sugar: sugar,
            serving_weight: servingWeight
        }

        axios.post(`foods/update/${props.foodId}`, req)
             .then(res => {
                 console.log(res);
             })
             .catch(err => {
                 console.log(err);
             });

        props.turnOffUpdate();
        props.handleSubmit(e);
    }

    return (
        <div>
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
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}


export default UpdateFood;