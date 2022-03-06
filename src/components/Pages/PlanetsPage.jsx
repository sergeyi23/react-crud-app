import React, { useState } from 'react';
import Table from "../common/Table";
import Form from '../common/Form';


const data = [
    {first: 'Mark', last: 'Otto', handle: '@motto', id: '1'},
    {first: 'Carl', last: 'Reno', handle: '@ceno', id: '2'},
    {first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3'}
]

const columns = Object.keys(data[0]);

function PlanetsPage() {
    const [planets, setPlanets] = useState(data);

    const handleAddPlanet = (planetData) => {
        const data = [...planets, planetData];
        setPlanets(data)
    }

    const handleDeletePlanet = (id) => {
        const data = planets.filter((planet) => id !== planet.id);
        setPlanets(data)
    }

    const getInitialPlanetsData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    return (
        <div className="container">
            <h1>PLANETS PAGE</h1>
            { planets.length ? 
                <Table
                data={planets}
                columns={columns}
                onDeleteData={handleDeletePlanet}
                tableDescriptor="Planets"
                />
                : 
                <h2>NO INFORMATION</h2>
            }
            <Form
                initialData={getInitialPlanetsData()}
                columns={columns}
                onAddData={handleAddPlanet}
            />
        </div>
    );
}

export default PlanetsPage; 