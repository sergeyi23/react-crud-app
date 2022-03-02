import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {PeoplePage} from "./components/pages/PeoplePage/PeoplePage";
import {PlanetsPage} from "./components/pages/PlanetsPage/PlanetsPage";
import {StarshipsPage} from "./components/pages/StarshipsPage/StarshipsPage";
import {Navbar} from "./components/common/Navbar";
import {Route, Routes, Navigate} from "react-router-dom";

function App() {

    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path={'*'} element={<Navigate to={"/not-found"}/>}/>
                    <Route path={'/not-found'} element={<h1>Page not found</h1>}/>
                    <Route exact path="/" element={<Navigate to={"/people"}/>}/>
                    <Route path="/people" element={<PeoplePage/>}/>
                    <Route path="/planets" element={<PlanetsPage/>}/>
                    <Route path="/starships" element={<StarshipsPage/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
