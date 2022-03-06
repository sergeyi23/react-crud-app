import React, { useState } from 'react';
import Table from "../common/Table";
import Form from '../common/Form'

const data = [
    {first: 'Mark', last: 'Otto', handle: '@motto', id: '1'},
    {first: 'Carl', last: 'Reno', handle: '@ceno', id: '2'},
    {first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3'}
]

const columns = Object.keys(data[0]);

function PeoplePage() {
    const [people, setPeople] = useState(data);

    const handleAddPerson = (personData) => {
        const data = [...people, personData];
        setPeople(data)
    }

    const handleDeletePerson = (id) => {
        const data = people.filter((person) => id !== person.id);
        setPeople(data)
    }

    const getInitialPeopleData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    return (
        <div className="container">
            <h1>PEOPLE PAGE</h1>
            { people.length ? 
                <Table
                data={people}
                columns={columns}
                onDeleteData={handleDeletePerson}
                tableDescriptor="People"
                /> 
                : 
                <h2>NO INFORMATION</h2>
            }
            <Form
                initialData={getInitialPeopleData()}
                columns={columns}
                onAddData={handleAddPerson}
            />
        </div>
    );
}

export default PeoplePage; 