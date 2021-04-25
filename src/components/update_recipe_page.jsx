import React, { useState, useEffect } from "react";
import "axios"
import axios from "axios";

function UpdateRecipe(props) {

    const [recipeName, setRecipeName] = useState('');




    const handleUpdate = evt => {
        const req = {
            recipe_name: recipeName
        }
        
        axios.post(`recipe/update/${props.recipeId}`, req)
             .then(res => {
                 console.log(res);
             })
             .catch(err => {
                 console.log(err);
             });

        props.handleUpdate(evt);
    }

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <h4>Type Below To Update Your Recipe Name</h4>
                <label>
                    Recipe Name: <input type='text' 
                                      value={recipeName} 
                                      onChange={e => setRecipeName(e.target.value)} 
                                      placeholder="Recipe Name" />
                </label>
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}


export default UpdateRecipe;