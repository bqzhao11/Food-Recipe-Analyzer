import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteUserButton from "./delete_user_button" ;

function GetUser() {
    const [userName, setUserName] = useState('');
    const [userResults, setUserResults] = useState([]);


    const handleSubmit = e => {
        e.preventDefault();

        axios.get(`/user/${userName}`)
             .then(res => {
                 if (res.data.success) {
                     setUserResults(res.data.response)
                 }
             })
             .catch(err => {
                 console.log(err)
             })
    }

    return (
        <div>
            <h2>Get user query</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    User Name: <input type='text'
                                      value={userName}
                                      onChange={e => setUserName(e.target.value)} />
                </label>
                <input type='submit' value='Find User' />
            </form>

            <table>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Location</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userResults.map(item => (
                            <tr key={item.userId}>
                                <td>{item.userName}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.location}</td>
                                <td><div onClick={handleSubmit} ><DeleteUserButton userId={item.userId} /></div></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GetUser;