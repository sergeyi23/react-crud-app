export const createRequest = async (url) => {
  const res = await (await fetch(url)).json();
  return res.results.map(({ name, height, mass, gender }, i) => ({
    name,
    height,
    mass,
    gender,
    id: i,
  }));
};

export const getDataFromLS = (key) => JSON.parse(localStorage.getItem(key));

export const saveInLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
