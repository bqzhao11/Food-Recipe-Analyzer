import React from "react";
import GetRecipes from "./get_recipe";
import RunAdv from "./adv_query/adv_sql_alex"


function Dashboard() {
    return(
        <div>
            <h2>This is the Dashboard Page</h2>
            <div>
                <GetRecipes />
            </div>
            <div>
                <RunAdv />
            </div>
        </div>
    );
}

export default Dashboard;

