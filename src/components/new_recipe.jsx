import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";


var buttonStyle = {
  margin: '10px 10px 10px 0'
}

const people = [
    "Apple Pie",
    "Coke",
    "Stake"
  ];
  

function NewRecipe() {
    const [recipe, setrecipeName] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (recipe == '') {
            alert('Please Enter a Recipe!');
        } else {
            alert(`Recipe ${recipe} was added!`);
        }
    }
    const handleChange = event => {
        setSearchTerm(event.target.value);
      };
    React.useEffect(() => {
        const results = people.filter(person =>
          person.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
      }, [searchTerm]);
    return (
        <div>
            <h1>Edit Your recipe here!</h1>
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
        </div>
    );
}

export default NewRecipe;