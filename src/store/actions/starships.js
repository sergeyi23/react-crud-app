export const SET_STARSHIPS = 'SET_STARSHIPS'
export const ADD_STARSHIP = 'ADD_STARSHIP'
export const DELETE_STARSHIP = 'DELETE_STARSHIP'
export const UPDATE_STARSHIP = 'UPDATE_STARSHIP'

export function setStarships(starships) {
    return { type: SET_STARSHIPS, starships };
}

export function addStarship(data) {
    return { type: ADD_STARSHIP, data };
}

export function deleteStarship(id) {
    return { type: DELETE_STARSHIP, id };
}

export function updateStarship(id, data) {
    return { type: UPDATE_STARSHIP, id, data };
}
