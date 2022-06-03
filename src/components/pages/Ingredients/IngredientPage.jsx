import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    GetUnits,
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

const IngredientPage = ({
                      id,
                      data,
                      setData,
                      title,
                      operation
                  }) => {
    const [units, setUnits] = useState([]);
    const [error, setError] = useState(false);

    const [selectedUnit, setSelectedUnit] = useState(data.unit);

    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            setUnits(await GetUnits());
        }

        getData();
    }, []);

    const handleChangeUnit = () => {
        const e = document.getElementById("units");
        const value = e.options[e.selectedIndex].value;
        setSelectedUnit(Number(value));
    };

    const handleChange = (event) => {
        const { currentTarget : input } = event;
        const newData = {...data};
        newData[input.name] = input.value;
        if (input.name === "amount")
        {
            if (input.value > 2000) newData[input.name] = 2000;
            if (input.value < 0) newData[input.name] = 1;
            if (input.value[0] === "0" && input.value.length > 1)
                newData[input.name] = input.value.substring(1);
        }
        if (input.name === "cost")
        {
            if (input.value > 5000) newData[input.name] = 5000;
            if (input.value < 0) newData[input.name] = 5;
            if (input.value[0] === "0" && input.value.length > 1)
                newData[input.name] = input.value.substring(1);
        }
        setData(newData)
    };

    const handleSave = async () => {
        const newData = {...data};

        if (newData.name.length < 3
            || newData.cost < 5
            || newData.amount < 1
        ) {
            setError(true);
            return;
        }
        else setError(false);

        if (id !== undefined)
            newData.id = Number(id);
        if (selectedUnit !== undefined)
            newData.unit = selectedUnit;
        await operation(newData);
        navigate('/ingredients')
    };

    return (
        <div className="d-flex flex-column">
            <h4 className="mb-3">{title}</h4>

            <form>
                <Input
                    key="name"
                    name="name"
                    label="Название"
                    maxLength="30"
                    value={data.name}
                    type="text"
                    onChange={handleChange}
                />

                <Input
                    key="amount"
                    name="amount"
                    label="Количество"
                    min="1"
                    max="2000"
                    value={data.amount}
                    type="number"
                    onChange={handleChange}
                />

                <label className="mt-1">Единица измерения</label>
                <Select
                    id="units"
                    name="units"
                    data={units}
                    selectedValues={data.unit}
                    onChange={handleChangeUnit}
                />

                <Input
                    key="cost"
                    name="cost"
                    min="5"
                    max="5000"
                    label="Цена"
                    value={data.cost}
                    type="number"
                    onChange={handleChange}
                />
            </form>

            {error && (<Error>Проверьте правильность введенных данных</Error>)}

            <Button
                onClick={handleSave}
                label="Сохранить"
                classes="btn btn-outline-success my-4 w-25"
            />
        </div>
    );
}

export default IngredientPage;