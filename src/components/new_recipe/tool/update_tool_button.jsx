import React from "react";


function UpdateToolButton (props) {

    const handleClick = e => {
        props.turnOnUpdate(props.drinkId);
    }
    return (
        <div>
            <button type="button" className="btn btn-warning btn-sm" value="Update" onClick={handleClick} >Update Tool</button>
        </div>
    )
}

export default UpdateToolButton;