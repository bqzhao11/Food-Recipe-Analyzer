import React, { useState, useEffect} from "react";
import "axios"
import axios from "axios"

function UpdatePassword() {
    
    const [userName, setUserName] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (userName === "") {
            alert("Please enter the username");
        }
        if (oldPassword === "") {
            alert("Please enter the old password");
        }
        if (newPassword === "") {
            alert("Please enter the new password");
        }
        if (newPassword !== rePassword) {
            alert("Passwords do not match");
        }

        const req = {
            userName: userName,
            oldPassword: oldPassword,
            newPassword: newPassword
        }

        axios.post('/user/update', req)
             .then(res => {
                 console.log(res)
             })
             .catch(err => {
                 console.log(err)
             })
    }

    return(
        <div>
            <h2>This is the update password page</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    User Name: <input type='text'
                                      value={userName}
                                      onChange={e => setUserName(e.target.value)}
                                      placeholder="Username" />
                </label>
                <label>
                    Old Password: <input type='text' 
                                         value={oldPassword} 
                                         onChange={e => setOldPassword(e.target.value)} 
                                         placeholder="Old Password" />
                </label>
                <label>
                    New Password: <input type='text' 
                                         value={newPassword} 
                                         onChange={e => setNewPassword(e.target.value)} 
                                         placeholder="New Password" />
                </label>
                <label>
                    Repeat Password: <input type='text' 
                                            value={rePassword} 
                                            onChange={e => setRePassword(e.target.value)}
                                            placeholder="Repeat Password" />
                </label>
                <input type="submit" value="Change Password" />
            </form>
        </div>
    );
}

export default UpdatePassword;