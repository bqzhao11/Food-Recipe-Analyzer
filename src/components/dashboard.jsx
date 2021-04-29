import React, { useEffect, useState } from "react";
import GetRecipes from "./get_recipe";
import RunAdv from "./adv_query/adv_sql_alex"
import LogoutButton from "./logout_button";
import { useAuth } from "./auth";
import axios from "axios";
import { useHistory } from "react-router";


function Dashboard() {
    let auth = useAuth();
    let history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        axios.get(`/user/id/${auth.user}`)
            .then(res => {
                setFirstName(res.data.response.firstName)
                setLastName(res.data.response.lastName)
            })
    }, [auth.user])


    const handleNewRecipeClick = e => {
        history.push('/new-recipe')
    }

    return(
        <div className="container-fluid">
            <LogoutButton firstName={firstName} lastName={lastName} />
            <div>
                <GetRecipes userId={auth.user} />
            </div>
            <button onClick={handleNewRecipeClick}>New Recipe</button>
            <div>
                <RunAdv />
            </div>
        </div>
    );
}

export default Dashboard;

