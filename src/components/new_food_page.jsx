import React from "react";
import NewFood from "./new_food";
import GetFood from "./get_food";
import AdvFoodQuery from "./adv_food_query"

function NewFoodPage() {
    return (
        <div>
            <NewFood />
            <br />
            <GetFood />
            <AdvFoodQuery />
        </div>
    );
}

export default NewFoodPage;