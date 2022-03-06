import {SET_PLANETS, DELETE_PLANET, ADD_PLANET, UPDATE_PLANET} from '../actions/planets'

const initialState = []

export const planets = (state = initialState, action) => {
  switch (action.type) {
      case SET_PLANETS:
        return [...action.planets];
      case DELETE_PLANET:
        return state.filter(planet => planet.id !== action.id);
      case ADD_PLANET:
        return [...state, action.planet];
      case UPDATE_PLANET:
        return state.map(planet => {
          return (planet.id === action.UpPlanet.id) ? action.UpPlanet : planet
      })
      default:
          return state;
  }
};

export default planets;