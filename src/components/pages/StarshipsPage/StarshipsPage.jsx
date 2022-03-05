import React, {useEffect, useState} from 'react';
import Table from "../../common/Table";
import {v1} from "uuid";
import {getStarships} from "../../../services/swApiService";
import Button from "../../common/Button";
import {Link} from "react-router-dom";

export const StarshipsPage = () => {

    const [starships, setStarships] = useState(() => {
        let localStarshipsData = JSON.parse(localStorage.getItem('starships'))
        return (localStarshipsData) ? localStarshipsData : [];
    });

    useEffect(() => {
        const getData = async () => {
            const data = await getStarships()
            setStarships(data.map(starship => ({...starship, id: v1()})))
        }

        if (starships.length === 0) {
            getData();
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('starships', JSON.stringify(starships))
    }, [starships])

    const deleteStarship = (id) => {
        setStarships(starships.filter(starship => starship.id !== id))
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

