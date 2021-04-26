import React from "react";
import axios from "axios";

function DeleteToolButton (props) {

    const handleClick = e => {
        axios.post(`/tools/delete/${props.toolId}`, {})
             .then(res => {
                 console.log(res);
             })
             .catch(err => {
                 console.log(err);
             });
    }

    return (
        <div>
            <button type="button" value="Delete" onClick={handleClick} >Delete Tool</button>
        </div>
    )
}


export default DeleteToolButton;