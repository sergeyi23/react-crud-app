import {SET_PEOPLE, DELETE_PERSON, CHANGE_BELOVED_STATUS, UPDATE_PERSON, ADD_PERSON} from '../actions/people'

const initialState = {
    allPeople: []
}

function people(state = initialState, action) {
    switch(action.type) {
        case SET_PEOPLE:
            return {...state,
                allPeople: action.people
            };
        case ADD_PERSON: {
            return {
                ...state,
                allPeople: [...state.allPeople, action.data]
            };
        }
        case DELETE_PERSON: {
            let temp = [...state.allPeople]
            temp.splice(action.id, 1)
            return {
                ...state,
                allPeople: [...temp]
            };
        }
        case UPDATE_PERSON: {
            let temp = [...state.allPeople]
            temp[action.id] = action.data
            return {
                ...state,
                allPeople: [...temp]
            };
        }
        /*case CHANGE_BELOVED_STATUS:
            return {...state,
                allPeople: state.allPeople.map((person) => {
                    return person.id === action.id ? {...person, beloved: !person.beloved} : person
                })
            };*/

        default:
            return state;
    }
}

export default people;