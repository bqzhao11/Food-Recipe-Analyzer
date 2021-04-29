import React from "react";
import NewFood from "./new_food";
import GetFood from "./new_recipe/food/get_food";
import AdvFoodQuery from "./adv_query/adv_food_query"

function NewFoodPage() {
    return (
        <div className="container-fluid">
            <NewFood />
            <br />
            <GetFood />
            <AdvFoodQuery />
        </div>
    );
}

export default NewFoodPage;