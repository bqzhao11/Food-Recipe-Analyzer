import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DeleteRecipeDrinkButton from "./delete_recipe_drink_button";
import DeleteRecipeFoodButton from "./delete_recipe_food_button";
import DeleteRecipeToolButton from "./delete_recipe_tool_button";
import UpdateRecipe from "./update_recipe_page";
import * as d3 from 'd3'



function ShowRecipe (props) {

    const [recipeName, setRecipeName] = useState()
    const [dateCreated, setDateCreated] = useState()
    const [dateModified, setDateModified] = useState()
    const [foods, setFoods] = useState([])
    const [drinks, setDrinks] = useState([])
    const [tools, setTools] = useState([])
    const { recipeId } = useParams();
    const [totalCals, setTotalCals] = useState()
    const [totalFat, setTotalFat] = useState()
    const [totalProtein, setTotalProtein] = useState()
    const [totalCarbs, setTotalCarbs] = useState()
    const [totalSugar, setTotalSugar] = useState()
    const [data, setData] = useState([])

    // var data = [{name: 'totalCals', val: totalCals}, {name: 'totalFat', val: totalFat}, {name: 'totalProtein', val: totalProtein}, {name: 'totalCarbs', val: totalCarbs}, {name: 'totalSugar', val: totalSugar}]

    // var names = ['totalCals', 'totalFat', 'totalProtein', 'totalCarbs', 'totalSugar']
    // var data = [totalCals, totalFat, totalProtein, totalCarbs, totalSugar]

    





    useEffect(() => {
        if (recipeId) {
            // get recipe name and date
            axios.get(`/recipes/id/${recipeId}`)
                 .then(res => {
                    setRecipeName(res.data.response.recipeName)
                    setDateCreated(res.data.response.dateCreated)
                    setDateModified(res.data.response.dateModified)
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
    }, [recipeId, dateModified])

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

        setData([{name: 'totalCals', val: totalCals}, {name: 'totalFat', val: totalFat}, {name: 'totalProtein', val: totalProtein}, {name: 'totalCarbs', val: totalCarbs}, {name: 'totalSugar', val: totalSugar}])

        var margin = {top:10, right:30, bottom:90, left:40},
        width = 460 - margin.left - margin.right,
        height = 450 - margin.top - margin.bottom;
        
        var svg = d3.select("#ShowRecipe")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height",height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
        
        var x = d3.scaleLinear()
        .domain([0, 2000])
        .range([ 0, width]);
        svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
          .attr("transform", "translate(-10,0)rotate(-45)")
          .style("text-anchor", "end");
        
        var y = d3.scaleBand()
        .range([ 0, height ])
        .domain(data.map(function(d) { return d.name}))
        .padding(.1);
        svg.append("g")
        .call(d3.axisLeft(y))
        
        
        svg.selectAll("myRect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", x(0) )
        .attr("y", function(d) { return y(d.name); })
        .attr("width", function(d) { return x(d.val); })
        .attr("height", y.bandwidth() )
        .attr("fill", "#69b3a2")
    

    }, [foods, drinks])


    return (
        <div className="container-fluid">
            <h1>{recipeName}</h1>
            <h4>Date Created: {dateCreated}</h4>
            <h4>Date Modified: {dateModified}</h4>
            <h5>Total Calories: {totalCals}</h5>
            <h5>Total Fat: {totalFat}</h5>
            <h5>Total Protein: {totalProtein}</h5>
            <h5>Total Carbs: {totalCarbs}</h5>
            <h5>Total Sugar: {totalSugar}</h5>

            <script src="https://d3js.org/d3.v4.js"></script>

            <div id="ShowRecipe"></div>

            <table className="table table-hover table-sm">
                <thead>
                    <tr className="table-primary">
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


            <table className="table table-hover table-sm">
                <thead>
                    <tr className="table-success">
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

            <table className="table table-hover table-sm">
                <thead>
                    <tr className="table-warning">
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




    


