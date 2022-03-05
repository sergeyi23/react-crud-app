import React, {useEffect, useState} from 'react';
import Table from "../../common/Table";
import {v1} from "uuid";
import {getPlanets} from "../../../services/swApiService";
import Button from "../../common/Button";
import {Link} from "react-router-dom";

export const PlanetsPage = () => {

    const [planets, setPlanets] = useState(() => {
        let localPlanetsData = JSON.parse(localStorage.getItem('planets'))
        return (localPlanetsData) ? localPlanetsData : [];
    });

    useEffect(() => {
        const getData = async () => {
            const data = await getPlanets()
            setPlanets(data.map(planet => ({...planet, id: v1()})))
        }

        if (planets.length === 0) {
            getData();
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('planets', JSON.stringify(planets))
    }, [planets])

    const deletePlanet = (id) => {
        setPlanets(planets.filter(planet => planet.id !== id))
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
