import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Form from "../../common/Form";
import {v1} from "uuid";
import {useNavigate} from 'react-router-dom';

const starshipsColumns = ["name", "model", "manufacturer", "cost_in_credits", "length"];

export const StarshipFormPage = () => {

    const [starships, setStarships] = useState(() => {
        let localStarshipsData = JSON.parse(localStorage.getItem('starships'))
        return (localStarshipsData) ? localStarshipsData : [];
    });

    const params = useParams()
    const starshipId = params.id

    const navigate = useNavigate()

    const getInitialStarshipsData = () => {
        return starshipsColumns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }
    const addStarship = (starshipData) => {
        setStarships([...starships, {...starshipData, id: v1()}])
        setTimeout(() => {
            navigate('/starships')
        })
    }
    const changeStarship = (starshipData) => {
        setStarships(starships.map(starship => {
            return (starship.id === starshipData.id) ? starshipData : starship
        }))
        setTimeout(() => {
            navigate('/starships')
        })
    }

    useEffect(() => {
        localStorage.setItem('starships', JSON.stringify(starships))
    }, [starships])

    return (starshipId === 'new') ?
        <Form
            columns={starshipsColumns}
            initialData={getInitialStarshipsData()}
            saveData={addStarship}
        />
        : <Form
            columns={starshipsColumns}
            initialData={starships.find(starship => starship.id === starshipId)}
            saveData={changeStarship}
        />

}