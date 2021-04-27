import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import UpdateRecipe from "./update_recipe_page";


function ShowRecipe (props) {

    const [recipeName, setRecipeName] = useState()
    const [dateCreated, setDateCreated] = useState()
    const [foods, setFoods] = useState([])
    const [drinks, setDrinks] = useState([])
    const [tools, setTools] = useState([])
    const { recipeId } = useParams();

    useEffect(() => {
        if (recipeId) {
            console.log(recipeId)
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
    }, [])


    return (
        <div>
            <h2>{recipeName}</h2>
            <h3>Date Created: {dateCreated}</h3>
            <UpdateRecipe recipeId={recipeId}/>
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
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}


export default ShowRecipe;