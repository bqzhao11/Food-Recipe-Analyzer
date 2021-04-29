import React from "react";


function AddToolButton (props) {

    const handleClick = e => {
        e.preventDefault(e)
        props.handleAddTool(props.toolId)
    }

    return (
        <div>
            <button  className="btn btn-success btn-sm" onClick={handleClick}>Add Tool</button>
        </div>
    )
}


export default AddToolButton;