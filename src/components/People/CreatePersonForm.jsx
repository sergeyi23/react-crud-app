import React, { useContext } from "react";

import { PeopleContext } from "../contexts/PeopleContext";
import AddForm from "../common/AddForm";

const CreatePersonForm = () => {
  const {
    tableName,
    initialData,
    columns,
    handleAddPerson,
    newPerson,
    setNewPerson,
  } = useContext(PeopleContext);

  return (
    <div>
      <h2 className="col-10 mx-auto py-2 text-center">CREATE NEW DATA</h2>
      <AddForm
        tableName={tableName}
        initialData={initialData}
        columns={columns}
        onAddData={handleAddPerson}
        newData={newPerson}
        createNewData={setNewPerson}
        buttonTitle="Add new person"
      />
    </div>
  );
};

export default CreatePersonForm;
