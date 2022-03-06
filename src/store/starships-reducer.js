import {v1} from "uuid";
import {getStarships} from "../services/swApiService";

const initState = [];

export const starshipsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET-STARSHIPS': {
            return [...action.starships];
        }
        case 'ADD-STARSHIP': {
            return [...state, {...action.starship, id: v1()}]
        }
        case 'REMOVE-STARSHIP': {
            return state.filter(starship => starship.id !== action.id)
        }
        case 'CHANGE-STARSHIP': {
            return state.map(starship => {
                return (starship.id === action.changedStarship.id) ? action.changedStarship : starship;
            })
        }
        default:
            return state;
    }
};

export const setStarships = (starships) => ({type: 'SET-STARSHIPS', starships,});
export const addStarship = (starship) => ({type: 'ADD-STARSHIP', starship,});
export const removeStarship = (id) => ({type: 'REMOVE-STARSHIP', id,});
export const changeStarship = (changedStarship) => ({
    type: 'CHANGE-STARSHIP',
    changedStarship,
});

export const fetchStarships = () => (dispatch) => {
    let localStarshipsData = JSON.parse(localStorage.getItem('starships'))

    if (localStarshipsData) {
        if (localStarshipsData.length === 0) {
            getStarships().then(data => {
                dispatch(setStarships(data.map(starship => ({
                    ...starship,
                    id: v1()
                }))))
            })
        }
        dispatch(setStarships(localStarshipsData))
    }
};