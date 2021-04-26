import React from "react";


function AddToolButton (props) {

    const handleClick = e => {
        e.preventDefault(e)
        props.handleAddTool(props.toolId)
    }

    return (
        <div>
            <button onClick={handleClick}>Add Tool</button>
        </div>
    )
}


export default AddToolButton;