import React, { useContext } from "react";

import { StarshipsContext } from "../contexts/StarshipsContext";
import EditForm from "../common/EditForm";

const EditShipForm = () => {
  const {
    tableName,
    selectedShip,
    setSelectedShip,
    columns,
    handleEditShipData,
  } = useContext(StarshipsContext);

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
