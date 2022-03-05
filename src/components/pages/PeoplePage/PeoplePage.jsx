import React, {useEffect, useState} from 'react';
import Table from "../../common/Table";
import {v1} from "uuid";
import {getPeople} from "../../../services/swApiService";
import Button from "../../common/Button";
import {Link} from "react-router-dom";

export const PeoplePage = () => {

    const [people, setPeople] = useState(() => {
        let localPeopleData = JSON.parse(localStorage.getItem('people'))
        return (localPeopleData) ? localPeopleData : [];
    });

    useEffect(() => {
        const getData = async () => {
            const data = await getPeople()
            setPeople(data.map(person => ({...person, id: v1()})))
        }

        if (people.length === 0) {
            getData();
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('people', JSON.stringify(people))
    }, [people])

    const deletePerson = (id) => {
        setPeople(people.filter(person => person.id !== id))
    }
    const getColumns = () => {
        if (people.length === 0) {
            return []
        }
        return Object.keys(people[0]);
    }

    return (
        (people.length)
            ? <>
                <h1>People page</h1>
                <Table
                    data={people}
                    columns={getColumns()}
                    tableDescriptor="People"
                    deleteItem={deletePerson}
                />
                <Link to={'/people/form/new'}>
                    <Button
                        label="Create person"
                        classes="btn btn-outline-primary"
                    />
                </Link>
            </>
            : <h2>No data</h2>
    );
}
