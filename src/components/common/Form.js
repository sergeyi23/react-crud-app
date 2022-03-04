import React, { useState } from 'react';
import Input from "./Input";
import Button from "./Button";

const Form = ({columns, initialData, onAddData}) => {
    const [data, setData] = useState(initialData);

    const handleClick = (event) => {
        event.preventDefault();
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
                classes="alert alert-success"
                onClick={handleClick}
            />
        </form>
    );
};

export default Form;
