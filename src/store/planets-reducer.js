import {v1} from "uuid";
import {getPlanets} from "../services/swApiService";

const initState = [];

export const planetsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET-PLANETS': {
            return [...action.planets];
        }
        case 'ADD-PLANET': {
            return [...state, {...action.planet, id: v1()}]
        }
        case 'REMOVE-PLANET': {
            return state.filter(planet => planet.id !== action.id)
        }
        case 'CHANGE-PLANET': {
            return state.map(planet => {
                return (planet.id === action.changedPlanet.id) ? action.changedPlanet : planet;
            })
        }
        default:
            return state;
    }
};

export const setPlanets = (planets) => ({type: 'SET-PLANETS', planets,});
export const addPlanet = (planet) => ({type: 'ADD-PLANET', planet,});
export const removePlanet = (id) => ({type: 'REMOVE-PLANET', id,});
export const changePlanet = (changedPlanet) => ({type: 'CHANGE-PLANET', changedPlanet,});

export const fetchPlanets = () => (dispatch) => {
    let localPlanetsData = JSON.parse(localStorage.getItem('planets'))

    if (localPlanetsData) {
        if (localPlanetsData.length === 0) {
            getPlanets().then(data => {
                dispatch(setPlanets(data.map(planet => ({
                    ...planet,
                    id: v1()
                }))))
            })
        }
        dispatch(setPlanets(localPlanetsData))
    }
};