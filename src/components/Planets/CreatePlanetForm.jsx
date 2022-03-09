import React, { useContext } from "react";

import { PlanetsContext } from "../contexts/PlanetsContext";
import AddForm from "../common/AddForm";

const CreatePlanetForm = () => {
  const {
    tableName,
    initialData,
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
        initialData={initialData}
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
