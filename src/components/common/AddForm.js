import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";
import Input from "./Input";

const AddForm = ({
  tableName,
  initialData,
  columns,
  onAddData,
  newData,
  createNewData,
  buttonTitle,
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    onAddData(newData);
    createNewData(initialData);
    setIsSuccess(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    const data = { ...newData };
    data[name] = value;
    createNewData(data);
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigate(`/${tableName}`);
      }, 1000);

      return () => {
        setIsSuccess(false);
        clearTimeout(timer);
      };
    }
  }, [isSuccess]);

  return (
    <form className="col-11 col-md-8 col-xl-6 mx-auto">
      {isSuccess && (
        <h1 className="col-10 mx-auto py-2 text-center text-success">
          SUCCESSFULLY ADDED
        </h1>
      )}
      {columns?.map((columnName) => (
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
        disabled={
          newData &&
          [...Object.values(newData)].some((key) => key.trim() === "")
        }
        className="btn btn-primary col-8 col-md-3 fs-4 px-2 mx-auto"
        onClick={handleClick}
      >
        {buttonTitle}
      </Button>
    </form>
  );
};

export default AddForm;
