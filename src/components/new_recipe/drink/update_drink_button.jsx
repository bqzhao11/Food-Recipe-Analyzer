import React from "react";

function UpdatedrinkButton(p) {

    const handleClick = e => {
        p.turnOnUpdate(p.drinkId);
    }

    return (
        <div>
            <button type="button" value="Update" onClick={handleClick} >Update Drink</button>
        </div>
    );
}


export default UpdatedrinkButton;