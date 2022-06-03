const getDessertsWithoutEquipmentsURL = 'https://localhost:7166/api/queries/get-desserts-without-equipments';
const getMeatDishesWithOvenURL = 'https://localhost:7166/api/queries/get-meat-dishes-with-oven';
const getNumberOfDishesBySeasonalityURL = 'https://localhost:7166/api/queries/get-number-of-dishes-by-seasonality';
const getTheMostCaloricDishesURL = 'https://localhost:7166/api/queries/get-the-most-caloric-dishes?dishtype=';
const getUsedIngredientsURL = 'https://localhost:7166/api/queries/get-used-ingredients';

export const getDessertsWithoutEquipment = async() => {
    return await (await fetch(getDessertsWithoutEquipmentsURL)).json();
}

export const getMeatDishesWithOven = async() => {
    return await (await fetch(getMeatDishesWithOvenURL)).json();
}

export const getNumberOfDishesBySeasonality = async() => {
    return await (await fetch(getNumberOfDishesBySeasonalityURL)).json();
}

export const getTheMostCaloricDishes = async(dishType) => {
    return await (await fetch(getTheMostCaloricDishesURL + dishType)).json();
}

export const getUsedIngredients = async() => {
    return await (await fetch(getUsedIngredientsURL)).json();
}