import React, { useContext, useEffect } from "react";

import { PeopleContext } from "../contexts/PeopleContext";
import EditForm from "../common/EditForm";
import { saveInLS } from "./../helpers/api";

const EditPersonForm = () => {
  const {
    lsKey,
    people,
    tableName,
    selectedPerson,
    setSelectedPerson,
    columns,
    handleEditPersonData,
  } = useContext(PeopleContext);

  useEffect(() => {
    return saveInLS(lsKey, people);
  });

  return (
    <div>
      <h2 className="col-10 mx-auto py-2 text-center">EDIT PERSON DATA</h2>
      <EditForm
        tableName={tableName}
        itemData={selectedPerson}
        setItemData={setSelectedPerson}
        columns={columns}
        onEditForm={handleEditPersonData}
        buttonTitle="Update person data"
      />
    </div>
  );
};

export default EditPersonForm;
