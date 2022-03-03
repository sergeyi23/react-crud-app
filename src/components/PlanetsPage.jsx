import React, { useState } from "react";
import Table from "./common/Table";
import Form from "./common/Form";

const data = [
  { title: "Mercury", position: "1", id: "1" },
  { title: "Venus", position: "2", id: "2" },
  { title: "Earth", position: "3", id: "3" },
];

const columns = Object.keys(data[0]);

const PlanetsPage = () => {
  const [planets, setPlanets] = useState(data);

  const handleAppPlanets = (planetData) => {
    const data = [...planets, planetData];
    setPlanets(data);
  };

  const handleDeletePlanet = (id) => {
    const data = planets.filter((planet) => planet.id !== id);
    setPlanets(data);
  };

  const getInitialData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };

  const [newPlanet, setNewPlanet] = useState(getInitialData());

  return (
    <div>
      {planets.length ? (
        <Table
          data={planets}
          columns={columns}
          tableDescriptor="Planets"
          onDeleteData={handleDeletePlanet}
        />
      ) : (
        <h1 className="col-10 mx-auto py-5 text-center">NO DATA ON PAGE</h1>
      )}
      <h2 className="col-10 mx-auto py-2 text-center">CREATE NEW DATA</h2>
      <Form
        initialData={getInitialData}
        columns={columns}
        onAddData={handleAppPlanets}
        newData={newPlanet}
        createNewData={setNewPlanet}
      />
    </div>
  );
};

export default PlanetsPage;
