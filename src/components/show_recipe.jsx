import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DeleteRecipeDrinkButton from "./delete_recipe_drink_button";
import DeleteRecipeFoodButton from "./delete_recipe_food_button";
import DeleteRecipeToolButton from "./delete_recipe_tool_button";
import UpdateRecipe from "./update_recipe_page";


function ShowRecipe (props) {

    const [recipeName, setRecipeName] = useState()
    const [dateCreated, setDateCreated] = useState()
    const [foods, setFoods] = useState([])
    const [drinks, setDrinks] = useState([])
    const [tools, setTools] = useState([])
    const { recipeId } = useParams();
    const [totalCals, setTotalCals] = useState()
    const [totalFat, setTotalFat] = useState()
    const [totalProtein, setTotalProtein] = useState()
    const [totalCarbs, setTotalCarbs] = useState()
    const [totalSugar, setTotalSugar] = useState()

    useEffect(() => {
        if (recipeId) {
            // get recipe name and date
            axios.get(`/recipes/id/${recipeId}`)
                 .then(res => {
                    setRecipeName(res.data.response.recipeName)
                    setDateCreated(res.data.response.dateCreated)
                 })
                 .catch(err => {
                     console.log(err)
                 })

            // get recipe foods
            axios.get(`/recipes/${recipeId}/foods`)
                 .then(res => {
                     setFoods(res.data.response)
                 })
                 .catch(err => {
                     console.log(err)
                 })


            // get recipe drinks
            axios.get(`/recipes/${recipeId}/drinks`)
                 .then(res => {
                     setDrinks(res.data.response)
                 })
                 .catch(err => {
                     console.log(err)
                 })

            // get recipe tools
            axios.get(`/recipes/${recipeId}/tools`)
                 .then(res => {
                     setTools(res.data.response)
                 })
                 .catch(err => {
                     console.log(err)
                 })
        }
    }, [recipeId])

    useEffect(() => {
        var cal_sum = 0
        var fat_sum = 0
        var protein_sum = 0
        var carbs_sum = 0
        var sugar_sum = 0
        for (var i = 0; i < foods.length; i++) {
            cal_sum += (foods[i].calories * foods[i].numberOfServings)
            fat_sum += (foods[i].fat * foods[i].numberOfServings)
            protein_sum += (foods[i].protein * foods[i].numberOfServings)
            carbs_sum += (foods[i].carbs * foods[i].numberOfServings)
            sugar_sum += (foods[i].sugar * foods[i].numberOfServings)
        }

        for (i = 0; i < drinks.length; i++) {
            cal_sum += drinks[i].calories
            fat_sum += drinks[i].fat
            protein_sum += drinks[i].protein
            carbs_sum += drinks[i].carbs 
            sugar_sum += drinks[i].sugar
        }

        setTotalCals(cal_sum)
        setTotalFat(fat_sum)
        setTotalProtein(protein_sum)
        setTotalCarbs(carbs_sum)
        setTotalSugar(sugar_sum)

    }, [foods, drinks])


    return (
        <div>
            <h2>{recipeName}</h2>
            <h3>Date Created: {dateCreated}</h3>
            <h4>Total Calories: {totalCals}</h4>
            <h4>Total Fat: {totalFat}</h4>
            <h4>Total Protein: {totalProtein}</h4>
            <h4>Total Carbs: {totalCarbs}</h4>
            <h4>Total Sugar: {totalSugar}</h4>
            <table>
                <thead>
                    <tr>
                        <th>Food Name</th>
                        <th>Calories</th>
                        <th>Fat</th>
                        <th>Protein</th>
                        <th>Carbs</th>
                        <th>Sugar</th>
                        <th>Serving Weight</th>
                        <th>Number of Servings</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        foods.map(item => (
                            <tr key={item.foodId}>
                                <td>{item.foodName}</td>
                                <td>{item.calories}</td>
                                <td>{item.fat}</td>
                                <td>{item.protein}</td>
                                <td>{item.carbs}</td>
                                <td>{item.sugar}</td>
                                <td>{item.servingWeight}</td> 
                                <td>{item.numberOfServings}</td>
                                <td><DeleteRecipeFoodButton recipeId={recipeId} foodId={item.foodId} /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>


            <table>
                <thead>
                    <tr>
                        <th>Drink Name</th>
                        <th>Calories</th>
                        <th>Fat</th>
                        <th>Protein</th>
                        <th>Carbs</th>
                        <th>Sugar</th>
                        <th>Serving Weight</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        drinks.map(item => (
                            <tr key={item.drinkId}>
                                <td>{item.drinkName}</td>
                                <td>{item.calories}</td>
                                <td>{item.fat}</td>
                                <td>{item.protein}</td>
                                <td>{item.carbs}</td>
                                <td>{item.sugar}</td>
                                <td>{item.servingWeight}</td> 
                                <td><DeleteRecipeDrinkButton recipeId={recipeId} drinkId={item.drinkId} /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <table>
                <thead>
                    <tr>
                        <th>Tool Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tools.map(item => (
                            <tr key={item.toolId}>
                                <td>{item.toolName}</td>
                                <td><DeleteRecipeToolButton recipeId={recipeId} toolId={item.toolId} /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <UpdateRecipe recipeId={recipeId}/>
        </div>
    )
}


export default ShowRecipe;