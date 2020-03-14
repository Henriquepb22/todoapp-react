import React from "react";
import { Route, HashRouter, Redirect } from "react-router-dom";

import Todo from "../pages/Todo";
import About from "../pages/About";

const Routes = () => (
    <HashRouter>
        <Route exact path="/" component={Todo} />
        <Route path="/about" component={About} />
        <Redirect from="*" to="/" />
    </HashRouter>
);

export default Routes;
