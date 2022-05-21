const getSeasonalitiesURL = 'https://localhost:7166/api/additional/get-seasonalities';
const getUnitsURL = 'https://localhost:7166/api/additional/get-units';
const getDishTypesURL = 'https://localhost:7166/api/additional/get-dish-types';
const getIngredientsURL = 'https://localhost:7166/api/additional/get-ingredients';
const getEquipmentsURL = 'https://localhost:7166/api/additional/get-equipments';

export const GetSeasonalities = async() => {
    return await (await fetch(getSeasonalitiesURL)).json();
}

export const GetUnits = async() => {
    return await (await fetch(getUnitsURL)).json();
}

export const GetDishTypes = async() => {
    return await (await fetch(getDishTypesURL)).json();
}

export const GetIngredients = async() => {
    return await (await fetch(getIngredientsURL)).json();
}

export const GetEquipments = async() => {
    return await (await fetch(getEquipmentsURL)).json();
}

