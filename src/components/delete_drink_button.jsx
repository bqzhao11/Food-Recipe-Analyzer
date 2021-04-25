import axios from "axios";
import React from "react";

function DeleteDrinkButton(p) {

    const handleClick = e => {
        axios.post(`/drinks/delete/${p.drinkId}`, {})
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


export default DeleteDrinkButton;