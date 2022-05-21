import React, { useState } from 'react';
import Input from "./Input";
import Button from "./Button";

const Form = ({columns, initialData, onAddData}) => {
    const [data, setData] = useState(initialData);

    const handleClick = (event) => {
        event.preventDefault();

        onAddData(data);
        setData({...data});
    }

    const handleChange = (event) => {
        const { currentTarget : input } = event;
        const newData = {...data};
        newData[input.name] = input.value;
        setData(newData)
    }


    return (
        <form>
            {Object.keys(columns).map(columnName => (
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
                classes="btn btn-outline-success mt-3 mb-3"
                onClick={handleClick}
            />
        </form>
    );
};

export default Form;
