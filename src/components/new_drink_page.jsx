import React from "react";
import NewDrink from "./new_drink";
import GetDrink from "./new_recipe/drink/get_drink";
import AdvancedD from "./adv_query/adv_drink_q";



function NewDrinkPage() {
    return (
        <div>
            <NewDrink />
            <br />
            <GetDrink />

            <AdvancedD />
        </div>
    );
}


export default NewDrinkPage;


