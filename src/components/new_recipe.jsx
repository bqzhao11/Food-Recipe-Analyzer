import React, { useEffect } from "react";
import { useState} from "react";
import "axios"
import axios from "axios";
import GetFood from "./get_food";
import NewRecipeFoodList from "./new_recipe_food_list";
import GetDrink from "./get_drink";
import NewRecipeDrinkList from "./new_recipe_drink_list";


function NewRecipe() {

    const [recipe, setrecipeNameAdd] = useState("");
    const [foods, setFoods] = useState([]);
    const [newestFoodAddition, setNewestFoodAddition] = useState();
    const [drinks, setDrinks] = useState([]);
    const [newestDrinkAddition, setNewestDrinkAddition] = useState();
    const [tools, setTools] = useState([]);
    const [newestToolsAddition, setNewestToolsAddition] = useState();


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

        for (i = 0; i < drinks.length; i++) {
            const req = {
                drinkId: drinks[i],
                recipeId: res.data.response
            }
            console.log(req)

            const goes_well_with_res = await axios.post('/goes-well-with/add', req)
            console.log(goes_well_with_res)

        }

    }


    const handleSubmit = (evt) => {
        evt.preventDefault(evt);
        addRecipe().catch(err => console.log(err))

    }

    const handleAddFood = (foodId, numServings) => {
        const newFood = {
            foodId: foodId,
            numServings: numServings
        }
        setNewestFoodAddition(newFood);
        setFoods(foods => [...foods, newFood]);
    }

    const handleAddDrink = drinkId => {
        console.log(drinkId)
        setNewestDrinkAddition(drinkId)
        setDrinks(drinks => [...drinks, drinkId])
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
            <div><GetFood handleAddFood={handleAddFood} /></div>
            <div><NewRecipeFoodList newFood={newestFoodAddition}  /></div>

            <div><GetDrink handleAddDrink={handleAddDrink} /></div>
            <div><NewRecipeDrinkList newDrink={newestDrinkAddition} /></div>
            
        </div>
    );
}


export default NewRecipe;