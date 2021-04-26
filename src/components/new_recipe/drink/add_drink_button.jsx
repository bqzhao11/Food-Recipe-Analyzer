import React from "react";


function AddDrinkButton (props) {

    const handleClick = e => {
        e.preventDefault(e)
        props.handleAddDrink(props.drinkId)
    }

    return (
        <div>
            <button onClick={handleClick}>Add Drink</button>
        </div>
    )
}

export default AddDrinkButton