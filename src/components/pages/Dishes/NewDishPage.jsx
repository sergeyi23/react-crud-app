import React, { useState } from "react";
import DishPage from "./DishPage";
import { addDish } from "../../../services/dishesService";

const initialData = {
    name : '',
    dishType: 1,
    seasonality: 1,
    ingredients: [],
    equipments: [],
    weight: 100,
    calories: 500,
    cookingTime: 60
};

const NewDishPage = () => {
    const [data, setData] = useState(initialData);

    return (
        <DishPage
            title="Добавить новое блюдо"
            data={data}
            setData={setData}
            operation={addDish}
        />
    );
};

export default NewDishPage;