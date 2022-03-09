import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import Input from "./Input";

const EditForm = ({
  tableName,
  itemData,
  setItemData,
  columns,
  onEditForm,
  buttonTitle,
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    onEditForm(itemData);
    setIsSuccess(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setItemData({
      ...itemData,
      [name]: value,
    });
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
          SUCCESSFULLY UPDATED
        </h1>
      )}
      {columns.map((columnName, i) => {
        return columnName === "id" ? null : (
          <div key={columnName}>
            <Input
              name={columnName}
              label={columnName}
              value={itemData[columnName]}
              type="input"
              onChange={handleChange}
            />
          </div>
        );
      })}
      <Button
        type="button"
        disabled={itemData && Object.values(itemData).some((key) => key === "")}
        className="btn btn-primary col-8 col-md-3 fs-4 px-2 mx-auto"
        onClick={handleClick}
      >
        {buttonTitle}
      </Button>
    </form>
  );
};

export default EditForm;
