import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {peopleReducer} from "./people-reducer";
import {planetsReducer} from "./planets-reducer";
import {starshipsReducer} from "./starships-reducer";

const rootReducer = combineReducers({
    people: peopleReducer,
    planets: planetsReducer,
    starships: starshipsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));