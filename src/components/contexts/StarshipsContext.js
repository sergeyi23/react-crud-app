import { createContext, useState, useMemo, useCallback } from "react";
import { saveInLS, getInitialData } from "./../helpers/api";

export const StarshipsContext = createContext();

const tableName = "starships";
const lsKey = "starships";

export const ShipsProvider = ({ children }) => {
  const [ships, setShips] = useState([]);
  const columns = ships?.length ? Object.keys(ships[0]) : [];
  const initialData = getInitialData(columns);
  const [selectedShip, setSelectedShip] = useState(getInitialData());
  const [newShip, setNewShip] = useState(initialData);

  const handleAddShip = useCallback(
    (newShip) => {
      const data = [...ships, newShip];
      setShips((current) => data);
      saveInLS(lsKey, data);
    },
    [ships]
  );

  const handleDeleteShip = useCallback(
    (id) => {
      const data = ships.filter((ship) => ship.id !== id);
      setShips(data);
      saveInLS(lsKey, data);
    },
    [ships]
  );

  const handleEditShipData = useCallback(
    ({ name, starship_class, passengers, id }) => {
      setShips((ships) =>
        ships.map((ship) => {
          if (ship.id === id) {
            return { ...ship, name, starship_class, passengers, id };
          }
          return ship;
        })
      );
    },
    [ships]
  );

  const value = useMemo(
    () => ({
      lsKey,
      tableName,
      ships,
      setShips,
      initialData,
      columns,
      handleAddShip,
      handleDeleteShip,
      handleEditShipData,
      newShip,
      setNewShip,
      selectedShip,
      setSelectedShip,
    }),
    [ships, newShip, columns, selectedShip]
  );

  return (
    <StarshipsContext.Provider value={value}>
      {children}
    </StarshipsContext.Provider>
  );
};
