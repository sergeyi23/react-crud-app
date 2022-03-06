import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Form from "../../common/Form";
import {v1} from "uuid";
import {useNavigate} from 'react-router-dom';
import Joi from "joi";

const starshipsColumns = ["name", "model", "manufacturer", "cost_in_credits", "length"];
const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    model: Joi.string().min(3).max(50).required(),
    manufacturer: Joi.string().min(3).max(50).required(),
    cost_in_credits: Joi.required(),
    length: Joi.number().required(),
    id: Joi.any(),
})

export const StarshipFormPage = () => {

    const [starships, setStarships] = useState(() => {
        let localStarshipsData = JSON.parse(localStorage.getItem('starships'))
        return (localStarshipsData) ? localStarshipsData : [];
    });
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
    const addStarship = (starshipData) => {
        const {error} = schema.validate(starshipData)
        if (error) {
            setFormError(error.details[0].message)
            return;
        }
        setStarships([...starships, {...starshipData, id: v1()}])
        setTimeout(() => {
            navigate('/starships')
        })
    }
    const changeStarship = (starshipData) => {
        const {error} = schema.validate(starshipData)
        if (error) {
            setFormError(error.details[0].message)
            return;
        }
        setStarships(starships.map(starship => {
            return (starship.id === starshipData.id) ? starshipData : starship
        }))
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
            saveData={addStarship}
            formError={formError}
            setFormError={setFormError}
        />
        : <Form
            columns={starshipsColumns}
            initialData={starships.find(starship => starship.id === starshipId)}
            saveData={changeStarship}
            formError={formError}
            setFormError={setFormError}
        />

}