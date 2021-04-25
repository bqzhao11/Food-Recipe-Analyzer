import React from "react";



function AddFoodButton (props) {

    const handleClick = e => {
        props.handleAdd(props.foodId);
    }

    return (
        <div>
            <button onClick = {handleClick} />
        </div>
    )
}

export default AddFoodButton;