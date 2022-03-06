import React, {useEffect} from 'react';
import Table from "../../common/Table";
import Button from "../../common/Button";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    changePersonBeloved,
    fetchTasks,
    removePerson
} from "../../../store/people-reducer";

export const PeoplePage = () => {

    const people = useSelector(state => state.people)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTasks());
    }, [])
    useEffect(() => {
        localStorage.setItem('people', JSON.stringify(people))
    }, [people])

    const deletePerson = (id) => {
        dispatch(removePerson(id))
    }
    const changePersonBelovedStatus = (beloved, id) => {
        dispatch(changePersonBeloved(beloved, id))
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
                    changeItemStatus={changePersonBelovedStatus}

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
