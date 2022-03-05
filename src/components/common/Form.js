import React, {useState} from 'react';
import Input from "./Input";
import Button from "./Button";

const Form = ({columns, initialData, saveData}) => {
    const [formData, setFormData] = useState(initialData);

    const handleClick = (event) => {
        event.preventDefault();
        saveData(formData);
    }
    const handleChange = (event) => {
        const {currentTarget: input} = event;
        setFormData({...formData, [input.name]: input.value})
    }

    return (
        <form>
            {columns.map(columnName => (
                <Input
                    key={columnName}
                    name={columnName}
                    label={columnName}
                    value={formData[columnName]}
                    type="input"
                    onChange={handleChange}
                />
            ))}
            <Button
                label="Save"
                classes="btn btn-success btn-lg"
                onClick={handleClick}
            />
        </form>
    );
};

export default Form;
