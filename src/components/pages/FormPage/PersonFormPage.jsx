import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Form from "../../common/Form";
import {v1} from "uuid";
import {useNavigate} from 'react-router-dom';

const peopleColumns = ["name", "height", "mass", "gender", "birth_year"];

export const PersonFormPage = () => {

    const [people, setPeople] = useState(() => {
        let localPeopleData = JSON.parse(localStorage.getItem('people'))
        return (localPeopleData) ? localPeopleData : [];
    });

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
        setPeople([...people, {...personData, id: v1()}])
        setTimeout(() => {
            navigate('/people')
        })
    }
    const changePerson = (personData) => {
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
        />
        : <Form
            columns={peopleColumns}
            initialData={people.find(person => person.id === userId)}
            saveData={changePerson}
        />

}