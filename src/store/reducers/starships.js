import {SET_STARSHIPS, DELETE_STARSHIP, ADD_STARSHIP, UPDATE_STARSHIP} from '../actions/starships'

const initialState = []

export const starships = (state = initialState, action) => {
  switch (action.type) {
      case SET_STARSHIPS:
        return [...action.starships];
      case DELETE_STARSHIP:
        return state.filter(starship => starship.id !== action.id);
      case ADD_STARSHIP:
        return [...state, action.starship];
      case UPDATE_STARSHIP:
        return state.map(starship => {
          return (starship.id === action.UpStarship.id) ? action.UpStarship : starship
      })
      default:
          return state;
  }
};

export default starships;