import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./components/dashboard";
import Home from "./components/home";
import Login from "./components/login";
import NewRecipe from "./components/new_recipe";
import NewUserPage from "./components/new_user_page";
import NewFoodPage from "./components/new_food_page";
import UpdatePassword from "./components/update_password";
import FoodDrinkOverview from "./components/food_drink_overview";
import './App.css';

function App() {
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/new-user" component={NewUserPage} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/new-recipe" component={NewRecipe} />
                    <Route path="/new-food" component={NewFoodPage} />
                    <Route path="/update-password" component={UpdatePassword} />
                    <Route path="/overview" component={FoodDrinkOverview} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router >
    )

}

export default App;
