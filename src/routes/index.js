import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";

class Router extends Component{
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="#" component={Main} />
                    <Route exact path="/" component={Main} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
