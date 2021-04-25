import React, {useState} from "react";

function NewRecipeFoodList (props) {

    

    return (
        <div>
            
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
                        props.foodList.map(item => (
                            <tr key={item.foodId}>
                                <td>{item.foodName}</td>
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


export default NewRecipeFoodList