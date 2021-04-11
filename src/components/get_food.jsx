import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteFoodButton from "./delete_food_button";

function GetFood() {
    const [foodName, setFoodName] = useState('');
    const [limit, setLimit] = useState(0);
    const [foodResults, setFoodResults] = useState([]);


    const handleSubmit = e => {
        e.preventDefault();

        axios.get(`/foods/${foodName}/${limit}`)
             .then(res => {
                if (res.data.success) {
                    setFoodResults(res.data.response)
                }

             })
             .catch(err => {
                 console.log(err)
             })
    }

    return (
        <div>
            <h2>Get food query</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Food Name: <input type='text'
                                      value={foodName}
                                      onChange={e => setFoodName(e.target.value)} />
                </label><br />
                <label>
                    Number of Results: <input type='number'
                                              value={limit}
                                              onChange={e => setLimit(e.target.value)} />
                </label><br />
                <input type='submit' value='Find Food' />
            </form>

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
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        foodResults.map(item => (
                            <tr key={item.foodId}>
                                <td>{item.foodName}</td>
                                <td>{item.calories}</td>
                                <td>{item.fat}</td>
                                <td>{item.protein}</td>
                                <td>{item.carbs}</td>
                                <td>{item.sugar}</td>
                                <td>{item.servingWeight}</td> 
                                <td><div onClick={handleSubmit} ><DeleteFoodButton foodId={item.foodId} /></div></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GetFood;