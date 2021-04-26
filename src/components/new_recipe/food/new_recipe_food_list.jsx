import axios from "axios";
import React, {useEffect, useState} from "react";




function NewRecipeFoodList (props) {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        if (props.newFood) {
            axios.get(`/foods/${props.newFood.foodId}`)
                 .then(res => {
                    const newFood = {
                        foodId: props.newFood.foodId,
                        foodName: res.data.response.foodName, 
                        calories: res.data.response.calories,
                        fat: res.data.response.data,
                        protein: res.data.response.data,
                        carbs: res.data.response.carbs,
                        sugar: res.data.response.carbs,
                        servingWeight: res.data.response.servingWeight,
                        numServings: props.newFood.numServings
                    };
                    setFoods(foods => [...foods, newFood])
                 })
                 .catch(err => {
                     console.log(err)
                 })
        }
    }, [props.newFood])


    return (
        <div>
            <h3>Added Foods:</h3>
            
            <table>
                <thead>
                    <tr>
                        <th>Food Name</th>
                        <th>Calories</th>
                        <th>Fat</th>
                        <th>Protein</th>
                        <th>Carbs</th>
                        <th>Sugar</th>
                        <th>Serving Weight</th>
                        <th>Servings</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        foods.map(item => (
                            <tr key={item.foodId}>
                                <td>{item.foodName}</td>
                                <td>{item.calories}</td>
                                <td>{item.fat}</td>
                                <td>{item.protein}</td>
                                <td>{item.carbs}</td>
                                <td>{item.sugar}</td>
                                <td>{item.servingWeight}</td> 
                                <td>{item.numServings}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}


export default NewRecipeFoodList