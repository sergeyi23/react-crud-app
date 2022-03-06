import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){  
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Navbar</a>
            <Link to="/" className="navbar-toggler">
                <span>Navbar</span>
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" >
                        <Link className="nav-link" to="/">People</Link>  
                    </li>
                    <li className="nav-item" >
                        <Link className="nav-link" to="/planets">Planets</Link>  
                    </li>
                    <li className="nav-item" >
                        <Link className="nav-link" to="/starships">Starships</Link>  
                    </li>
                </ul>
            </div>             
        </nav>
    );
};
export default Navbar;