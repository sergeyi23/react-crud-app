import React, { useState } from 'react';
import Input from "./Input";
import Button from "./Button";

const Form = ({columns, initialData, onAddData}) => {
    const [stateData, setPersonData] = useState(initialData);

    const handleClick = (event) => {
        console.log(event)
        event.preventDefault();
        onAddData(stateData);
    }

    const handleChange = (event) => {
        const { currentTarget : input } = event;
        const data = {...stateData};
        data[input.name] = input.value;
        setPersonData(data)
    }


    return (
        <form>
            {columns.map( columnName => (
                <Input
                key={columnName}
                name={columnName}
                label={columnName}
                value={stateData[columnName]}
                type="input"
                onChange={handleChange}
                />
            ))}
            <Button
                label="Save"
                classes="alert"
                onClick={handleClick}
            />
        </form>
    );
};

export default Form;
