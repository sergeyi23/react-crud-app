import React, { useContext, useEffect } from "react";

import { StarshipsContext } from "../contexts/StarshipsContext";
import EditForm from "../common/EditForm";
import { saveInLS } from "./../helpers/api";

const EditShipForm = () => {
  const {
    lsKey,
    ships,
    tableName,
    selectedShip,
    setSelectedShip,
    columns,
    handleEditShipData,
  } = useContext(StarshipsContext);

  useEffect(() => {
    return saveInLS(lsKey, ships);
  });

  return (
    <div>
      <h2 className="col-10 mx-auto py-2 text-center">EDIT PLANET DATA</h2>
      <EditForm
        tableName={tableName}
        itemData={selectedShip}
        setItemData={setSelectedShip}
        columns={columns}
        onEditForm={handleEditShipData}
        buttonTitle="Update Starship data"
      />
    </div>
  );
};

export default EditShipForm;
