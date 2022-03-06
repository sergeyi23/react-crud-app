import React, { useState } from 'react';
import Input from "./Input";
import Button from "./Button";

const Form = ({columns, initialData, onAddData, errors, setErrors}) => {
    const [FormData, setFormData] = useState(initialData);

    const handleClick = (event) => {
        event.preventDefault();
        onAddData(FormData);
    }

    const handleChange = (event) => {
        setErrors('')
        const { currentTarget : input } = event;
        const data = {...FormData};
        data[input.name] = input.value;
        setFormData(data)
    }

    return (
        <form>
            {columns.slice(0, -1).map( columnName => (
                <Input
                key={columnName}
                name={columnName}
                label={columnName}
                value={FormData[columnName]}
                type="input"
                onChange={handleChange}
                />
            ))}
            {errors && <div className="alert alert-danger">{errors}</div>}
            <Button
                label="Save"
                classes="alert alert-danger"
                onClick={handleClick}
            />
        </form>
    );
};

export default Form;
