import {useDispatch} from "react-redux";
import {addPerson, deletePerson, setPeople, updatePerson} from "../store/actions/people";
import {addPlanet, deletePlanet, setPlanets, updatePlanet} from "../store/actions/planets";
import {addStarship, deleteStarship, setStarships, updateStarship} from "../store/actions/starships";
import {getAllPeople} from "../store/selectors/people";
import {getPlanets} from "./planetsService";
import {getStarships} from "./starshipsService";
import {getAllPlanets} from "../store/selectors/planets";
import {getAllStarships} from "../store/selectors/starships";

const stores = {
    "people": {
        getAll: getAllPeople,
        set: setPeople,
        add: addPerson,
        update: updatePerson,
        delete: deletePerson
    },
    "planets": {
        getAll: getAllPlanets,
        set: setPlanets,
        add: addPlanet,
        update: updatePlanet,
        delete: deletePlanet
    },
    "starships": {
        getAll: getAllStarships,
        set: setStarships,
        add: addStarship,
        update: updateStarship,
        delete: deleteStarship
    }
}

export default stores