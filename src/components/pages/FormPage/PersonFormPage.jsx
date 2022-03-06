import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Form from "../../common/Form";
import {useNavigate} from 'react-router-dom';
import Joi from "joi";
import {useDispatch, useSelector} from "react-redux";
import {addPerson, changePerson} from "../../../store/people-reducer";

const peopleColumns = ["name", "height", "mass", "gender", "birth_year"];
const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    height: Joi.number().integer().required(),
    mass: Joi.number().integer().required(),
    gender: Joi.string().required(),
    birth_year: Joi.string().required(),
    id: Joi.any(),
})

export const PersonFormPage = () => {

    const people = useSelector(state => state.people)
    const dispatch = useDispatch()

    const [formError, setFormError] = useState('');

    const params = useParams()
    const userId = params.id

    const navigate = useNavigate()

    const getInitialPeopleData = () => {
        return peopleColumns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }
    const addPersonWrapper = (personData) => {
        const {error} = schema.validate(personData)
        if (error) {
            setFormError(error.details[0].message)
            return;
        }
        dispatch(addPerson(personData))
        setTimeout(() => {
            navigate('/people')
        })
    }
    const changePersonWrapper = (personData) => {
        const {error} = schema.validate(personData)
        if (error) {
            console.log(error.details[0].message)
            setFormError(error.details[0].message)
            return;
        }
        dispatch(changePerson(personData));
        setTimeout(() => {
            navigate('/people')
        })
    }

    useEffect(() => {
        localStorage.setItem('people', JSON.stringify(people))
    }, [people])

    return (userId === 'new') ?
        <Form
            columns={peopleColumns}
            initialData={getInitialPeopleData()}
            saveData={addPersonWrapper}
            formError={formError}
            setFormError={setFormError}
        />
        : <Form
            columns={peopleColumns}
            initialData={people.find(person => person.id === userId)}
            saveData={changePersonWrapper}
            error={formError}
            setFormError={setFormError}
        />

}