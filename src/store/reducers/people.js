import {SET_PEOPLE, DELETE_PERSON, ADD_PERSON, UPDATE_PERSON} from '../actions/people'

const initialState = []

export const people = (state = initialState, action) => {
  switch (action.type) {
      case SET_PEOPLE:
        return [...action.people];
      case DELETE_PERSON:
        return state.filter(person => person.id !== action.id);
      case ADD_PERSON:
        return [...state, action.person];
      case UPDATE_PERSON:
        return state.map(person => {
          return (person.id === action.UpPerson.id) ? action.UpPerson : person;
      })
      default:
          return state;
  }
};

export default people;