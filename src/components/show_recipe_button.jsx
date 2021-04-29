import React, { useState } from "react";
import { Redirect } from "react-router";


function ShowRecipeButton (props) {
    const [clicked, setClicked] = useState(false)

    const handleClick = e => {(
        setClicked(true)
    )}

    return (
        <div>
            {clicked ? <Redirect push to={`/show-recipe/${props.recipeId}`} /> : <button className="btn btn-primary" onClick={handleClick} >Show Recipe</button>}
        </div>
    )
}


export default ShowRecipeButton;