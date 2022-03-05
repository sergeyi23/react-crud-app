import React from 'react';

// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {Link, Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
import PeoplePage from "./components/pages/PeoplePage";
import PlanetsPage from "./components/pages/PlanetsPage";
import StarshipsPage from "./components/pages/StarshipsPage";
import NoMatch from "./components/pages/NoMatch";

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <Link className="navbar-brand" to="/">Forte</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
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
            <Routes>
                <Route path="/people" element={<PeoplePage/>}/>}/>
                <Route path="/planets" element={<PlanetsPage/>}/>}/>
                <Route path="/starships" element={<StarshipsPage/>}/>}/>
                <Route path="*" element={<NoMatch/>}/>
                <Route
                    path="/"
                    element={<Navigate to="/people" />}
                />
            </Routes>
        </Router>
    )
}
export default App;
