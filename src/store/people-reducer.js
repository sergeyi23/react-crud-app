import {v1} from "uuid";
import {getPeople} from "../services/swApiService";

const initState = [];

export const peopleReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET-PEOPLE': {
            return [...action.people];
        }
        case 'ADD-PERSON': {
            return [...state, {...action.person, id: v1()}]
        }
        case 'REMOVE-PERSON': {
            return state.filter(person => person.id !== action.id)
        }
        case 'CHANGE-PERSON': {
            return state.map(person => {
                return (person.id === action.changedPerson.id) ? action.changedPerson : person;
            })
        }
        default:
            return state;
    }
};

export const setPeople = (people) => ({type: 'SET-PEOPLE', people,});
export const addPerson = (person) => ({type: 'ADD-PERSON', person,});
export const removePerson = (id) => ({type: 'REMOVE-PERSON', id,});
export const changePerson = (changedPerson) => ({type: 'CHANGE-PERSON', changedPerson,});

export const fetchTasks = () => (dispatch) => {
    let localPeopleData = JSON.parse(localStorage.getItem('people'))

    if (localPeopleData) {
        if (localPeopleData.length === 0){
            getPeople().then(data => {
                dispatch(setPeople(data.map(person => ({
                    ...person,
                    id: v1()
                }))))})
        }
        dispatch(setPeople(localPeopleData))
    }
};