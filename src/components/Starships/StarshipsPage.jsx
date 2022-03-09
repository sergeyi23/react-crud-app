import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

import { getStarships, getDataFromLS } from "./../helpers/api";

import Table from "../common/Table";
import { StarshipsContext } from "../contexts/StarshipsContext";

const StarshipsPage = () => {
  const {
    lsKey,
    tableName,
    ships,
    setShips,
    columns,
    handleDeleteShip,
    setSelectedShip,
  } = useContext(StarshipsContext);

  const url = "https://swapi.dev/api/starships";
  const dataFromLS = getDataFromLS(lsKey);

  useEffect(() => {
    const getData = async () => {
      const data = await getStarships(url);
      setShips((current) => data);
    };
    dataFromLS?.length > 0 ? setShips(dataFromLS) : getData();
  }, []);

  return (
    <div>
      <div className="col-8 col-md-3 mx-auto my-3 text-center">
        <Button className="btn btn-primary ">
          <NavLink
            to="/starships/new"
            className="text-white text-decoration-none"
          >
            Add New Starship
          </NavLink>
        </Button>
      </div>
      {ships.length ? (
        <Table
          tableName={tableName}
          data={ships}
          columns={columns}
          tableDescriptor="Starships"
          onDeleteData={handleDeleteShip}
          setDataItem={setSelectedShip}
        />
      ) : (
        <h1 className="col-10 mx-auto py-5 text-center">NO DATA ON PAGE</h1>
      )}
    </div>
  );
};

export default StarshipsPage;
