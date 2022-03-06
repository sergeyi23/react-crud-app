import React, { useState } from 'react';
import Table from "../common/Table";
import Form from '../common/Form';

const data = [
    {first: 'Mark', last: 'Otto', handle: '@motto', id: '1'},
    {first: 'Carl', last: 'Reno', handle: '@ceno', id: '2'},
    {first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3'}
]

const columns = Object.keys(data[0]);

function StarshipsPage() {
    const [starships, setStarships] = useState(data);

    const handleAddStarship = (starshipData) => {
        const data = [...starships, starshipData];
        setStarships(data)
    }

    const handleDeleteStarship = (id) => {
        const data = starships.filter((starship) => id !== starship.id);
        setStarships(data)
    }

    const getInitialStarshipsData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    return (
        <div className="container">
            <h1>STARSHIPS PAGE</h1>
            { starships.length ? 
                <Table
                data={starships}
                columns={columns}
                onDeleteData={handleDeleteStarship}
                tableDescriptor="Starships"
                />
                : 
                <h2>NO INFORMATION</h2>
            }
            <Form
                initialData={getInitialStarshipsData()}
                columns={columns}
                onAddData={handleAddStarship}
            />
        </div>
    );
}

export default StarshipsPage; 