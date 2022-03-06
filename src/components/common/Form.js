import React, { useState } from 'react';
import Input from "./Input";
import Button from "./Button";

const Form = ({columns, initialData, onAddData, schema}) => {
    const [data, setData] = useState(initialData);

    let isError = false;

    const handleClick = (event) => {
        event.preventDefault();

        const check = schema.validate(data).error
        if (check !== undefined) {
            isError = true;
            return;
        }

        onAddData(data);
        const form = document.querySelectorAll('.form-control')
        const newData = {...data};
        form.forEach(input => newData[input.name] = '')
        setData(newData)
    }

    const handleChange = (event) => {
        const { currentTarget : input } = event;
        const newData = {...data};
        newData[input.name] = input.value;
        setData(newData)
    }


    return (
        <form>
            {columns.map( columnName => (
                <Input
                key={columnName}
                name={columnName}
                label={columnName}
                value={data[columnName]}
                type="input"
                onChange={handleChange}
                />
            ))}
            <Button
                label="Save"
                classes={isError ? "btn btn-danger mt-3 mb-3" : "btn btn-outline-success mt-3 mb-3"}
                onClick={handleClick}
            />
        </form>
    );
};

export default Form;
