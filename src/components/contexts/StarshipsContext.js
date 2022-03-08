import { createContext, useState, useMemo, useCallback } from "react";

export const StarshipsContext = createContext();

const data = [
  { title: "Neptun", weight: "280", id: "1" },
  { title: "SpaceX", weight: "155", id: "2" },
  { title: "Hercules", weight: "335", id: "3" },
];

const columns = Object.keys(data[0]);

const tableName = "starships";

export const ShipsProvider = ({ children }) => {
  const [ships, setShips] = useState(data);

  const getInitialData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };
  const [selectedShip, setSelectedShip] = useState(getInitialData());

  const [newShip, setNewShip] = useState(getInitialData());

  const handleAddShip = useCallback(
    (newShip) => {
      const data = [...ships, newShip];
      setShips(data);
    },
    [ships]
  );

  const handleDeleteShip = useCallback(
    (id) => {
      const data = ships.filter((ship) => ship.id !== id);
      setShips(data);
    },
    [ships]
  );

  const handleEditShipData = useCallback(
    ({ title, weight, id }) => {
      setShips((ships) =>
        ships.map((ship) => {
          if (ship.id === id) {
            return { ...ship, title, weight, id };
          }
          return ship;
        })
      );
    },
    [ships]
  );

  const value = useMemo(
    () => ({
      tableName,
      ships,
      getInitialData,
      columns,
      handleAddShip,
      handleDeleteShip,
      handleEditShipData,
      newShip,
      setNewShip,
      selectedShip,
      setSelectedShip,
    }),
    [ships, newShip, selectedShip]
  );

  return (
    <StarshipsContext.Provider value={value}>
      {children}
    </StarshipsContext.Provider>
  );
};
