import React, {useEffect, useState} from "react";
import DishPage from "./DishPage";
import { useParams } from "react-router-dom";
import { getDishById } from "../../../services/dishesService";
import { updateDish } from "../../../services/dishesService";


const UpdateDishPage = () => {
    const [data, setData] = useState({});

    const params = useParams();
    const id = params.id;

    useEffect(() => {
        const getData = async () => {
            setData(await getDishById(id));
        }

        getData();
    }, [id]);

    return (
        <DishPage
            title="Редактировать данные блюда"
            id={id}
            data={data}
            setData={setData}
            operation={updateDish}
        />
    );
};

export default UpdateDishPage;