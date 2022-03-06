import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Form from "../../common/Form";
import {useNavigate} from 'react-router-dom';
import Joi from "joi";
import {useDispatch, useSelector} from "react-redux";
import {addPlanet, changePlanet} from "../../../store/planets-reducer";

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

    const planets = useSelector(state => state.planets)
    const dispatch = useDispatch()

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
    const addPlanetWrapper = (planetData) => {
        const {error} = schema.validate(planetData)
        if (error) {
            setFormError(error.details[0].message)
            return;
        }
        dispatch(addPlanet(planetData))
        setTimeout(() => {
            navigate('/planets')
        })
    }
    const changePlanetWrapper = (planetData) => {
        const {error} = schema.validate(planetData)
        if (error) {
            setFormError(error.details[0].message)
            return;
        }
        dispatch(changePlanet(planetData));
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
            saveData={addPlanetWrapper}
            formError={formError}
            setFormError={setFormError}
        />
        : <Form
            columns={planetsColumns}
            initialData={planets.find(planet => planet.id === planetId)}
            saveData={changePlanetWrapper}
            formError={formError}
            setFormError={setFormError}
        />

}