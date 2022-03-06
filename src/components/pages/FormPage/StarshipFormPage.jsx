import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Form from "../../common/Form";
import {useNavigate} from 'react-router-dom';
import Joi from "joi";
import {useDispatch, useSelector} from "react-redux";
import {addStarship, changeStarship} from "../../../store/starships-reducer";

const starshipsColumns = ["name", "model", "manufacturer", "cost_in_credits", "length"];
const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    model: Joi.string().min(3).max(50).required(),
    manufacturer: Joi.string().min(3).max(100).required(),
    cost_in_credits: Joi.required(),
    length: Joi.number().required(),
    id: Joi.any(),
})

export const StarshipFormPage = () => {

    const starships = useSelector(state => state.starships)
    const dispatch = useDispatch()

    const [formError, setFormError] = useState('');

    const params = useParams()
    const starshipId = params.id

    const navigate = useNavigate()

    const getInitialStarshipsData = () => {
        return starshipsColumns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }
    const addStarshipWrapper = (starshipData) => {
        const {error} = schema.validate(starshipData)
        if (error) {
            setFormError(error.details[0].message)
            return;
        }
        dispatch(addStarship(starshipData))
        setTimeout(() => {
            navigate('/starships')
        })
    }
    const changeStarshipWrapper = (starshipData) => {
        const {error} = schema.validate(starshipData)
        if (error) {
            setFormError(error.details[0].message)
            return;
        }
        dispatch(changeStarship(starshipData));
        setTimeout(() => {
            navigate('/starships')
        })
    }

    useEffect(() => {
        localStorage.setItem('starships', JSON.stringify(starships))
    }, [starships])

    return (starshipId === 'new') ?
        <Form
            columns={starshipsColumns}
            initialData={getInitialStarshipsData()}
            saveData={addStarshipWrapper}
            formError={formError}
            setFormError={setFormError}
        />
        : <Form
            columns={starshipsColumns}
            initialData={starships.find(starship => starship.id === starshipId)}
            saveData={changeStarshipWrapper}
            formError={formError}
            setFormError={setFormError}
        />

}