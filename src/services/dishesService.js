const getDishesURL = 'https://localhost:7166/api/dishes/get';
const getDishByIdURL = 'https://localhost:7166/api/dishes/get-by-id?id=';
const updateDishURL = 'https://localhost:7166/api/dishes/update';
const addDishURL = 'https://localhost:7166/api/dishes/add';

export const getDishes = async() => {
    return await (await fetch(getDishesURL)).json();
}

export const getDishById = async(id) => {
    const data = await (await fetch(getDishByIdURL + id)).json();

    return {
        name: data.name,
        dishType: data.dishType,
        seasonality: data.seasonality,
        ingredients: data.ingredients,
        equipments: data.equipments,
        weight: data.weight,
        calories: data.calories,
        cookingTime: data.cookingTime,
    };
}

export const updateDish = async(data) => {
    return await fetch(updateDishURL,
{
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(data)
    });
}

export const addDish = async(data) => {
    return await fetch(addDishURL,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        });
}