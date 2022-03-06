import React from 'react';
import { Routes, BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import PeoplePage from './components/pages/peoplePages/PeoplePage';
import PersonForm from './components/pages/peoplePages/PersonForm'
import PlanetsPage from './components/pages/planetsPages/PlanetsPage';
import PlanetForm from './components/pages/planetsPages/PlanetForm'
import StarshipsPage from './components/pages/starshipsPages/StarshipsPage';
import StarshipForm from './components/pages/starshipsPages/StarshipForm';
import NotFoundPage from './components/pages/NotFoundPage'

// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

    return (
        <div>
          <Router>
            <div>
              <Navbar />
              <Routes>
                <Route path="/" element={<Navigate to={"/people"}/>} />
                <Route path={"/people"} element={<PeoplePage/>}/>
                <Route path={"/planets"} element={<PlanetsPage/>} />
                <Route path={"/starships"} element={<StarshipsPage/>}/>
                <Route path={"/people/:id"} element={<PersonForm />} />
                <Route path={"/planets/:id"} element={<PlanetForm />} />
                <Route path={"/starships/:id"} element={<StarshipForm />} />
                <Route path="*" element={<NotFoundPage/>} />
              </Routes>
            </div>
          </Router>
        </div>
    );
}

export default App;
