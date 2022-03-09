import { createContext, useState, useMemo, useCallback } from "react";
import { saveInLS, getInitialData } from "./../helpers/api";
export const PeopleContext = createContext();

const tableName = "people";
const lsKey = "people";

export const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const columns = people?.length ? Object.keys(people[0]) : [];
  const initialData = getInitialData(columns);
  const [selectedPerson, setSelectedPerson] = useState(initialData);
  const [newPerson, setNewPerson] = useState(initialData);

  const handleAddPerson = useCallback(
    (newPerson) => {
      const data = [...people, newPerson];
      setPeople((current) => data);
      saveInLS(lsKey, data);
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
      setPeople((people) => newPeople);
    },
    [people]
  );

  const value = useMemo(
    () => ({
      lsKey,
      tableName,
      people,
      setPeople,
      initialData,
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
