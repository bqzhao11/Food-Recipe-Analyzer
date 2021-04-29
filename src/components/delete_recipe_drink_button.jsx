import React from "react";
import axios from "axios";


function DeleteRecipeDrinkButton(props) {

    const handleClick = e => {
        const req = {
            recipeId: props.recipeId,
            drinkId: props.drinkId
        }
        axios.post('/goes-well-with/delete', req)
             .then(res => {
                 console.log(res)
             })
             .catch(err => {
                 console.log(err)
             })
    }

    return (
        <div>
            <button className="btn btn-danger" onClick={handleClick}>Delete Drink</button>
        </div>
    )
}


export default DeleteRecipeDrinkButton;