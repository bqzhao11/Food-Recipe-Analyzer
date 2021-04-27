import React, { useEffect, useState } from "react";
import GetRecipes from "./get_recipe";
import RunAdv from "./adv_query/adv_sql_alex"
import LogoutButton from "./logout_button";
import { useAuth } from "./auth";
import axios from "axios";


function Dashboard() {
    let auth = useAuth();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        axios.get(`/user/id/${auth.user}`)
            .then(res => {
                setFirstName(res.data.response.firstName)
                setLastName(res.data.response.lastName)
            })
    }, [auth.user])

    return(
        <div>
            <LogoutButton firstName={firstName} lastName={lastName} />
            <div>
                <GetRecipes userId={auth.user} />
            </div>
            <div>
                <RunAdv />
            </div>
        </div>
    );
}

export default Dashboard;

