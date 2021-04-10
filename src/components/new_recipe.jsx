import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import "axios"
import axios from "axios";

var buttonStyle = {
  margin: '10px 10px 10px 0'
}

const people = [
    "Apple Pie",
    "Coke",
    "Stake",
    "Stake",
    "Stake"
  ];
  
  

function NewRecipe() {

    const [recipe, setrecipeName] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const [oldRecipe, setoldRecipe] = useState("");
    const [newRecipe, setnewRecipe] = useState("");
    const [deleterecipe, setdeleterecipe] = useState("");
    
    const req = {
        recipe_name: recipe,
        newrecipe_name: newRecipe
    };

    axios.post('/recipe/add', req)
             .then(res => {
                 console.log(res)
             })
             .catch(err => {
                 console.log(err)
             })
    
    console.log(recipe);
    console.log(newRecipe);
    console.log(deleterecipe);
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (recipe == '') {
            alert('Please Enter a Recipe!');
        } else {
            alert(`Recipe ${recipe} was added!`);
        }
    }

    const handleUpdate = (evt) => {
        if (oldRecipe  == '') {
            alert('Please Enter The Origin Recipe Name For Update');
        } else if (newRecipe == '') {
            alert('Please Enter The New Recipe Name For Update');
        } else {
            alert(`Recipe '${oldRecipe}' was Updated To '${newRecipe}'!`);
        }
    }

    const handleChange = event => {
        setSearchTerm(event.target.value);
      };

    const handleOldrecipe = event => {
        setoldRecipe(event.target.value);
    };

    const handleNewrecipe = event => {
        setnewRecipe(event.target.value);
    };

    React.useEffect(() => {
        const results = people.filter(person =>
          person.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
      }, [searchTerm]);
    return (
        <div>
            <h4>Add Your recipe here!</h4>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="title"
                style={{ flex: "10", padding: "5px" }}
                placeholder= "Recipe Name"
                value = {recipe}
                onChange={e => setrecipeName(e.target.value)}
                />
                <input
                type="submit"
                value="Add Recipe"
                className="btn"
                style={{ flex: "1" }}
                />
            </form>

            <form>
            <h4>Type Below To Search A Recipe</h4>
            <input
                type="text"
                name="title"
                style={{ flex: "10", padding: "5px" }}
                placeholder= "Search Recipe Name"
                value = {searchTerm}
                onChange={handleChange}
                />
                <h5>List of Search Results:</h5>
                <ul>
                {searchResults.map(item => (
                    <li>{item}</li>
                ))}
                </ul>
            </form>

            <form onSubmit={handleUpdate}>
                <h4>Type Below To Update Your Recipe Name</h4>
                <input
                    Type = "text"
                    name = "Title"
                    style={{ flex: "10", padding: "5px" }}
                    placeholder= "Old Recipe Name"
                    value = {oldRecipe}
                    onChange={handleOldrecipe}
                />
                <h5>Change to</h5>
                <input
                    Type = "text"
                    name = "Title"
                    style={{ flex: "10", padding: "5px" }}
                    placeholder= "New Recipe Name"
                    value = {newRecipe}
                    onChange={handleNewrecipe}
                />
                <input
                type="submit"
                value="Change Recipe Name"
                className="btn"
                style={{ flex: "1" }}
                />
            </form>
            
        </div>
    );
}


export default NewRecipe;