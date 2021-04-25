import React from "react";
import { useState} from "react";
import "axios"
import axios from "axios";
import RunAdv from "./adv_sql_alex";
import GetRecipes from "./get_recipe";
import GetFood from "./get_food";
import NewRecipeFoodList from "./new_recipe_food_list";


function NewRecipe() {

    const [recipe, setrecipeNameAdd] = useState("");
    const [foods, setFoods] = useState([]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (recipe === '') {
            alert('Please Enter a Recipe!');
        } else {
            alert(`Recipe ${recipe} was added!`);
            const req = {recipe_name : recipe};
            axios.post('/recipe/add', req)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    const handleAdd = foodId => {
        setFoods(foods => [...foods, foodId])
        console.log(foods)
    }

    return (
        <div>
            <h2>New Recipe:</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="title"
                style={{ flex: "10", padding: "5px" }}
                placeholder= "Recipe Name"
                value = {recipe}
                onChange={e => setrecipeNameAdd(e.target.value)}
                />
                <input
                type="submit"
                value="Add Recipe"
                className="btn"
                style={{ flex: "1" }}
                />
            </form>
            <div><GetFood handleAdd={handleAdd} /></div>
            <div><NewRecipeFoodList foodList={foods} /></div>
            <div>
                <GetRecipes />
            </div>
            <div>
                <RunAdv />
            </div>
            
        </div>
    );
}


export default NewRecipe;