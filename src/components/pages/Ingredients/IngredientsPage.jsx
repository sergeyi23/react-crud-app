import React, { useEffect, useState } from 'react';
import { getIngredients} from "../../../services/ingredientsService";
import Page from "../../common/Page";

const IngredientsPage = () => {
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
            path="ingredients"
            title="Ингредиенты"
            columns={columns}
            setter={setData}
        />
    );
}

export default IngredientsPage;