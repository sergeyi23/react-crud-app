import {ADD_STARSHIP, DELETE_STARSHIP, SET_STARSHIPS, UPDATE_STARSHIP} from "../actions/starships";


const initialState = {
    allStarships: []
}

function starships(state = initialState, action) {
    switch(action.type) {
        case SET_STARSHIPS:
            return {...state,
                allStarships: action.starships
            };
        case ADD_STARSHIP: {
            return {
                ...state,
                allStarships: [...state.allStarships, action.data]
            };
        }
        case DELETE_STARSHIP: {
            let temp = [...state.allStarships]
            temp.splice(action.id, 1)
            return {
                ...state,
                allStarships: [...temp]
            };
        }
        case UPDATE_STARSHIP: {
            let temp = [...state.allStarships]
            temp[action.id] = action.data
            return {
                ...state,
                allStarships: [...temp]
            };
        }

        default:
            return state;
    }
}

export default starships;