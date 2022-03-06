import React, {useEffect} from 'react';
import {getPeople} from "../../services/swapiService";
import Page from "../common/Page";

const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().min(2).required(),
    height: Joi.number().min(0),
    mass: Joi.number().min(0),
    gender: Joi.string(),
    birth_year: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,10}$')),
    id: Joi.number().integer().min(1)
});

function PeoplePage({data, cols, setter, title}) {

    useEffect(() => {
        const getData = async () => {
            const data = await getPeople()

            let i = 0;
            let newData = data.map(elem => elem = {...elem, id: ++i});

            localStorage.setItem("people", JSON.stringify(newData))
            setter(newData)
        }

        if (localStorage.getItem("people") === null)
        {
            console.log('People data was loaded from SWAPI');
            getData();
        }
        else {
            console.log('People data was loaded from Local Storage')
            setter(JSON.parse(localStorage.getItem("people")));
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

export default PeoplePage