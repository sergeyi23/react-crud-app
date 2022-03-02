import React, {useState} from 'react';
import Table from "../../common/Table";
import Form from "../../common/Form";
import {v1} from "uuid";

// import './App.css';

const planetsInitData = [
    {
        planet: 'Mercury',
        'Mass (1024kg)': '0.330',
        'Diameter (km)': '4879',
        'Density (kg/m3)': '5429',
        'Gravity (m/s2)': '3.7',
        'Length of Day (hours)': '4222.6',
        id: v1(),
    },
    {
        planet: 'Venus',
        'Mass (1024kg)': '0.330',
        'Diameter (km)': '53879',
        'Density (kg/m3)': '52429',
        'Gravity (m/s2)': '4.7',
        'Length of Day (hours)': '422.6',
        id: v1(),
    },
    {
        planet: 'Earth',
        'Mass (1024kg)': '0.330',
        'Diameter (km)': '4879',
        'Density (kg/m3)': '5429',
        'Gravity (m/s2)': '1',
        'Length of Day (hours)': '24',
        id: v1(),
    },
    {
        planet: 'Moon',
        'Mass (1024kg)': '0.330',
        'Diameter (km)': '4879',
        'Density (kg/m3)': '5429',
        'Gravity (m/s2)': '3.7',
        'Length of Day (hours)': '4',
        id: v1(),
    },
]

const columns = Object.keys(planetsInitData[0]);

export const PlanetsPage = () => {
    const [planets, setPlanets] = useState(planetsInitData);

    const handlePlanet = (planetData) => {
        const data = [...planets, planetData];
        setPlanets(data)
    }
    const deletePlanet = (id) => {
        setPlanets(planets.filter(planet => planet.id !== id))
    }

    const getInitialPlanetsData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    return (
        <>
            <h1>Planets page</h1>
            <Table
                data={planets}
                columns={columns}
                tableDescriptor="Planets"
                deleteItem={deletePlanet}
            />
            <Form
                initialData={getInitialPlanetsData()}
                columns={columns}
                onAddData={handlePlanet}
            />
        </>
    );
}
