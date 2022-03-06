import React from 'react';
import {Routes, Route} from "react-router-dom";
import Navbar from './components/common/Navbar';
import PeoplePage from './components/Pages/PeoplePage';
import PlanetsPage from './components/Pages/PlanetsPage';
import StarshipsPage from './components/Pages/StarshipsPage';
import NotFoundPage from './components/Pages/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.css';

function App() {    

    return (
        <>
            <Navbar />
                <Routes>
                    <Route exact from="/" to="/people" />
                    <Route path="/people" element={<PeoplePage/>} />
                    <Route path="/planets" element={<PlanetsPage/>} />
                    <Route path="/starships" element={<StarshipsPage/>} />
                    <Route path="*" element={<NotFoundPage/>} />
                </Routes>
        </>
    );
}

export default App;
