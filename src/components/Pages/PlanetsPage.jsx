import React from 'react';
import { Link } from "react-router-dom";
import Table from "../common/Table";

import Button from '../common/Button';

function PlanetsPage({ planets, setPlanets }) {
    const columns = planets.length ? Object.keys(planets[0]) : [];
    const path = "planets";

    const handleDeletePlanet = (id) => {
        const data = planets.filter((planet) => id !== planet.id);
        setPlanets(data)
    }

    return (
        <div className="container">
            <h1>Planets page</h1>
            <Link to='/planets/new'>
                <Button
                    label="New Planet"
                    classes="btn btn-success m-2"
                />
            </Link>
            { planets.length ? 
                <Table
                data={planets}
                columns={columns}
                onDeleteData={handleDeletePlanet}
                tableDescriptor="Planets"
                pathname={path}
                />
                : 
                <h2>no info</h2>
            }
        </div>
    );
}

export default PlanetsPage;