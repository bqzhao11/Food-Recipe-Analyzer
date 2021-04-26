import axios from "axios";
import React from "react";

function DeleteFoodButton(props) {

    const handleClick = e => {
        axios.post(`/foods/delete/${props.foodId}`, {})
             .then(res => {
                 console.log(res);
             })
             .catch(err => {
                 console.log(err);
             });
    }

    return (
        <div>
            <button type="button" value="Delete" onClick={handleClick} >Delete Food</button> 
        </div>
    );
}


export default DeleteFoodButton;