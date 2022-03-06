import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Form from "../../common/Form";
import {v1} from "uuid";
import {useNavigate} from 'react-router-dom';
import Joi from "joi";

const planetsColumns = ["name", "rotation_period", "orbital_period", "diameter", "gravity", "population"];
const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    rotation_period: Joi.number().integer().required(),
    orbital_period: Joi.number().integer().required(),
    diameter: Joi.number().integer().required(),
    gravity: Joi.string().required(),
    population: Joi.number().integer().required(),
    id: Joi.any(),
})

export const PlanetFormPage = () => {

    const [planets, setPlanets] = useState(() => {
        let localPlanetsData = JSON.parse(localStorage.getItem('planets'))
        return (localPlanetsData) ? localPlanetsData : [];
    });
    const [formError, setFormError] = useState('');

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
        const {error} = schema.validate(planetData)
        if (error) {
            setFormError(error.details[0].message)
            return;
        }
        setPlanets([...planets, {...planetData, id: v1()}])
        setTimeout(() => {
            navigate('/planets')
        })
    }
    const changePlanet = (planetData) => {
        const {error} = schema.validate(planetData)
        if (error) {
            setFormError(error.details[0].message)
            return;
        }
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
            formError={formError}
            setFormError={setFormError}
        />
        : <Form
            columns={planetsColumns}
            initialData={planets.find(planet => planet.id === planetId)}
            saveData={changePlanet}
            formError={formError}
            setFormError={setFormError}
        />

}