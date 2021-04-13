import React from "react";
import { useState } from "react";
import "axios"
import axios from "axios";


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
    const [cal, setCal] = useState("");
    const [sugar, setSugar] = useState("");
    

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (recipe === '') {
            alert('Please Enter a Recipe!');
        } else {
            alert(`Recipe ${recipe} was added!`);
        }
        const req = {
            recipe_name: recipe,
        };
        axios.post('/recipe/add', req)
             .then(res => {
                 console.log(res)
             })
             .catch(err => {
                 console.log(err)
             })
    }

    const handleUpdate = (evt) => {
        if (oldRecipe  === '') {
            alert('Please Enter The Origin Recipe Name For Update');
        } else if (newRecipe === '') {
            alert('Please Enter The New Recipe Name For Update');
        } else {
            alert(`Recipe '${oldRecipe}' was Updated To '${newRecipe}'!`);
        }
        const req = {
            Oldrecipe_name: oldRecipe,
            Newrecipe_name: newRecipe
        };
        axios.post('/recipe/update/<int:recipe_id>', req)
             .then(res => {
                 console.log(res)
             })
             .catch(err => {
                 console.log(err)
             })
    }

    const handleDelete = (e) => {
        if (deleterecipe === '') {
            alert('Please Enter A Recipe Name To Delete');
        } else {
            alert(`Recipe '${deleterecipe}' was Deleted!`);
        }
        const req = {
            deleteRecipeName: deleterecipe
        };
        axios.post('/recipe/delete/<int:recipe_id>', req)
             .then(res => {
                 console.log(res)
             })
             .catch(err => {
                 console.log(err)
             })
    }

    const handleHealthyFood = (evt) => {
        if (sugar  === '') {
            alert('Please Enter The Number (In Grams) Of Sugar You Desire The Foods Should Contain');
        } else if (cal === '') {
            alert('Please Enter The Number Of Caliores You Desire The Foods Should Contain');
        } else {
            alert(`Here is 15 Food and Drinks That's Below ${cal} Calories and ${sugar} Grams of Sugar!`);
        }
        const req = {
            calCount: cal,
            sugarCount: sugar
        };
        axios.post('/recipe/search_healthy/', req)
             .then(res => {
                 console.log(res)
             })
             .catch(err => {
                 console.log(err)
             })
    }

    const handleDeleterecipe = event => {
        setdeleterecipe(event.target.value);
    };

    const handleChange = event => {
        setSearchTerm(event.target.value);
      };

    const handleOldrecipe = event => {
        setoldRecipe(event.target.value);
    };

    const handleNewrecipe = event => {
        setnewRecipe(event.target.value);
    };

    const handleCal = event => {
        setCal(event.target.value);
    };

    const handleSugar = event => {
        setSugar(event.target.value);
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
                <h6>Change to</h6>
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

            <form onSubmit={handleDelete}>
            <h4>Delete A Recipe From DataBase</h4>
            <input
                    Type = "text"
                    name = "Title"
                    style={{ flex: "10", padding: "5px" }}
                    placeholder= "Recipe To Delete"
                    value = {deleterecipe}
                    onChange={handleDeleterecipe}
                />
                <input
                type="submit"
                value="Delete"
                className="btn"
                style={{ flex: "1" }}
                />     
            </form>

            <form onSubmit = {handleHealthyFood}>
                <h4>Can't Decide? Press The Button To See 15 Random Selection Of Healthy Foods</h4>
                <input 
                    Type = "text"
                    name = "Title"
                    style={{ flex: "10", padding: "5px" }}
                    placeholder= "Total Calories"
                    value = {cal}
                    onChange={handleCal}
                    />
                <input 
                    Type = "text"
                    name = "Title"
                    style={{ flex: "10", padding: "5px" }}
                    placeholder= "Total Sugar(Grams)"
                    value = {sugar}
                    onChange={handleSugar}
                    />
                <input
                    type="submit"
                    value="Search"
                    className="btn"
                    style={{ flex: "1" }}
                    />    
            </form>
            
        </div>
    );
}


export default NewRecipe;