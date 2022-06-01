import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    GetDishTypes,
    GetSeasonalities,
    GetEquipments,
    GetIngredients
} from "../../../services/additionalService";
import Select from "../../common/Select";
import Input from "../../common/Input";
import Button from "../../common/Button";
import styled from "styled-components";

const Error = styled.span`
  margin-top: 10px;
  color: orangered;
  text-align: center;
`;

const DishPage = ({
    id,
    data,
    setData,
    title,
    operation
}) => {
    const [seasonalities, setSeasonalities] = useState([]);
    const [dishTypes, setDishTypes] = useState([]);
    const [equipments, setEquipments] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [selectedEquipments, setSelectedEquipments] = useState([]);
    const [selectedDishType, setSelectedDishType] = useState(data.dishType);
    const [selectedSeasonality, setSelectedSeasonality] = useState(data.seasonality);

    const [error, setError] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            setSeasonalities(await GetSeasonalities());
            setDishTypes(await GetDishTypes());
            setEquipments(await GetEquipments());
            setIngredients(await GetIngredients());
        }

        getData();
    }, []);
    
    const handleChangeIngredients = id => {
        const index = selectedIngredients.indexOf(id);
        if (index === -1) {
            const newData = selectedIngredients;
            newData.push(id);
            setSelectedIngredients(newData);
        }
        else {
            const newData = selectedIngredients.splice(index, 1);
            setSelectedIngredients(newData);
        }
    };

    const handleChangeEquipments = id => {
        const index = selectedEquipments.indexOf(id);
        if (index === -1) {
            const newData = selectedEquipments;
            newData.push(id);
            setSelectedEquipments(newData);
        }
        else {
            const newData = selectedEquipments.splice(index, 1);
            setSelectedEquipments(newData);
        }
    };

    const handleChangeSeasonality = () => {
        const e = document.getElementById("seasonalities");
        const value = e.options[e.selectedIndex].value;
        setSelectedSeasonality(Number(value));
    };

    const handleChangeDishType = () => {
        const e = document.getElementById("dishTypes");
        const value = e.options[e.selectedIndex].value;
        setSelectedDishType(Number(value));
    };

    const handleChange = (event) => {
        const { currentTarget : input } = event;
        const newData = {...data};
        newData[input.name] = input.value;
        if (input.name === "calories")
        {
            if (input.value > 1500) newData[input.name] = 1500;
            if (input.value < 0) newData[input.name] = 0;
            if (input.value[0] === "0" && input.value.length > 1)
                newData[input.name] = input.value.substring(1);
        }
        if (input.name === "cookingTime")
        {
            if (input.value > 240) newData[input.name] = 240;
            if (input.value < 0) newData[input.name] = 5;
            if (input.value[0] === "0" && input.value.length > 1)
                newData[input.name] = input.value.substring(1);
        }
        if (input.name === "weight")
        {
            if (input.value > 1000) newData[input.name] = 1000;
            if (input.value < 0) newData[input.name] = 100;
            if (input.value[0] === "0" && input.value.length > 1)
                newData[input.name] = input.value.substring(1);
        }
        setData(newData)
    };

    const handleSave = async () => {
        const newData = {...data};

        if (newData.name.length < 3
            || newData.weight < 100
            || newData.calories < 0
            || newData.cookingTime < 5
        ) {
            setError(true);
            return;
        }
        else setError(false);

        if (id !== undefined)
            newData.id = Number(id);
        if (selectedDishType !== undefined)
            newData.dishType = selectedDishType;
        if (selectedSeasonality !== undefined)
            newData.seasonality = selectedSeasonality;
        newData.ingredients = selectedIngredients;
        newData.equipments = selectedEquipments;
        await operation(newData);
        navigate('/dishes')
    };

    return (
        <div>
            <h4 className="mb-3">{title}</h4>

            <form>
                <Input
                    key="name"
                    name="name"
                    label="Название"
                    maxLength="60"
                    value={data.name}
                    type="text"
                    onChange={handleChange}
                />

                <Input
                    key="weight"
                    name="weight"
                    label="Вес"
                    min="100"
                    max="1000"
                    value={data.weight}
                    type="number"
                    onChange={handleChange}
                />

                <label className="mt-1">Тип блюда</label>
                <Select
                    id="dishTypes"
                    name="dishTypes"
                    data={dishTypes}
                    selectedValues={data.dishType}
                    onChange={handleChangeDishType}
                />

                <label>Сезонность</label>
                <Select
                    id="seasonalities"
                    name="seasonalities"
                    data={seasonalities}
                    selectedValues={data.seasonality}
                    onChange={handleChangeSeasonality}
                />

                <label>Ингредиенты</label>
                <Select
                    name="ingredients"
                    multiple="6"
                    data={ingredients}
                    onClick={handleChangeIngredients}
                />

                <label>Оборудование для приготовления</label>
                <Select
                    name="equipments"
                    multiple="3"
                    data={equipments}
                    onClick={handleChangeEquipments}
                />

                <Input
                    key="calories"
                    name="calories"
                    min="0"
                    max="1100"
                    label="Калории"
                    value={data.calories}
                    type="number"
                    onChange={handleChange}
                />

                <Input
                    key="cookingTime"
                    name="cookingTime"
                    min="5"
                    max="240"
                    label="Время приготовления"
                    value={data.cookingTime}
                    type="number"
                    onChange={handleChange}
                />
            </form>

            {error && (<Error>Проверьте правильность введенных данных</Error>)}

            <Button
                onClick={handleSave}
                label="Сохранить"
                classes="btn btn-outline-success my-4"
            />
        </div>
    );
}

export default DishPage;