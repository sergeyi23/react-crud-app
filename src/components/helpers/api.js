export const getPeople = async (url) => {
  const res = await (await fetch(url)).json();
  return res.results.map(({ name, height, mass, gender }, i) => ({
    name,
    height,
    mass,
    gender,
    id: i,
  }));
};

export const getPlanets = async (url) => {
  const res = await (await fetch(url)).json();
  return res.results.map(({ name, orbital_period, population }, i) => ({
    name,
    orbital_period,
    population,
    id: i,
  }));
};

export const getStarships = async (url) => {
  const res = await (await fetch(url)).json();
  return res.results.map(({ name, starship_class, passengers }, i) => ({
    name,
    starship_class,
    passengers,
    id: i,
  }));
};

export const getDataFromLS = (key) => JSON.parse(localStorage.getItem(key));

export const saveInLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getInitialData = (columns) => {
  return (
    columns?.length &&
    columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {})
  );
};
