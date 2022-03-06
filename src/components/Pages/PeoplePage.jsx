import React from 'react';
import { Link } from "react-router-dom";
import Table from "../common/Table";

import Button from '../common/Button';

function PeoplePage({ people, setPeople }) {
    const columns = people.length ? Object.keys(people[0]) : [];
    const path  = "people";

    const handleDeletePerson = (id) => {
        const data = people.filter((person) => id !== person.id);
        setPeople(data)
    }

    return (
        <div className="container">
            <h1>People page</h1>
            <Link to='/people/new'>
                <Button
                    label="New Person"
                    classes="btn btn-success m-2"
                />
            </Link>
            { people.length ? 
                <Table
                data={people}
                columns={columns}
                onDeleteData={handleDeletePerson}
                tableDescriptor="People"
                pathname={path}
                /> 
                : 
                <h2>no info</h2>
            }
        </div>
    );
}

export default PeoplePage;