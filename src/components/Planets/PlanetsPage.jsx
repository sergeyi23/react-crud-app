import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getPlanets, getDataFromLS } from "./../helpers/api";

import Table from "../common/Table";
import { PlanetsContext } from "../contexts/PlanetsContext";

const PlanetsPage = () => {
  const {
    lsKey,
    tableName,
    planets,
    setPlanets,
    columns,
    handleDeletePlanet,
    setSelectedPlanet,
  } = useContext(PlanetsContext);

  const url = "https://swapi.dev/api/planets/";

  const dataFromLS = getDataFromLS(lsKey);

  useEffect(() => {
    const getData = async () => {
      const data = await getPlanets(url);
      console.log(data);
      setPlanets((current) => data);
    };
    dataFromLS?.length > 0 ? setPlanets(dataFromLS) : getData();
  }, []);

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
