import React, { useContext } from "react";

import { PeopleContext } from "../contexts/PeopleContext";
import EditForm from "../common/EditForm";

const EditPersonForm = () => {
  const {
    selectedPerson,
    setSelectedPerson,
    columns,
    handleEditPersonData,
  } = useContext(PeopleContext);

  return (
    <div>
      <h2 className="col-10 mx-auto py-2 text-center">EDIT PERSON DATA</h2>
      <EditForm
        personData={selectedPerson}
        setPersonData={setSelectedPerson}
        columns={columns}
        onEditForm={handleEditPersonData}
        buttonTitle="Update person data"
      />
    </div>
  );
};

export default EditPersonForm;
