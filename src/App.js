import React, { useState, useEffect }  from 'react';
import {Routes,Route,Navigate} from "react-router-dom";
import Navbar from './components/common/Navbar';
import PeoplePage from './components/pages/PeoplePage';
import PlanetsPage from './components/pages/PlanetsPage';
import StarshipsPage from './components/pages/StarshipsPage';
import NotFoundPage from './components/pages/NotFoundPage';
import FormPage from './components/pages/FormPage';

import { getPeople, personRule, personColumns } from './components/swapi/swapiPeople';
import { getPlanets, planetRule, planetColumns } from './components/swapi/swapiPlanets';
import { getStarships, starshipRule, starshipColumns } from './components/swapi/swapiStarships';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [starships, setStarships] = useState([]);


    useEffect(() => {
        const getData = async () => {
            const peopleData = await getPeople()
            setPeople(peopleData)
        }

        getData()
    }, [])

    useEffect(() => {
        const getData = async () => {
            const planetsData = await getPlanets()
            setPlanets(planetsData)
        }

        getData()
    }, [])

    useEffect(() => {
        const getData = async () => {
            const starshipsData = await getStarships()
            setStarships(starshipsData)
        }

        getData()
    }, [])

    useEffect( () => {
        localStorage.setItem('people', JSON.stringify(people))
    }, [people])

    useEffect( () => {

        localStorage.setItem('planets', JSON.stringify(planets))
    }, [planets])

    useEffect( () => {
        localStorage.setItem('starships', JSON.stringify(starships))
    }, [starships])

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/people/:id" element={<FormPage   setData={setPeople} 
                    data={people} 
                    rule={personRule} 
                    columns={personColumns}
                    rootPath='/people'  />} />
                <Route path="/people" element={<PeoplePage  setPeople={setPeople} people={people} />} />

                <Route path="/planets/:id" element={<FormPage setData={setPlanets} 
                    data={planets} 
                    rule={planetRule}
                    columns={planetColumns}  
                    rootPath='/planets'  />} />
                <Route path="/planets" element={ <PlanetsPage  setPlanets={setPlanets} planets={planets} />} />

                <Route path="/starships/:id" element={<FormPage   setData={setStarships} 
                    data={starships} 
                    rule={starshipRule}
                    columns={starshipColumns} 
                    rootPath='/starships'  />} />
                <Route path="/starships" element={<StarshipsPage  setStarships={setStarships} starships={starships} />} />

                <Route path="/" element={<Navigate to="/people" />} />
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </>
    )
}

export default App