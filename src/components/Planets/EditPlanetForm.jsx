import React, { useContext } from "react";

import { PlanetsContext } from "../contexts/PlanetsContext";
import EditForm from "../common/EditForm";

const EditPlanetForm = () => {
  const {
    tableName,
    selectedPlanet,
    setSelectedPlanet,
    columns,
    handleEditPlanetData,
  } = useContext(PlanetsContext);

  return (
    <div>
      <h2 className="col-10 mx-auto py-2 text-center">EDIT PLANET DATA</h2>
      <EditForm
        tableName={tableName}
        itemData={selectedPlanet}
        setItemData={setSelectedPlanet}
        columns={columns}
        onEditForm={handleEditPlanetData}
        buttonTitle="Update planet data"
      />
    </div>
  );
};

export default EditPlanetForm;
