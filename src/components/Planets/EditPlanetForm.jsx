import React, { useContext, useEffect } from "react";

import { PlanetsContext } from "../contexts/PlanetsContext";
import EditForm from "../common/EditForm";
import { saveInLS } from "./../helpers/api";

const EditPlanetForm = () => {
  const {
    lsKey,
    planets,
    tableName,
    selectedPlanet,
    setSelectedPlanet,
    columns,
    handleEditPlanetData,
  } = useContext(PlanetsContext);

  useEffect(() => {
    return saveInLS(lsKey, planets);
  });

  return (
    <div>
      <h2 className="col-10 mx-auto py-2 text-center">EDIT PLANET DATA</h2>
      <EditForm
        // planets={planets}
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
