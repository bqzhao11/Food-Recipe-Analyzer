import React from "react";
import GetRecipes from "./get_recipe";
import RunAdv from "./adv_query/adv_sql_alex"
import LogoutButton from "./logout_button";


function Dashboard() {
    return(
        <div>
            <LogoutButton />
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

