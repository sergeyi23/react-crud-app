import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {getIngredientById, updateIngredient } from "../../../services/ingredientsService";
import IngredientPage from "./IngredientPage";


const UpdateIngredientPage = () => {

    const [data, setData] = useState({});

    const params = useParams();
    const id = params.id;

    useEffect(() => {
        const getData = async () => {
            setData(await getIngredientById(id));
        }

        getData();
    }, [id]);

    return (
        <IngredientPage
            title="Редактировать данные ингредиента"
            id={id}
            data={data}
            setData={setData}
            operation={updateIngredient}
        />
    );
};

export default UpdateIngredientPage;