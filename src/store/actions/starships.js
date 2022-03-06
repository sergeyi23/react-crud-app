export const SET_STARSHIPS = 'SET_STARSHIPS'
export const DELETE_STARSHIP = 'DELETE_STARSHIP'
export const ADD_STARSHIP = 'ADD_STARSHIP'
export const UPDATE_STARSHIP = 'UPDATE_STARSHIP'

export function setStarships(starships) {
  return { type: SET_STARSHIPS, starships };
}

export function deleteStarship(id) {
  return { type: DELETE_STARSHIP, id };
}

export function addStarship(starship) {
  return { type: ADD_STARSHIP, starship};
}

export function updateStarship(UpStarship) {
  return { type: UPDATE_STARSHIP, UpStarship};
}
