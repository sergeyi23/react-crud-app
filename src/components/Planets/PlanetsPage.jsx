import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

import Table from "../common/Table";
import { PlanetsContext } from "../contexts/PlanetsContext";

const PlanetsPage = () => {
  const {
    tableName,
    planets,
    columns,
    handleDeletePlanet,
    setSelectedPlanet,
  } = useContext(PlanetsContext);

  return (
    <div>
      <div className="col-8 col-md-3 mx-auto my-3 text-center">
        <Button className="btn btn-primary ">
          <NavLink
            to="/planets/new"
            className="text-white text-decoration-none"
          >
            Add New Planet
          </NavLink>
        </Button>
      </div>
      {planets.length ? (
        <Table
          tableName={tableName}
          data={planets}
          columns={columns}
          tableDescriptor="Planets"
          onDeleteData={handleDeletePlanet}
          setDataItem={setSelectedPlanet}
        />
      ) : (
        <h1 className="col-10 mx-auto py-5 text-center">NO DATA ON PAGE</h1>
      )}
    </div>
  );
};

export default PlanetsPage;
