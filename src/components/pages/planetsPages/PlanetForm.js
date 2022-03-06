import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Joi from "joi"
import Form from '../../common/Form';

const columns = ['name', 'climate', 'population', 'diameter', 'gravity', 'id']
const schema = Joi.object().keys({
    name: Joi.string().min(2).max(25).required(),
    climate: Joi.string().required(),
    population: Joi.number().integer().required(),
    diameter: Joi.string().required(),
    gravity: Joi.string().required(),
    id: Joi.any(),
  });

const DataForm = () => {
    const [planets, setPlanets] = useState(JSON.parse(localStorage.getItem('planets')));
    const [errors, setErrors] = useState('');

    const navigation = useNavigate()
    const planetId = useParams().id

    useEffect(() => {
        localStorage.setItem('planets',JSON.stringify(planets))
    }, [planets])

    const handleAppPlanet = (planetData) => {
        const {error} = schema.validate(planetData)
        if (error) {
            setErrors(error.details[0].message)
            return;
        }
        const data = [...planets, planetData];
        setPlanets(data);
        setTimeout(() => {
            navigation('/planets')
        })
    }
  
    const handleUdpatePlanet = (planetData) => {
        const {error} = schema.validate(planetData)
        if (error) {
            setErrors(error.details[0].message)
            return;
        }
        setPlanets(planets.map((planet)=>{
            if(planet.id === planetData.id){
                return planetData;
            }
            return planet;
        }))
        setTimeout(() => {
            navigation('/planets')
        })
    }

    const getInitialPeopleData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
         }, {})
    }


    if(planetId == 'new'){
        return (
            <div> 
                <div className="container">  
                <h1>Create new planet</h1>
                <Form
                    initialData={getInitialPeopleData()}
                    columns={columns}
                    onAddData={handleAppPlanet}
                    errors = {errors}
                    setErrors = {setErrors}
                />
                </div>
            </div>
        );
    }
    else{
        return (
            <div> 
                <div className="container">  
                <h1>Update planet</h1>
                <Form
                    initialData={planets.find(planet => planet.id == planetId)}
                    columns={columns}
                    onAddData={handleUdpatePlanet}
                    errors = {errors}
                    setErrors = {setErrors}
                />
                {errors && <div className="alert alert-danger">{errors}</div>}
                </div>
            </div>
        );
    }
};

export default DataForm;