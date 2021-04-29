import React, { useState } from "react";
import "axios"
import axios from "axios";
import GetFood from "./food/get_food";
import NewRecipeFoodList from "./food/new_recipe_food_list";
import GetDrink from "./drink/get_drink";
import NewRecipeDrinkList from "./drink/new_recipe_drink_list";
import GetTool from "./tool/get_tool";
import NewRecipeToolList from "./tool/new_recipe_tool_list";
import { useAuth } from "../auth";
import { useHistory } from "react-router";


function NewRecipe() {
    let auth = useAuth();
    let history = useHistory();

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
            user_id: auth.user // TODO: make this the current logged-in user
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

            const goes_well_with_res = await axios.post('/goes-well-with/add', req)
            console.log(goes_well_with_res)

        }

        for (i = 0; i < tools.length; i++) {
            const req = {
                toolId: tools[i],
                recipeId: res.data.response
            }

            const uses_req = await axios.post('/uses/add', req)
            console.log(uses_req)
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
        setNewestDrinkAddition(drinkId)
        setDrinks(drinks => [...drinks, drinkId])
    }

    const handleAddTool = toolId => {
        setNewestToolsAddition(toolId)
        setTools(tools => [...tools, toolId])
    }

    const handleNewFood = e => {
        history.push('/new-food')
    }

    const handleNewDrink = e => {
        history.push('/new-drink')
    }


    return (
        <div className="container-fluid">
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
            <div className="row">
                <div className="col"><GetFood handleAddFood={handleAddFood} /></div>
                <div className="col"><NewRecipeFoodList newFood={newestFoodAddition}  /></div>
            </div>
            <div><GetDrink handleAddDrink={handleAddDrink} /></div>
            <div><NewRecipeDrinkList newDrink={newestDrinkAddition} /></div>

            <div><GetTool handleAddTool={handleAddTool} /></div>
            <div><NewRecipeToolList newTool={newestToolsAddition} /></div>
            <div className="row">
                <div className="col-sm"><button className="btn btn-primary" onClick={handleNewFood}>Create New Food</button></div>
                <div className="col-sm"><button className="btn btn-primary" onClick={handleNewDrink}>Create New Drink</button></div>
            </div>
        </div>
    );
}


export default NewRecipe;