import React, { useState } from "react";
import IngredientPage from "./IngredientPage";
import { addIngredient} from "../../../services/ingredientsService";

const initialData = {
    name : '',
    unit: 1,
    amount: 1,
    cost: 100
};

const NewIngredientPage = () => {
    const [data, setData] = useState(initialData);

    return (
        <IngredientPage
            title="Добавить новый ингредиент"
            data={data}
            setData={setData}
            operation={addIngredient}
        />
    );
};

export default NewIngredientPage;