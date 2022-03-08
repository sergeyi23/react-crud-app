import { createContext, useState, useMemo, useCallback } from "react";

export const PlanetsContext = createContext();

const data = [
  { title: "Mercury", position: "1", id: "1" },
  { title: "Venus", position: "2", id: "2" },
  { title: "Earth", position: "3", id: "3" },
];

const columns = Object.keys(data[0]);

const tableName = "planets";

export const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState(data);

  const getInitialData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };
  const [selectedPlanet, setSelectedPlanet] = useState(getInitialData());

  const [newPlanet, setNewPlanet] = useState(getInitialData());

  const handleAddPlanet = useCallback(
    (newPlanet) => {
      const data = [...planets, newPlanet];
      setPlanets(data);
    },
    [planets]
  );

  const handleDeletePlanet = useCallback(
    (id) => {
      const data = planets.filter((planet) => planet.id !== id);
      setPlanets(data);
    },
    [planets]
  );

  const handleEditPlanetData = useCallback(
    ({ title, position, id }) => {
      setPlanets((planets) =>
        planets.map((planet) => {
          if (planet.id === id) {
            return { ...planet, title, position, id };
          }
          return planet;
        })
      );
    },
    [planets]
  );

  const value = useMemo(
    () => ({
      tableName,
      planets,
      getInitialData,
      columns,
      handleAddPlanet,
      handleDeletePlanet,
      handleEditPlanetData,
      newPlanet,
      setNewPlanet,
      selectedPlanet,
      setSelectedPlanet,
    }),
    [planets, newPlanet, selectedPlanet]
  );

  return (
    <PlanetsContext.Provider value={value}>{children}</PlanetsContext.Provider>
  );
};
