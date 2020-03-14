import React from "react";
import "bootstrap/js/dist/collapse";

const Menu = () => (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="#">
            <i className="fa fa-calendar-check-o"></i> To-do App
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#/">
                        {" "}
                        Tarefas{" "}
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/about">
                        {" "}
                        Sobre{" "}
                    </a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Menu;
