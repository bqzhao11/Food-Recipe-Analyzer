import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./components/dashboard";
import Home from "./components/home";
import Login from "./components/login";
import NewRecipe from "./components/new_recipe";
import NewUser from "./components/new_user";
import './App.css';

function App() {
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/new-user" component={NewUser} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/new-recipe" component={NewRecipe} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router >
    )

}

export default App;
