export const SET_PLANETS = 'SET_PLANETS'
export const ADD_PLANET = 'ADD_PLANET'
export const DELETE_PLANET = 'DELETE_PLANET'
export const UPDATE_PLANET = 'UPDATE_PLANET'

export function setPlanets(planets) {
    return { type: SET_PLANETS, planets };
}

export function addPlanet(data) {
    return { type: ADD_PLANET, data };
}


export function deletePlanet(id) {
    return { type: DELETE_PLANET, id };
}

export function updatePlanet(id, data) {
    return { type: UPDATE_PLANET, id, data };
}
