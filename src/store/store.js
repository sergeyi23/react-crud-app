import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {peopleReducer} from "./people-reducer";
import {planetsReducer} from "./planets-reducer";

const rootReducer = combineReducers({
    people: peopleReducer,
    planets: planetsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));