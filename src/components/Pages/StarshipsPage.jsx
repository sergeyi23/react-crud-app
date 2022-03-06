import React from 'react';
import { Link} from "react-router-dom";
import Table from "../common/Table";
import Button from '../common/Button';

function StarshipsPage({ starships, setStarships }) {
    const columns = starships.length ? Object.keys(starships[0]) : [];
    const path = "startships";

    const handleDeleteStarship = (id) => {
        const data = starships.filter((starship) => id !== starship.id);
        setStarships(data)
    }

    return (
        <div className="container">
            <h1>Starships page</h1>
            <Link to='/starships/new'>
                <Button
                    label="New Starship"
                    classes="btn btn-success m-2"
                />
            </Link>
            { starships.length ? 
                <Table
                data={starships}
                columns={columns}
                onDeleteData={handleDeleteStarship}
                tableDescriptor="Starships"
                pathname={path}
                />
                : 
                <h2>no info</h2>
            }
        </div>
    );
}

export default StarshipsPage;