import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Blog from "../pages/Blog";

class Router extends Component{
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '#'} component={Main} />
                    <Route exact path={process.env.PUBLIC_URL + '/'} component={Main} />
                    <Route path={process.env.PUBLIC_URL + '/blog/:id'} component={Blog} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
