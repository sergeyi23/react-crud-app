import React, { useEffect, useState } from "react";
import * as queries from "../../services/queriesService";
import {GetDishTypes} from "../../services/additionalService";
import Select from "../common/Select";
import Button from "../common/Button";

const QueriesPage = () => {
    const [dessertsWithoutEquipment, setDessertsWithoutEquipment] = useState([]);
    const [meatDishes, setMeatDishes] = useState([]);
    const [dishesBySeasonalities, setDishesBySeasonalities] = useState([]);
    const [theMostCaloricDishes, setTheMostCaloricDishes] = useState([])
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

            <p>Получить список десертов, не требующих применения оборудования</p>
            <ul className="mb-4">
                {dessertsWithoutEquipment.map(item => (
                    <li>{item}</li>
                ))}
            </ul>

            <p className="mt-5">Получить список мясных блюд, для приготовления которых необходима духовка</p>
            <ul className="mb-4">
                {meatDishes.map(item => (
                    <li>{item}</li>
                ))}
            </ul>

            <p className="mt-5">Группировка блюд по сезонности</p>
            <table className="table mb-4">
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

            <p className="mt-4">Получить 3 самых калорийных блюда определённого типа</p>
            <label className="mt-1">Тип блюда</label>
            <div className="row">
                <div className="col-10">
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
            : <h6>Нет данных</h6>
            }
        </div>
    )
}

export default QueriesPage;