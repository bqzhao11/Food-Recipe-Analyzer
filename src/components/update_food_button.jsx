import React from "react";

function UpdateFoodButton(props) {

    const handleClick = e => {
        props.turn_on_display(props.foodId)
    }

    return (
        <div>
            <button type="button" value="Update" onClick={handleClick} />
        </div>
    );
}


export default UpdateFoodButton;