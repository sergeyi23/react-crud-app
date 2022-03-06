import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";
import Input from "./Input";

const EditForm = ({
  personData,
  setPersonData,
  columns,
  onEditForm,
  buttonTitle,
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    onEditForm(personData);
    setIsSuccess(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setPersonData({
      ...personData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigate("/people");
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
          SUCCESSFULLY UPDATED
        </h1>
      )}
      {columns.map((columnName) => (
        <Input
          key={columnName}
          name={columnName}
          label={columnName}
          value={personData[columnName]}
          type="input"
          onChange={handleChange}
        />
      ))}
      <Button
        type="button"
        disabled={[...Object.values(personData)].some(
          (key) => key.trim() === ""
        )}
        className="btn btn-primary col-5 col-md-2 fs-4 px-2 mx-auto"
        onClick={handleClick}
      >
        {buttonTitle}
      </Button>
    </form>
  );
};

export default EditForm;
