import React from "react";


function AddDrinkButton (props) {

    const handleClick = e => {
        e.preventDefault(e)
        props.handleAddDrink(props.drinkId)
    }

    return (
        <div>
            <button className="btn btn-success btn-sm" onClick={handleClick}>Add Drink</button>
        </div>
    )
}

export default AddDrinkButton