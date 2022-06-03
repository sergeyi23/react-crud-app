import React, { useEffect, useState } from "react";
import * as queries from "../../services/queriesService";
import {GetDishTypes} from "../../services/additionalService";
import Select from "../common/Select";
import Button from "../common/Button";

const QueriesPage = () => {
    const [dessertsWithoutEquipment, setDessertsWithoutEquipment] = useState([]);
    const [meatDishes, setMeatDishes] = useState([]);
    const [dishesBySeasonalities, setDishesBySeasonalities] = useState([]);
    const [theMostCaloricDishes, setTheMostCaloricDishes] = useState([]);
    const [usedIngredients, setUsedIngredients] = useState([]);
    const [dishTypes, setDishTypes] = useState([]);
    const [selectedDishType, setSelectedDishType] = useState(1);

    useEffect(() => {
        const getData = async () => {
            const desserts = await queries.getDessertsWithoutEquipment();
            setDessertsWithoutEquipment(desserts.result);

            const meat = await queries.getMeatDishesWithOven();
            setMeatDishes(meat.result);

            const dishes = await queries.getNumberOfDishesBySeasonality();
            setDishesBySeasonalities(dishes.result);

            const ingredients = await queries.getUsedIngredients();
            setUsedIngredients(ingredients.result);

            setDishTypes(await GetDishTypes());
        }

        getData();
    }, []);

    const handleChangeDishType = () => {
        const e = document.getElementById("dishTypes");
        const value = e.options[e.selectedIndex].value;
        setSelectedDishType(Number(value));
    };

    const handleCLick = async() => {
        const data = await queries.getTheMostCaloricDishes(selectedDishType);
        setTheMostCaloricDishes(data.result);
    }

    return (
        <div>
            <h3>Запросы</h3>

            <h6>Список десертов, не требующих применения оборудования:</h6>
            <ul className="mb-5">
                {dessertsWithoutEquipment.map(item => (
                    <li>{item}</li>
                ))}
            </ul>

            <h6>Список мясных блюд, для приготовления которых необходима духовка:</h6>
            <ul className="mb-5">
                {meatDishes.map(item => (
                    <li>{item}</li>
                ))}
            </ul>

            <h6>Группировка блюд по сезонности:</h6>
            <table className="table mb-5 w-50">
                <thead>
                    <tr>
                        <th scope="col">Сезонность</th>
                        <th scope="col">Количество блюд</th>
                    </tr>
                </thead>

                <tbody>
                {dishesBySeasonalities.map(item => (
                    <tr key={item.seasonality}>
                        <td>{item.seasonality}</td>
                        <td>{item.number}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h6 className="mt-5">3 самых калорийных блюда определённого типа:</h6>
            <label>Тип блюда</label>
            <div className="row">
                <div className="col-4">
                <Select
                    id="dishTypes"
                    name="dishTypes"
                    data={dishTypes}
                    selectedValues={1}
                    onChange={handleChangeDishType}
                />
                </div>

                <Button
                    label="Применить"
                    onClick={handleCLick}
                    classes="btn btn-outline-success col-2"
                />
            </div>

            {theMostCaloricDishes.length > 0 ?
            (
                <ol>
                    {theMostCaloricDishes.map(item => (
                        <li>{item}</li>
                    ))}
                </ol>
            )
            : <p>Нет данных</p>
            }

            <h6 className="mt-5">10 самых используемых ингредиентов:</h6>
            <table className="table mb-4 w-50">
                <thead>
                <tr>
                    <th scope="col">Ингредиент</th>
                    <th scope="col">Количество использований</th>
                </tr>
                </thead>

                <tbody>
                {usedIngredients.map(item => (
                    <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>{item.number}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default QueriesPage;