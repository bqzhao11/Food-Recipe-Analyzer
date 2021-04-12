import React, { useState, useEffect} from "react";
import "axios"
import axios from "axios";


function NewUser() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (userName === "") {
            alert("Please enter a user name");
        }
        if (password === "") {
            alert("Please enter a password")
        }
        if (password !== rePassword) {
            alert("Passwords do not match")
        }

        const req = {
            userName: userName,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email,
            location: location
        }
        
        axios.post('/user/add', req)
             .then(res => {
                 console.log(res)
             })
             .catch(err => {
                 console.log(err)
             })
    }

    return(
        <div>
            <h2>This is the New User Page</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    User Name: <input type='text' 
                                      value={userName} 
                                      onChange={e => setUserName(e.target.value)} 
                                      placeholder="Username" />
                </label>
                <label>
                    Password: <input type='text' 
                               value={password} 
                               onChange={e => setPassword(e.target.value)} 
                               placeholder="Password" />
                </label>
                <label>
                    Repeat Password: <input type='text' 
                                value={rePassword} 
                                onChange={e => setRePassword(e.target.value)}
                                placeholder="Repeat Password" />
                </label>
                <label>
                    First Name: <input type='text' 
                                    value={firstName} 
                                    onChange={e => setFirstName(e.target.value)} 
                                    placeholder="First Name" />
                </label>
                <label>
                    Last Name: <input type='text' 
                                  value={lastName} 
                                  onChange={e => setLastName(e.target.value)}
                                  placeholder="Last Name" />
                </label>
                <label>
                    Email: <input type='text' 
                                  value={email} 
                                  onChange={e => setEmail(e.target.value)}
                                  placeholder="Email" />
                </label>
                <label>
                    Location: <input type='text' 
                                           value={location} 
                                           onChange={e => setLocation(e.target.value)}
                                           placeholder="Location" />
                </label>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

export default NewUser;

