import React, {useEffect, useState} from 'react';

// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {Link, Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
import NoMatch from "./components/pages/NoMatch";
import TableForm from "./components/common/TableForm";
import Page from "./components/common/Page";
import {getPeople} from "./services/peopleService";
import {getPlanets} from "./services/planetsService";
import {getStarships} from "./services/starshipsService";
import {useDispatch} from "react-redux";
import {setPeople} from "./store/actions/people";
import {setPlanets} from "./store/actions/planets";
import {setStarships} from "./store/actions/starships";



const personData = []

const planetsData = []

const starshipsData = []


function App() {
    const dispatch = useDispatch()

    /*const [statePeopleData, setPeopleData] = useState(personData)*/
    /*const [statePlanetsData, setPlanetsData] = useState(planetsData)
    const [stateStarshipsData, setStarshipsData] = useState(starshipsData)*/

    useEffect(() => {
        const getData = async () => {
            const data = await getPeople()
            /*setPeopleData(data)*/
            dispatch(setPeople(data))
        }
        getData()
    }, [])

    useEffect(() => {
        const getData = async () => {
            const data = await getPlanets()
            dispatch(setPlanets(data))
        }
        getData()
    }, [])

    useEffect(() => {
        const getData = async () => {
            const data = await getStarships()
            dispatch(setStarships(data))
        }
        getData()
    }, [])

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/people" element={<Page title="People" service="people"/>}/>
                <Route path="/people/:operation" element={<TableForm service="people"/>}/>
                <Route path="/people/:operation/:id" element={<TableForm service="people"/>}/>

                <Route path="/planets" element={<Page title="Planets" service="planets"/>}/>
                <Route path="/planets/:operation" element={<TableForm service="planets"/>}/>
                <Route path="/planets/:operation/:id" element={<TableForm service="planets"/>}/>

                <Route path="/starships" element={<Page title="Starships" service="starships"/>}/>
                <Route path="/starships/:operation" element={<TableForm service="starships"/>}/>
                <Route path="/starships/:operation/:id" element={<TableForm service="starships"/>}/>

                <Route path="*" element={<NoMatch/>}/>
                <Route
                    path="/"
                    element={<Navigate to="/people" />}
                />
            </Routes>
        </Router>
    )
}

function Navbar() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
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
}

export default App;
