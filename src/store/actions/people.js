export const SET_PEOPLE = 'SET_PEOPLE'
export const ADD_PERSON = 'ADD_PERSON'
export const DELETE_PERSON = 'DELETE_PERSON'
export const UPDATE_PERSON = 'UPDATE_PERSON'
export const CHANGE_BELOVED_STATUS = 'CHANGE_BELOVED_STATUS'

export function setPeople(people) {
    return { type: SET_PEOPLE, people };
}

export function addPerson(data) {
    return { type: ADD_PERSON, data };
}

export function deletePerson(id) {
    return { type: DELETE_PERSON, id };
}

export function updatePerson(id, data) {
    return { type: UPDATE_PERSON, id, data };
}

export function changeBelovedStatus(id) {
    return { type: CHANGE_BELOVED_STATUS, id};
}