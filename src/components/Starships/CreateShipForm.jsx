import React, { useContext } from "react";

import { StarshipsContext } from "../contexts/StarshipsContext";
import AddForm from "../common/AddForm";

const CreateShipForm = () => {
  const {
    tableName,
    getInitialData,
    columns,
    handleAddShip,
    newShip,
    setNewShip,
  } = useContext(StarshipsContext);

  return (
    <div>
      <h2 className="col-10 mx-auto py-2 text-center">CREATE NEW DATA</h2>
      <AddForm
        tableName={tableName}
        initialData={getInitialData}
        columns={columns}
        onAddData={handleAddShip}
        newData={newShip}
        createNewData={setNewShip}
        buttonTitle="Add new Starship"
      />
    </div>
  );
};

export default CreateShipForm;
