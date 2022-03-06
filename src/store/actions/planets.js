export const SET_PLANETS = 'SET_PLANETS'
export const DELETE_PLANET = 'DELETE_PLANET'
export const ADD_PLANET = 'ADD_PLANET'
export const UPDATE_PLANET = 'UPDATE_PLANET'

export function setPlanets(planets) {
  return { type: SET_PLANETS, planets };
}

export function deletePlanet(id) {
  return { type: DELETE_PLANET, id };
}

export function addPlanet(planet) {
  return { type: ADD_PLANET, planet};
}

export function updatePlanet(UpPlanet) {
  return { type: UPDATE_PLANET, UpPlanet};
}
