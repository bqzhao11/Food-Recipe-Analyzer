import React from "react";
import axios from "axios";

function DeleteRecipeFoodButton(props) {

    const handleClick = e => {
        const req = {
            recipeId: props.recipeId,
            foodId: props.foodId
        }
        axios.post('/contains/delete', req)
             .then(res => {
                 console.log(res)
             })
             .catch(err => {
                 console.log(err)
             })
    }

    return (
        <div>
            <button onClick={handleClick}>Delete Food</button>
        </div>
    )
}

export default DeleteRecipeFoodButton;