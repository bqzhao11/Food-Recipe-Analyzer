import React from "react";
import NewUser from "./new_user";
import GetUser from "./get_user";


function NewUserPage() {
    return (
        <div className="container-fluid">
            <NewUser />
            <br />
            <GetUser />
        </div>
    );
}


export default NewUserPage;