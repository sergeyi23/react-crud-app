import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Form from "../../common/Form";
import {v1} from "uuid";
import {useNavigate} from 'react-router-dom';
import Joi from "joi";

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

    const [people, setPeople] = useState(() => {
        let localPeopleData = JSON.parse(localStorage.getItem('people'))
        return (localPeopleData) ? localPeopleData : [];
    });
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
    const addPerson = (personData) => {
        const {error} = schema.validate(personData)
        if (error) {
            setFormError(error.details[0].message)
            return;
        }
        setPeople([...people, {...personData, id: v1()}])
        setTimeout(() => {
            navigate('/people')
        })
    }
    const changePerson = (personData) => {
        const {error} = schema.validate(personData)
        if (error) {
            setFormError(error.details[0].message)
            return;
        }
        setPeople(people.map(person => {
            return (person.id === personData.id) ? personData : person
        }))
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
            saveData={addPerson}
            formError={formError}
            setFormError={setFormError}
        />
        : <Form
            columns={peopleColumns}
            initialData={people.find(person => person.id === userId)}
            saveData={changePerson}
            formError={formError}
            setFormError={setFormError}
        />

}