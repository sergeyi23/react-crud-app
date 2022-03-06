import React, {useState} from 'react';
import PeoplePage from "./components/pages/PeoplePage";
import StarshipsPage from "./components/pages/StarshipsPage";
import PlanetsPage from "./components/pages/PlanetsPage";
import Navbar from "./components/common/Navbar";
import { Route, Routes, Navigate } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';

const people_cols = ['name', 'height', 'mass', 'gender', 'birth_year', 'id']
const starships_cols = ['name', 'model', 'cost_in_credits', 'length', 'id']
const planets_cols = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'id']

function App() {
    const [people, setPeople] = useState([])
    const [planets, setPlanets] = useState([])
    const [starships, setStarships] = useState([])

    return (
        <div className="container">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Navigate to={"/people"}/>} />
                <Route path={"*"} element={<Navigate to={"/not-found"}/>} />
                <Route path="/not-found" element={(<h2>Not Found</h2>)} />

                <Route path="/people" element={<PeoplePage cols={people_cols} data={people} setter={setPeople} title="people"/>} />
                <Route path="/starships" element={<StarshipsPage cols={starships_cols} data={starships} setter={setStarships} title="starships"/>} />
                <Route path="/planets" element={<PlanetsPage cols={planets_cols} data={planets} setter={setPlanets} title="planets"/>} />

            </Routes>
        </div>
    )
}

export default App;
