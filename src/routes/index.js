import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";

class Router extends Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
