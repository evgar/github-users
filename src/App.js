import React from "react";
import UsersList from "./components/UsersList";
import AdditionalInfo from "./components/AdditionalInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

const App = () => {
    return (
            <Router>
                <Switch>
                    <Route exact path="/" component={UsersList} />
                    <Route path="/:id" component={AdditionalInfo} />
                </Switch>
            </Router>
    );
};

export default App;
