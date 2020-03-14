import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "../utils/styles/custom.css";

import Menu from "../components/Menu";
import Routes from "../utils/routes";

const App = () => (
    <>
        <Menu />
        <Routes />
    </>
);

export default App;
