import React, { useState } from 'react';
import Table from "../common/Table";
import Form from '../common/Form'
const data = [
  {Name: 'Mercury', PeriodOfRevolution: '88 days', PeriodOfRotation: '59 days', id: '1'},
  {Name: 'Venus', PeriodOfRevolution: '225 days', PeriodOfRotation: '243 days', id: '2'},
  {Name: 'Earth', PeriodOfRevolution: '365 days', PeriodOfRotation: '24 hours', id: '3'},
  {Name: 'Mars', PeriodOfRevolution: '687 days', PeriodOfRotation: '24 hours', id: '4'},
  {Name: 'Jupiter', PeriodOfRevolution: '12 years', PeriodOfRotation: '10 hours', id: '5'}
]

const columns = Object.keys(data[0]);
const PlanetPage = () => {
    const [planets, setPlanet] = useState(data);
  
    const handleAppPlanet = (planetData) => {
        const data = [...planets, planetData];
        setPlanet(data)
    }

    const handleDelateItem = (id) => {
      const filteredData = planets.filter(planet => planet.id !== id);
      setPlanet(filteredData);
    }
  
    const getInitialPlanetData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
         }, {})
    }
    return (
      <div> 
        <div className="container">
          <h1>Page with Planets</h1>
          <Form
            initialData={getInitialPlanetData()}
            columns={columns}
            onAddData={handleAppPlanet}
          />
          <Table
            data={planets}
            columns={columns}
            tableDescriptor="Planet"
            onDeleteData={handleDelateItem}
          />
        </div>
      </div>
    );
};

export default PlanetPage;