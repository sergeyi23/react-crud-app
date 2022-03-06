import React, {useState} from 'react';
import Input from "./Input";
import Button from "./Button";

const Form = ({initialData, onAddData}) => {
    const [stateData, setPersonData] = useState(initialData ?? {});
    const columns = Object.keys(initialData ?? {})

    const [stateErrors, setErrors] = useState()

    const handleClick = (event) => {
        event.preventDefault();
        let errors = columns.reduce((cols, columnName) => {
            if (!stateData[columnName] || stateData[columnName] === "") {
                cols[columnName] = "empty";
            }
            return cols;
        }, {})
        setErrors(errors)

        if (Object.keys(stateErrors ?? {}).length === 0 && Object.keys(errors).length === 0)
            onAddData(stateData);
    }

    const handleChange = (event) => {
        const { currentTarget : input } = event;
        const data = {...stateData};
        if (input.value.trim() === ""){
            let temp = {...stateErrors, [input.name]: "empty"}
            setErrors(temp)
        }
        else {
            let temp = {...stateErrors}
            delete temp[input.name];
            setErrors(temp)
        }

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
                id={columnName}
                />
            ))}
            {Object.keys(stateErrors ?? {}).length > 0 &&
            <p className="alert alert-danger badge-info p-2 d-flex justify-content-center align-items-center">Please check following fields: {Object.keys(stateErrors ?? {}).map( error => <a href={"#" + error} className="btn btn-light m-2" key={error}>{error}</a>)}</p>
            }
            <Button
                label="Save"
                classes="btn btn-warning"
                onClick={handleClick}/>
        </form>
    );
};

export default Form;
