import React, { useState } from "react";
import axios from "axios";
import DeleteDrinkButton from "./delete_drink_button";
import UpdateDrink from "./update_drinks"
import UpdateDrinkButton from "./update_drink_button"
import AddDrinkButton from "./add_drink_button";

function GetDrink(props) {
    const [drinkName, setDrinkName] = useState('');
    const [limit, setLimit] = useState(10);
    const [drinkResults, setDrinkResults] = useState([]);
    const [displayUpdate, setDisplayUpdate] = useState(false);
    const [updateDrinkId, setUpdateDrinkId] = useState();

    const turnOnUpdate = drinkId => {
        setUpdateDrinkId(drinkId);
        setDisplayUpdate(true);
    }

    const turnOffUpdate = () => {
        setDisplayUpdate(false);
    }


    const handleSubmit = e => {
        e.preventDefault();

        axios.get(`/drinks/${drinkName}/${limit}`)
             .then(res => {
                if (res.data.success) {
                    setDrinkResults(res.data.response)
                }

             })
             .catch(err => {
                 console.log(err)
             })
    }

    return (
        <div>
            <h4>Add Drinks:</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    Drink Name: <input type='text'
                                      value={drinkName}
                                      onChange={e => setDrinkName(e.target.value)} />
                </label><br />
                <label>
                    Number of Results: <input type='number'
                                              value={limit}
                                              onChange={e => setLimit(e.target.value)} />
                </label><br />
                <input type='submit' value='Find Drink' />
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Drink Name</th>
                        <th>Calories</th>
                        <th>Fat</th>
                        <th>Protein</th>
                        <th>Carbs</th>
                        <th>Sugar</th>
                        <th>Serving Weight</th>
                        <th>Delete</th>
                        <th>Update</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        drinkResults.map(item => (
                            <tr key={item.drinkId}>
                                <td>{item.drinkName}</td>
                                <td>{item.calories}</td>
                                <td>{item.fat}</td>
                                <td>{item.protein}</td>
                                <td>{item.carbs}</td>
                                <td>{item.sugar}</td>
                                <td>{item.servingWeight}</td> 
                                <td><div onClick={handleSubmit} ><DeleteDrinkButton drinkId={item.drinkId} /></div></td>
                                <td><UpdateDrinkButton drinkId={item.drinkId} turnOnUpdate={turnOnUpdate}  /></td>
                                <td><AddDrinkButton drinkId={item.drinkId} handleAddDrink={props.handleAddDrink} /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {displayUpdate && (<UpdateDrink drinkId={updateDrinkId} turnOffUpdate={turnOffUpdate} handleSubmit={handleSubmit} />)}
        </div>
    )
}

export default GetDrink;

