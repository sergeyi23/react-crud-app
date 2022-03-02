import React, {useState} from 'react';
import Table from "../../common/Table";
import Form from "../../common/Form";
import {v1} from "uuid";

// import './App.css';

const starshipsInitData = [
    {
        starship: 'Dragon',
        height: '50 m / 164 ft',
        diameter: '9 m / 30 ft',
        'Propellant capacity': '1200 t / 2.6 Mlb',
        thrust: '1500 tf / 3.2Mlbf',
        'payload capacity': '100-150 t orbit dependent',
        id: v1(),
    },
    {
        starship: 'Apollo',
        height: '50 m / 164 ft',
        diameter: '9 m / 30 ft',
        'Propellant capacity': '1200 t / 2.6 Mlb',
        thrust: '1500 tf / 3.2Mlbf',
        'payload capacity': '100-150 t orbit dependent',
        id: v1(),
    },
    {
        starship: 'Enterprise',
        height: '50 m / 164 ft',
        diameter: '9 m / 30 ft',
        'Propellant capacity': '1200 t / 2.6 Mlb',
        thrust: '1500 tf / 3.2Mlbf',
        'payload capacity': '100-150 t orbit dependent',
        id: v1(),
    },
]

const columns = Object.keys(starshipsInitData[0]);

export const StarshipsPage = () => {
    const [starships, setStarships] = useState(starshipsInitData);

    const handleStarship = (starshipData) => {
        const data = [...starships, starshipData];
        setStarships(data)
    }
    const deleteStarship = (id) => {
        setStarships(starships.filter(starship => starship.id !== id))
    }

    const getInitialStarshipsData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    return (
        <>
            <h1>Starships page</h1>
            <Table
                data={starships}
                columns={columns}
                tableDescriptor="Starships"
                deleteItem={deleteStarship}
            />
            <Form
                initialData={getInitialStarshipsData()}
                columns={columns}
                onAddData={handleStarship}
            />
        </>
    );
}

