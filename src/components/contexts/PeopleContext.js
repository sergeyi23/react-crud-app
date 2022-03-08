import { createContext, useState, useMemo, useCallback } from "react";
import { saveInLS } from "./../helpers/api";
export const PeopleContext = createContext();

const tableName = "people";
const lsKey = "people";

export const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState([]);

  const columns = people?.length ? Object.keys(people[0]) : [];

  const getInitialData = () => {
    return (
      columns.length &&
      columns.reduce((cols, columnName) => {
        cols[columnName] = "";
        return cols;
      }, {})
    );
  };
  const [selectedPerson, setSelectedPerson] = useState(getInitialData());

  const [newPerson, setNewPerson] = useState(getInitialData());

  const handleAddPerson = useCallback(
    (newPerson) => {
      const data = [...people, newPerson];
      setPeople((current) => data);
      saveInLS(lsKey, [...people, newPerson]);
    },
    [people]
  );

  const handleDeletePerson = useCallback(
    (id) => {
      const data = people.filter((person) => person.id !== id);
      setPeople(data);
      saveInLS(lsKey, data);
    },
    [people]
  );

  const handleEditPersonData = useCallback(
    ({ name, height, mass, gender, id }) => {
      //const { name, height, mass, gender, id } = selectedPerson;
      const newPeople = people.map((person) => {
        if (person.id === id) {
          return { ...person, name, height, mass, gender, id };
        }
        return person;
      });
      setPeople((current) => newPeople);
      saveInLS(lsKey, people);
    },
    [people]
  );

  const value = useMemo(
    () => ({
      tableName,
      people,
      setPeople,
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
    [people, newPerson, columns]
  );

  return (
    <PeopleContext.Provider value={value}>{children}</PeopleContext.Provider>
  );
};
