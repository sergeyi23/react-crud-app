import React, {useEffect} from 'react';
import Table from "../../common/Table";
import Button from "../../common/Button";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchStarships, removeStarship} from "../../../store/starships-reducer";

export const StarshipsPage = () => {

    const starships = useSelector(state => state.starships)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStarships())
    }, [])
    useEffect(() => {
        localStorage.setItem('starships', JSON.stringify(starships))
    }, [starships])

    const deleteStarship = (id) => {
        dispatch(removeStarship(id))
    }
    const getColumns = () => {
        if (starships.length === 0) {
            return []
        }
        return Object.keys(starships[0]);
    }

    return (
        (starships.length)
            ? <>
                <h1>Starships page</h1>
                <Table
                    data={starships}
                    columns={getColumns()}
                    tableDescriptor="Starships"
                    deleteItem={deleteStarship}
                />
                <Link to={'/starships/form/new'}>
                    <Button
                        label="Create starship"
                        classes="btn btn-outline-primary"
                    />
                </Link>
            </>
            : <h2>No data</h2>
    );
}

