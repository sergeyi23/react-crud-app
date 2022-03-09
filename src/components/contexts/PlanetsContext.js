import { createContext, useState, useMemo, useCallback } from "react";
import { saveInLS, getInitialData } from "./../helpers/api";
export const PlanetsContext = createContext();

const tableName = "planets";
const lsKey = "planets";

export const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const columns = planets && planets.length ? Object.keys(planets[0]) : [];
  const initialData = getInitialData(columns);
  const [selectedPlanet, setSelectedPlanet] = useState(initialData);
  const [newPlanet, setNewPlanet] = useState(initialData);

  const handleAddPlanet = useCallback(
    (newPlanet) => {
      const data = [...planets, newPlanet];
      setPlanets((current) => data);
      saveInLS(lsKey, data);
    },
    [planets]
  );

  const handleDeletePlanet = useCallback(
    (id) => {
      const data = planets.filter((planet) => planet.id !== id);
      setPlanets(data);
      saveInLS(lsKey, data);
    },
    [planets]
  );

  const handleEditPlanetData = useCallback(
    ({ name, orbital_period, population, id }) => {
      setPlanets((planets) =>
        planets.map((planet) => {
          if (planet.id === id) {
            return { ...planet, name, orbital_period, population };
          }
          return planet;
        })
      );
    },
    [planets]
  );

  const value = useMemo(
    () => ({
      lsKey,
      tableName,
      planets,
      setPlanets,
      initialData,
      columns,
      handleAddPlanet,
      handleDeletePlanet,
      handleEditPlanetData,
      newPlanet,
      setNewPlanet,
      selectedPlanet,
      setSelectedPlanet,
    }),
    [planets, newPlanet, columns, selectedPlanet]
  );

  return (
    <PlanetsContext.Provider value={value}>{children}</PlanetsContext.Provider>
  );
};
