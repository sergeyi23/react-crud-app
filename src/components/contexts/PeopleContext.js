import { createContext, useState, useMemo, useCallback } from "react";

export const PeopleContext = createContext();

const data = [
  { firstName: "Mark", lastName: "Otto", handle: "@motto", id: "1" },
  { firstName: "Carl", lastName: "Reno", handle: "@ceno", id: "2" },
  { firstName: "Steve", lastName: "Smith", handle: "@ssteve", id: "3" },
];

const columns = Object.keys(data[0]);

const tableName = "people";

export const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState(data);

  const getInitialData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };
  const [selectedPerson, setSelectedPerson] = useState(getInitialData());

  const [newPerson, setNewPerson] = useState(getInitialData());

  const handleAddPerson = useCallback((newPerson) => {
    const data = [...people, newPerson];
    setPeople(data);
  }, []);

  const handleDeletePerson = useCallback((id) => {
    const data = people.filter((person) => person.id !== id);
    setPeople(data);
  }, []);

  const handleEditPersonData = useCallback(
    ({ firstName, lastName, handle, id }) => {
      setPeople((people) =>
        people.map((person) => {
          if (person.id === id) {
            return { ...person, firstName, lastName, handle, id };
          }
          return person;
        })
      );
    },
    []
  );

  const value = useMemo(
    () => ({
      tableName,
      people,
      getInitialData,
      columns,
      handleAddPerson,
      handleDeletePerson,
      handleEditPersonData,
      newPerson,
      setNewPerson,
      selectedPerson,
      setSelectedPerson,
    }),
    [
      people,
      setPeople,
      newPerson,
      setNewPerson,
      selectedPerson,
      setSelectedPerson,
    ]
  );

  return (
    <PeopleContext.Provider value={value}>{children}</PeopleContext.Provider>
  );
};
