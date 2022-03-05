import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Form from "../../common/Form";
import {v1} from "uuid";
import {useNavigate} from 'react-router-dom';

const planetsColumns = ["name", "rotation_period", "orbital_period", "diameter", "gravity", "population"];

export const PlanetFormPage = () => {

    const [planets, setPlanets] = useState(() => {
        let localPlanetsData = JSON.parse(localStorage.getItem('planets'))
        return (localPlanetsData) ? localPlanetsData : [];
    });

    const params = useParams()
    const planetId = params.id

    const navigate = useNavigate()

    const getInitialPlanetsData = () => {
        return planetsColumns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }
    const addPlanet = (planetData) => {
        setPlanets([...planets, {...planetData, id: v1()}])
        setTimeout(() => {
            navigate('/planets')
        })
    }
    const changePlanet = (planetData) => {
        setPlanets(planets.map(planet => {
            return (planet.id === planetData.id) ? planetData : planet
        }))
        setTimeout(() => {
            navigate('/planets')
        })
    }

    useEffect(() => {
        localStorage.setItem('planets', JSON.stringify(planets))
    }, [planets])

    return (planetId === 'new') ?
        <Form
            columns={planetsColumns}
            initialData={getInitialPlanetsData()}
            saveData={addPlanet}
        />
        : <Form
            columns={planetsColumns}
            initialData={planets.find(planet => planet.id === planetId)}
            saveData={changePlanet}
        />

}