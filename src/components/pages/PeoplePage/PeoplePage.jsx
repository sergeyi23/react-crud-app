import React, {useEffect, useState} from 'react';
import Table from "../../common/Table";
import {v1} from "uuid";
import {getPeople} from "../../../services/swApiService";
import Button from "../../common/Button";

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

    const handleAppPerson = (personData) => {
        setPeople([...people, personData])
    }
    const deletePerson = (id) => {
        setPeople(people.filter(person => person.id !== id))
    }
    const getColumns = () => {
        if (people.length === 0) {
            return []
        }
        return Object.keys(people[0]);
    }
    const getInitialPeopleData = () => {
        return getColumns().reduce((cols, columnName) => {
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
                    columns={getColumns()}
                    tableDescriptor="People"
                    deleteItem={deletePerson}
                />
                {/*<Form*/}
                {/*    initialData={getInitialPeopleData()}*/}
                {/*    columns={columns}*/}
                {/*    onAddData={handleAppPerson}*/}
                {/*/>*/}
                <Button
                    label="Create person"
                    classes="btn btn-success btn-lg"
                    onClick={handleAppPerson}
                />
            </>
            : <h2>No data</h2>
    );
}
