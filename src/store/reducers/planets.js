import {ADD_PLANET, DELETE_PLANET, SET_PLANETS, UPDATE_PLANET} from "../actions/planets";
import {ADD_PERSON} from "../actions/people";

const initialState = {
    allPlanets: []
}

function planets(state = initialState, action) {
    switch(action.type) {
        case SET_PLANETS:
            return {...state,
                allPlanets: action.planets
            };
        case ADD_PLANET: {
            return {
                ...state,
                allPlanets: [...state.allPlanets, action.data]
            };
        }
        case DELETE_PLANET: {
            let temp = [...state.allPlanets]
            temp.splice(action.id, 1)
            return {
                ...state,
                allPlanets: [...temp]
            };
        }
        case UPDATE_PLANET: {
            let temp = [...state.allPlanets]
            temp[action.id] = action.data
            return {
                ...state,
                allPlanets: [...temp]
            };
        }

        default:
            return state;
    }
}

export default planets;