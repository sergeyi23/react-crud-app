import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import Table from "../common/Table";
import Form from "../common/Form";
import { PeopleContext } from "../contexts/PeopleContext";

const PeoplePage = () => {
  const {
    tableName,
    people,
    columns,
    handleDeletePerson,
    selectedPerson,
    setSelectedPerson,
  } = useContext(PeopleContext);

  return (
    <div>
      <div className="col-5 col-md-3 mx-auto my-3 text-center">
        <Button className="btn btn-primary ">
          <NavLink to="/people/new" className="text-white">
            Add New Person
          </NavLink>
        </Button>
      </div>
      {people.length ? (
        <Table
          tableName={tableName}
          data={people}
          columns={columns}
          tableDescriptor="People"
          onDeleteData={handleDeletePerson}
          setPerson={setSelectedPerson}
        />
      ) : (
        <h1 className="col-10 mx-auto py-5 text-center">NO DATA ON PAGE</h1>
      )}
    </div>
  );
};

export default PeoplePage;
