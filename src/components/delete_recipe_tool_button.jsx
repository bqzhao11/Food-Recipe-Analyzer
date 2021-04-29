import React from "react";
import axios from "axios";


function DeleteRecipeToolButton(props) {

    const handleClick = e => {
        const req = {
            recipeId: props.recipeId,
            toolId: props.toolId
        }
        axios.post('/uses/delete', req)
             .then(res => {
                 console.log(res)
             })
             .catch(err => {
                 console.log(err)
             })
    }

    return (
        <div>
            <button className="btn btn-danger" onClick={handleClick}>Delete Food</button>
        </div>
    )
}


export default DeleteRecipeToolButton;