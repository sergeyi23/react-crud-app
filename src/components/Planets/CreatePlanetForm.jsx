import React, { useContext, useState } from "react";

import { PlanetsContext } from "../contexts/PlanetsContext";
import AddForm from "../common/AddForm";

const CreatePlanetForm = () => {
  const {
    tableName,
    getInitialData,
    columns,
    handleAddPlanet,
    newPlanet,
    setNewPlanet,
  } = useContext(PlanetsContext);

  return (
    <div>
      <h2 className="col-10 mx-auto py-2 text-center">CREATE NEW DATA</h2>
      <AddForm
        tableName={tableName}
        initialData={getInitialData}
        columns={columns}
        onAddData={handleAddPlanet}
        newData={newPlanet}
        createNewData={setNewPlanet}
        buttonTitle="Add new planet"
      />
    </div>
  );
};

export default CreatePlanetForm;
