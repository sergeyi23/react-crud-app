import React, { useEffect }  from 'react';
import { useDispatch } from 'react-redux';
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

import { setPeople, addPerson, updatePerson } from './store/actions/people';
import { setStarships, addStarship, updateStarship } from './store/actions/starships';
import { setPlanets, addPlanet, updatePlanet } from './store/actions/planets';

import { getAllPeople } from './store/selectors/people';
import { getAllPlanets } from './store/selectors/planets';
import { getAllStarships } from './store/selectors/starships';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const dispatch = useDispatch();


    useEffect(() => {
        const getData = async () => {
            const peopleData = await getPeople()
            dispatch(setPeople(peopleData));
        }

        getData()
    }, [])

    useEffect(() => {
        const getData = async () => {
            const planetsData = await getPlanets()
            dispatch(setPlanets(planetsData));
        }

        getData()
    }, [])

    useEffect(() => {
        const getData = async () => {
            const starshipsData = await getStarships()
            dispatch(setStarships(starshipsData));
        }

        getData()
    }, [])

    
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/people/:id" element={<FormPage   addAction={addPerson} 
                    updateAction={updatePerson} 
                    selector={getAllPeople}
                    rule={personRule} 
                    columns={personColumns}
                    rootPath='/people'  />} />
                <Route path="/people" element={<PeoplePage />} />

                <Route path="/planets/:id" element={<FormPage  addAction={addPlanet} 
                    updateAction={updatePlanet} 
                    selector={getAllPlanets}
                    rule={planetRule}
                    columns={planetColumns}  
                    rootPath='/planets'  />} />
                <Route path="/planets" element={ <PlanetsPage />} />

                <Route path="/starships/:id" element={<FormPage   addAction={addStarship} 
                    updateAction={updateStarship} 
                    selector={getAllStarships}
                    rule={starshipRule}
                    columns={starshipColumns} 
                    rootPath='/starships'  />} />
                <Route path="/starships" element={<StarshipsPage />} />

                <Route path="/" element={<Navigate to="/people" />} />
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </>
    )
}

export default App