import axios from "axios";
import React, { createContext, useContext, useState } from "react"
import { Redirect, Route } from "react-router";

const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100)
    }
};

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

const authContext = createContext();


export function useAuth() {
    return useContext(authContext);
}

export function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();

    return (
        <Route
            {...rest}
            render={({ location }) => 
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = async (username, password, cb) => {
        const res = await axios.get(`/user/${username}/${password}`);
        console.log(res)
        if (res.data.success) {
            setUser(res.data.response.userId);
        }
        
        cb();
        // fakeAuth.signin(() => {
        //     setUser("user");
        //     cb();
        // })
    }

    const signout = cb => {
        setUser(null);
        cb();
    }

    return {
        user,
        signin,
        signout
    }
}

