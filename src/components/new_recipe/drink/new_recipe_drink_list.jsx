import axios from "axios";
import React, { useEffect, useState } from "react";



function NewRecipeDrinkList (props) {

    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        if (props.newDrink) {
            axios.get(`/drinks/${props.newDrink}`)
                .then(res => {
                    const newDrink = {
                        drinkId: props.newDrink,
                        drinkName: res.data.response.drinkName, 
                        calories: res.data.response.calories,
                        fat: res.data.response.data,
                        protein: res.data.response.data,
                        carbs: res.data.response.carbs,
                        sugar: res.data.response.carbs,
                        servingWeight: res.data.response.servingWeight,
                    };
                    setDrinks(drinks => [...drinks, newDrink])
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [props.newDrink])

    return (
        <div>
            <h3>Added Drinks:</h3>
            
            <table className="table table-hover table-sm">
                <thead>
                    <tr className="table-success">
                        <th>Drink Name</th>
                        <th>Calories</th>
                        <th>Fat</th>
                        <th>Protein</th>
                        <th>Carbs</th>
                        <th>Sugar</th>
                        <th>Serving Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        drinks.map(item => (
                            <tr key={item.drinkId}>
                                <td>{item.drinkName}</td>
                                <td>{item.calories}</td>
                                <td>{item.fat}</td>
                                <td>{item.protein}</td>
                                <td>{item.carbs}</td>
                                <td>{item.sugar}</td>
                                <td>{item.servingWeight}</td> 
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}


export default NewRecipeDrinkList;