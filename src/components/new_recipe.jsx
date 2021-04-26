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

    const handleAdd = (foodId, numServings) => {
        console.log("reached here")
        setNewestAddition({
            foodId: foodId, 
            numServings: numServings
        });
        setFoods(foods => [...foods, foodId]);
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