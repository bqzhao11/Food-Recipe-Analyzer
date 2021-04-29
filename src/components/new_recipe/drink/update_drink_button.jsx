import React from "react";

function UpdatedrinkButton(p) {

    const handleClick = e => {
        p.turnOnUpdate(p.drinkId);
    }

    return (
        <div>
            <button type="button" className="btn btn-primary btn-sm" value="Update" onClick={handleClick} >Update Drink</button>
        </div>
    );
}


export default UpdatedrinkButton;