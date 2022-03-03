import React, { useState } from "react";
import Table from "./common/Table";
import Form from "./common/Form";

const data = [
  { firstName: "Mark", lastName: "Otto", handle: "@motto", id: "1" },
  { firstName: "Carl", lastName: "Reno", handle: "@ceno", id: "2" },
  { firstName: "Steve", lastName: "Smith", handle: "@ssteve", id: "3" },
];

const columns = Object.keys(data[0]);

const PeoplePage = () => {
  const [people, setPeople] = useState(data);

  const getInitialData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };

  const [newPerson, setNewPerson] = useState(getInitialData());

  const handleAddPerson = (newPerson) => {
    const data = [...people, newPerson];
    setPeople(data);
  };

  const handleDeletePerson = (id) => {
    const data = people.filter((person) => person.id !== id);
    setPeople(data);
  };

  return (
    <div>
      {people.length ? (
        <Table
          data={people}
          columns={columns}
          tableDescriptor="People"
          onDeleteData={handleDeletePerson}
        />
      ) : (
        <h1 className="col-10 mx-auto py-5 text-center">NO DATA ON PAGE</h1>
      )}
      <h2 className="col-10 mx-auto py-2 text-center">CREATE NEW DATA</h2>
      <Form
        initialData={getInitialData}
        columns={columns}
        onAddData={handleAddPerson}
        newData={newPerson}
        createNewData={setNewPerson}
      />
    </div>
  );
};

export default PeoplePage;
