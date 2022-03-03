import React, { useState } from "react";
import Table from "./common/Table";
import Form from "./common/Form";

const data = [
  { title: "Neptun", weight: "280", id: "1" },
  { title: "SpaceX", weight: "155", id: "2" },
  { title: "Hercules", weight: "335", id: "3" },
];

const columns = Object.keys(data[0]);

const StarshipsPage = () => {
  const [ships, setShips] = useState(data);

  const handleAppShips = (shipData) => {
    const data = [...ships, shipData];
    setShips(data);
  };

  const handleDeleteShip = (id) => {
    const data = ships.filter((ship) => ship.id !== id);
    setShips(data);
  };

  const getInitialData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };

  const [newShip, setNewShip] = useState(getInitialData());

  return (
    <div>
      {ships.length ? (
        <Table
          data={ships}
          columns={columns}
          tableDescriptor="Planets"
          onDeleteData={handleDeleteShip}
        />
      ) : (
        <h1 className="col-10 mx-auto py-5 text-center">NO DATA ON PAGE</h1>
      )}
      <h2 className="col-10 mx-auto py-2 text-center">CREATE NEW DATA</h2>
      <Form
        initialData={getInitialData}
        columns={columns}
        onAddData={handleAppShips}
        newData={newShip}
        createNewData={setNewShip}
      />
    </div>
  );
};

export default StarshipsPage;
