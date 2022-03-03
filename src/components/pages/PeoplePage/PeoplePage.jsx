import React, {useState} from 'react';
import Table from "../../common/Table";
import Form from "../../common/Form";
import {v1} from "uuid";

// import './App.css';

const peopleInitData = [
    {
        name: 'Mark',
        height: '186',
        mass: '90',
        gender: 'male',
        'birth year': '1995',
        id: v1(),
    },
    {
        name: 'Vitali',
        height: '190',
        mass: '100',
        gender: 'male',
        'birth year': '1995',
        id: v1(),
    },
    {
        name: 'Anna',
        height: '150',
        mass: '90',
        gender: 'male',
        'birth year': '1995',
        id: v1(),
    },
]

const columns = Object.keys(peopleInitData[0]);

export const PeoplePage = () => {
    const [people, setPeople] = useState(peopleInitData);

    const handleAppPerson = (personData) => {
        const data = [...people, personData];
        setPeople(data)
    }
    const deletePerson = (id) => {
        setPeople(people.filter(person => person.id !== id))
    }

    const getInitialPeopleData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    return (
        (people.length)
            ? <>
                <h1>People page</h1>
                <Table
                    data={people}
                    columns={columns}
                    tableDescriptor="People"
                    deleteItem={deletePerson}
                />
                <Form
                    initialData={getInitialPeopleData()}
                    columns={columns}
                    onAddData={handleAppPerson}
                /></>
            : <h2>No data</h2>

    );
}
