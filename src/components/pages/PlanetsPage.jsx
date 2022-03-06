import React, {useEffect} from 'react';
import {getPlanets} from "../../services/swapiService";
import Page from "../common/Page";

const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().min(2).required(),
    rotation_period: Joi.number().min(0),
    orbital_period: Joi.number().min(0),
    diameter: Joi.number().min(0),
    climate: Joi.string(),
    id: Joi.number().integer().min(1)
});

function PlanetsPage({data, cols, setter, title}) {

    useEffect(() => {
        const getData = async () => {
            const data = await getPlanets()

            let i = 0;
            let newData = data.map(elem => elem = {...elem, id: ++i});

            localStorage.setItem("planets", JSON.stringify(newData))
            setter(newData)
        }

        if (localStorage.getItem("planets") === null)
        {
            console.log('Planets data was loaded from SWAPI');
            getData();
        }
        else {
            console.log('Planets data was loaded from Local Storage')
            setter(JSON.parse(localStorage.getItem("planets")));
        }
    }, [])

    return (
        <Page
            data={data}
            cols={cols}
            setter={setter}
            title={title}
            schema={schema}
        />
    );
}

export default PlanetsPage