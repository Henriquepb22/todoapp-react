import React from "react";

const Menu = () => (
    <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            <i className="fa fa-calendar-check-o"></i> To-do App
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbnavbarContentar"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#/todos"> Tarefas </a>
                </li>
                <li className="nav-item">
                    <a href="#/about"> About </a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Menu;
