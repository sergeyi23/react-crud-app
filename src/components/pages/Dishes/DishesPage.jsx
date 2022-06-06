import React, { useEffect, useState } from 'react';
import { getDishes, deleteDishes } from "../../../services/dishesService";
import Page from "../../common/Page";

const DishesPage = ({ loginStatus, isAdmin }) => {
    const [data, setData] = useState([]);

    const columns = {
        'name': 'Название',
        'dishType': 'Тип блюда',
        'seasonality': 'Сезонность',
        'weight': 'Вес порции',
        'calories': 'Кол-во калорий',
        'cookingTime': 'Время приготовления',
        'ingredients': 'Ингредиенты',
        'equipments': 'Оборудование',
        'cost': 'Цена',
    };

    useEffect(() => {
        const getData = async () => {
            setData(await getDishes());
        }

        getData();
    }, []);

    return (
        <Page
            loginStatus={loginStatus}
            isAdmin={isAdmin}
            data={data}
            path="dishes"
            title="Блюда"
            columns={columns}
            setter={setData}
            remove={deleteDishes}
        />
    );
}

export default DishesPage;