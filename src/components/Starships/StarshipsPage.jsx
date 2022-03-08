import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

import Table from "../common/Table";
import { StarshipsContext } from "../contexts/StarshipsContext";

const StarshipsPage = () => {
  const {
    tableName,
    ships,
    columns,
    handleDeleteShip,
    setSelectedShip,
  } = useContext(StarshipsContext);

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
