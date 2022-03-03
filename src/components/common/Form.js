import React from "react";
import { Button } from "react-bootstrap";
import Input from "./Input";

const Form = ({ initialData, columns, onAddData, newData, createNewData }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onAddData(newData);
    createNewData(initialData());
  };

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    const data = { ...newData };
    data[name] = value;
    createNewData(data);
  };

  return (
    <form className="col-11 col-md-8 col-xl-6 mx-auto">
      {columns.map((columnName) => (
        <Input
          key={columnName}
          name={columnName}
          label={columnName}
          value={newData[columnName]}
          type="input"
          onChange={handleChange}
        />
      ))}
      <Button
        type="button"
        disabled={[...Object.values(newData)].some((key) => key.trim() === "")}
        className="btn btn-primary col-5 col-md-2 fs-4 px-2 mx-auto"
        onClick={handleClick}
      >
        Add
      </Button>
    </form>
  );
};

export default Form;
