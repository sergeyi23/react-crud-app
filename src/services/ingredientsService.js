const getIngredientsURL = 'https://localhost:7166/api/ingredients/get';
const getIngredientByIdURL = 'https://localhost:7166/api/ingredients/get-by-id?id=';
const updateIngredientURL = 'https://localhost:7166/api/ingredients/update';
const addIngredientURL = 'https://localhost:7166/api/ingredients/add';
const deleteURL = 'https://localhost:7166/api/ingredients/delete';

export const getIngredients = async() => {
    return await (await fetch(getIngredientsURL)).json();
}

export const getIngredientById = async(id) => {
    const data = await (await fetch(getIngredientByIdURL + id)).json();

    return {
        name: data.name,
        amount: data.amount,
        unit: data.unit,
        cost: data.cost,
    };
}

export const updateIngredient = async(data) => {
    return await fetch(updateIngredientURL,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(data)
        });
}

export const addIngredient = async(data) => {
    return await fetch(addIngredientURL,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        });
}

export const deleteIngredients = async(data) => {
    return await fetch(deleteURL,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify(data)
        });
}