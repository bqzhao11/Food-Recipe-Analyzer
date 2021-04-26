import React, { useState } from "react";
import {Popover} from "@varld/popover";



function AddFoodButton (props) {

    const [numServings, setNumServings] = useState(1);

    const handleClick = e => {
        e.preventDefault(e)
        props.handleAdd(props.foodId, numServings);
    }

    return (
            <Popover
                popover={({ visible, close }) => {
                    return (
                        <div >
                            <h5>Number of Servings</h5>
                            <form onSubmit={handleClick}>
                                <input type='number' value={numServings} onChange={e => setNumServings(e.target.value)} />
                                <input type='submit' value="Add Food" onClick={close} />
                            </form>
                        </div>
                    )
                }}
            >
                <button>Add Food</button>
            </Popover>
            
    )
}

export default AddFoodButton;