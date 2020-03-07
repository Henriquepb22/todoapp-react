import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../template/custom.css";

import React from "react";
import Menu from "../template/menu";
import Routes from "./routes";

const App = () => (
    <>
        <Menu />
        <Routes />
    </>
);

export default App;
