import axios from "axios";
import React from "react";

function DeleteRecipes(props) {

    const handleDelete = e => {
            axios.post(`/recipe/delete/${props.recipeId}`, {})
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        }

    return (
        <div>
            <button type="button" value="Delete" onClick={handleDelete} />
        </div>
    );
}

export default DeleteRecipes;