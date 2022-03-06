import {SET_PEOPLE, DELETE_PERSON, CHANGE_BELOVED_STATUS, ADD_PERSON, UPDATE_PERSON} from '../actions/people'
import { nanoid } from 'nanoid';

const initialState = {
  allPeople: []
}

function people(state = initialState, action) {
  switch(action.type) {
    case SET_PEOPLE:
      return {...state,
        allPeople: action.people
      };

    case DELETE_PERSON:
      return {...state,
        allPeople: state.allPeople.filter(person => person.id !== action.id)
      };

    case ADD_PERSON:
      return {...state,
        allPeople: [...state.allPeople, {...action.personData, beloved: false, id: nanoid()}]
      };

    case UPDATE_PERSON:
      return {...state,
        allPeople: state.allPeople.map(person =>  
          person.id === action.personData.id ? action.personData : person
        )
      };

    case CHANGE_BELOVED_STATUS:
      return {...state,
        allPeople: state.allPeople.map((person) => {
          return person.id === action.id ? {...person, beloved: !person.beloved} : person
      })
      };

    default:
      return state;
  }
}

export default people; 