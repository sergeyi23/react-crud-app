import React from 'react';
import PeoplePage from "./components/pages/PeoplePage";
import StarshipsPage from "./components/pages/StarshipsPage";
import PlanetsPage from "./components/pages/PlanetsPage";
import Navbar from "./components/common/Navbar";
import { Route, Routes, Navigate } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';


function App() {
    return (
        <div className="container">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Navigate to={"/people"}/>} />
                <Route path={"*"} element={<Navigate to={"/not-found"}/>} />
                <Route path="/not-found" element={(<h2>Not Found</h2>)} />
                <Route path="/people" element={<PeoplePage/>} />
                <Route path="/starships" element={<StarshipsPage/>} />
                <Route path="/planets" element={<PlanetsPage/>} />

            </Routes>
        </div>
    )
}

export default App;
