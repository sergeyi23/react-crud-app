import React from 'react';
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/people">People</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/planets">Planets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/starships">Starships</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}