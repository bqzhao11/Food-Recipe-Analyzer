import axios from "axios";
import React from "react";

function DeleteUserButton(props) {

    const handleClick = e => {
        axios.post(`/user/delete/${props.userId}`, {})
             .then(res => {
                 console.log(res);
             })
             .catch(err => {
                 console.log(err);
             });
    }

    return (
        <div>
            <button type="button" value="Delete" onClick={handleClick} />
        </div>
    );
}


export default DeleteUserButton;