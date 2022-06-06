import React, { useEffect, useState } from 'react';
import { getIngredients, deleteIngredients } from "../../../services/ingredientsService";
import Page from "../../common/Page";

const IngredientsPage = ({loginStatus, isAdmin}) => {
    const [data, setData] = useState([]);

    const columns = {
        'name': 'Название',
        'amount': 'Количество',
        'unit': 'Единица измерения',
        'cost': 'Цена',
    };

    useEffect(() => {
        const getData = async () => {
            setData(await getIngredients());
        }

        getData();
    }, []);

    return (
        <Page
            data={data}
            isAdmin={isAdmin}
            path="ingredients"
            title="Ингредиенты"
            columns={columns}
            setter={setData}
            loginStatus={loginStatus}
            remove={deleteIngredients}
        />
    );
}

export default IngredientsPage;