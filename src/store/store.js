import {applyMiddleware, combineReducers, createStore} from "redux";
import {peopleReducer} from "./people-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    people: peopleReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));