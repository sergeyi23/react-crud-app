import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {PeoplePage} from "./components/pages/PeoplePage/PeoplePage";
import {PlanetsPage} from "./components/pages/PlanetsPage/PlanetsPage";
import {StarshipsPage} from "./components/pages/StarshipsPage/StarshipsPage";
import {Navbar} from "./components/common/Navbar";
import {Route, Routes, Navigate} from "react-router-dom";
import {StarshipFormPage} from "./components/pages/FormPage/StarshipFormPage";
import {PersonFormPage} from "./components/pages/FormPage/PersonFormPage";
import {PlanetFormPage} from "./components/pages/FormPage/PlanetFormPage";

function App() {

    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<Navigate to={"/people"}/>}/>
                    <Route path={'*'} element={<Navigate to={"/not-found"}/>}/>
                    <Route path={'/not-found'} element={<h1>Page not found</h1>}/>
                    <Route path={'/people'} element={<PeoplePage/>}/>
                    <Route path={'/planets'} element={<PlanetsPage/>}/>
                    <Route path={'/starships'} element={<StarshipsPage/>}/>
                    <Route path={'/people/form/:id'}
                           element={<PersonFormPage/>}/>
                    <Route path={'/planets/form/:id'}
                           element={<PlanetFormPage/>}/>
                    <Route path={'/starships/form/:id'}
                           element={<StarshipFormPage/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
