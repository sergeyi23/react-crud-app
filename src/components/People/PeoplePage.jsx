import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

import { getPeople, getDataFromLS } from "./../helpers/api";

import Table from "../common/Table";
import { PeopleContext } from "../contexts/PeopleContext";

const PeoplePage = () => {
  const {
    lsKey,
    tableName,
    people,
    setPeople,
    columns,
    handleDeletePerson,
    setSelectedPerson,
  } = useContext(PeopleContext);

  const url = "https://swapi.dev/api/people";
  const dataFromLS = getDataFromLS(lsKey);

  useEffect(() => {
    const getData = async () => {
      const data = await getPeople(url);
      setPeople((current) => data);
    };
    dataFromLS?.length > 0 ? setPeople(dataFromLS) : getData();
  }, []);

  return (
    <div>
      <div className="col-5 col-md-3 mx-auto my-3 text-center">
        <Button className="btn btn-primary ">
          <NavLink to="/people/new" className="text-white text-decoration-none">
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
          setDataItem={setSelectedPerson}
        />
      ) : (
        <h1 className="col-10 mx-auto py-5 text-center">NO DATA ON PAGE</h1>
      )}
    </div>
  );
};

export default PeoplePage;
