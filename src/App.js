import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import PeoplePage from './components/pages/PeoplePage';
import PlanetsPage from './components/pages/PlanetsPage';
import StarsPage from './components/pages/StarsPage';
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
                <Route path="/" element={<PeoplePage/>} />
                <Route path="/planets" element={<PlanetsPage/>} />
                <Route path="/stars" element={<StarsPage/>} />
                <Route path="*" element={<NotFoundPage/>} />
              </Routes>
            </div>
          </Router>
        </div>
    );
}

export default App;
