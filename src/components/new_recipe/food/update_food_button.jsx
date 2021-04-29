import React from "react";

function UpdateFoodButton(props) {

    const handleClick = e => {
        props.turnOnUpdate(props.foodId);
    }

    return (
        <div>
            <button type="button" className="btn btn-primary btn-sm" value="Update" onClick={handleClick} >Update Food</button>
        </div>
    );
}


export default UpdateFoodButton;