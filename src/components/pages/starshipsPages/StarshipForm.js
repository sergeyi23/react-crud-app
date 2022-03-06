import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Joi from "joi";
import { useSelector, useDispatch } from 'react-redux';
import { addStarship, updateStarship} from '../../../store/actions/starships';
import Form from '../../common/Form';

const columns = ['name', 'starship_class', 'passengers', 'length', 'consumables', 'id']
const schema = Joi.object().keys({
    name: Joi.string().min(2).max(25).required(),
    starship_class: Joi.string().required(),
    passengers: Joi.number().integer().required(),
    length: Joi.number().integer().required(),
    consumables: Joi.string().required(),
    id: Joi.any(),
  });

const DataForm = () => {
    const dispatch = useDispatch();
    const starships = useSelector(state => state.starships);
    const [errors, setErrors] = useState('');

    const navigation = useNavigate()
    const starshipId = useParams().id

    useEffect(() => {
        localStorage.setItem('starships',JSON.stringify(starships))
    }, [starships])

    const handleAppStarship = (starshipData) => {
        const {error} = schema.validate(starshipData)
        if (error) {
            setErrors(error.details[0].message)
            return;
        }
        const data = [...starships, starshipData];
        dispatch(addStarship(starshipData));
        setTimeout(() => {
            navigation('/starships')
        })
    }
  
    const handleUdpateStarship = (starshipData) => {
        const {error} = schema.validate(starshipData)
        if (error) {
            setErrors(error.details[0].message)
            return;
        }
        dispatch(updateStarship(starshipData));
        setTimeout(() => {
            navigation('/starships')
        })
    }

    const getInitialStarshipDataData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
         }, {})
    }


    if(starshipId == 'new'){
        return (
            <div> 
                <div className="container">  
                <h1>Create new starship</h1>
                <Form
                    initialData={getInitialStarshipDataData()}
                    columns={columns}
                    onAddData={handleAppStarship}
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
                <h1>Update starship</h1>
                <Form
                    initialData={starships.find(starship => starship.id == starshipId)}
                    columns={columns}
                    onAddData={handleUdpateStarship}
                    errors = {errors}
                    setErrors = {setErrors}
                />
                </div>
            </div>
        );
    }
};

export default DataForm;