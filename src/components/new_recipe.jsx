import React, { useEffect } from "react";
import { useState} from "react";
import "axios"
import axios from "axios";
import GetFood from "./get_food";
import NewRecipeFoodList from "./new_recipe_food_list";


function NewRecipe() {

    const [recipe, setrecipeNameAdd] = useState("");
    const [foods, setFoods] = useState([]);
    const [newestAddition, setNewestAddition] = useState();


    const addRecipe = async () => {
        const req = {
            recipe_name : recipe,
            user_id: 1 // TODO: make this the current logged-in user
        }; 
        const res = await axios.post('/recipe/add', req)

        if (!res.data.success) {
            throw new Error(res.data.response)
        }
        
        for (var i = 0; i < foods.length; i++) {
            const req = {
                foodId : foods[i].foodId,
                recipeId: res.data.response,
                numServings : foods[i].numServings
            }
            const contains_res = await axios.post('/contains/add', req)
            console.log(contains_res)
        }

    }


    const handleSubmit = (evt) => {
        evt.preventDefault(evt);
        addRecipe().catch(err => console.log(err))

    }

    const handleAdd = (foodId, numServings) => {
        console.log("reached here")
        const newFood = {
            foodId: foodId,
            numServings: numServings
        }
        setNewestAddition(newFood);
        setFoods(foods => [...foods, newFood]);
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
            <div><NewRecipeFoodList newFood={newestAddition}  /></div>

            
        </div>
    );
}


export default NewRecipe;