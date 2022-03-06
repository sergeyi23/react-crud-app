import React, {useEffect} from 'react';
import { getStarships } from "../../services/swapiService";
import Page from "../common/Page";

const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().pattern(new RegExp('^[a-zA-Z0-9 -]{3,10}$')).required(),
    model: [Joi.string(), Joi.number()],
    cost_in_credits: Joi.number().min(0),
    length: Joi.number().min(0),
    id: Joi.number().integer().min(1)
});

function StarshipsPage({data, cols, setter, title}) {

    useEffect(() => {
        const getData = async () => {
            const data = await getStarships()

            let i = 0;
            let newData = data.map(elem => elem = {...elem, id: ++i});

            localStorage.setItem("starships", JSON.stringify(newData))
            setter(newData)
        }

        if (localStorage.getItem("starships") === null)
        {
            console.log('Starships data was loaded from SWAPI');
            getData();
        }
        else {
            console.log('Starships data was loaded from Local Storage')
            setter(JSON.parse(localStorage.getItem("starships")));
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

export default StarshipsPage