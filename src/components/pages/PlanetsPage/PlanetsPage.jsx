import React, {useEffect} from 'react';
import Table from "../../common/Table";
import Button from "../../common/Button";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchPlanets, removePlanet} from "../../../store/planets-reducer";

export const PlanetsPage = () => {

    const planets = useSelector(state => state.planets)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPlanets());
    }, [])
    useEffect(() => {
        localStorage.setItem('planets', JSON.stringify(planets))
    }, [planets])

    const deletePlanet = (id) => {
        dispatch(removePlanet(id))
    }
    const getColumns = () => {
        if (planets.length === 0) {
            return []
        }
        return Object.keys(planets[0]);
    }

    return (
        (planets.length)
            ? <>
                <h1>Planets page</h1>
                <Table
                    data={planets}
                    columns={getColumns()}
                    tableDescriptor="Planets"
                    deleteItem={deletePlanet}
                />
                <Link to={'/planets/form/new'}>
                    <Button
                        label="Create planet"
                        classes="btn btn-outline-primary"
                    />
                </Link>
            </>
            : <h2>No data</h2>
    );
}
