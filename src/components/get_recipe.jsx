import React from "react";
import { useState, useEffect} from "react";
import "axios"
import axios from "axios";
import UpdateRecipe from "./update_recipe_page";
import DeleteRecipes from "./delete_recipe_page";

function GetRecipes() {

    const [searchTerm, setSearchTerm] = useState("");
    const [showrecipe, setShowRecipe] = React.useState([]);

    useEffect(() => {
        axios.get(`/recipes`)
             .then(res => {
                 if (res.data.success) {
                    setShowRecipe(res.data.response);
                 }
             })
             .catch(err => {
                console.log(err)
            })
    }, []);

    const handelSearch = (evt) => {
        evt.preventDefault();
        axios.get(`/recipes/${searchTerm}`)
        .then(res => {
            if (res.data.success) {
                setShowRecipe(res.data.response)
            }
         })
             .catch(err => {
                 console.log(err)
             })
    }
    return (
        <div>
            <h4>Type Below To Search A Recipe</h4>
            <form onSubmit={handelSearch}>
            <label>
                Recipe Name: <input type='text'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)} />
            </label>
            <input type='submit' value='Find Recipe' />
            </form>
            <table>
                <thead>
                        <tr>
                            <th>Recipe Name</th>
                            <th>Date Created</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showrecipe.map(item => (
                            <tr key={item.recipeId}>
                                <td>{item.recipeName}</td>
                                <td>{item.dateCreated}</td> 
                                <td><div onClick={handelSearch} ><DeleteRecipes recipeId={item.recipeId} /></div></td>
                                <td><UpdateRecipe recipeId={item.recipeId} /></td>
                            </tr>
                        ))
                        }
                    </tbody>
            </table>
        </div>
    )
}
export default GetRecipes;