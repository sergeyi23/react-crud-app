import React, { useState } from 'react';
import Table from "../common/Table";
import Form from '../common/Form'
const data = [
    {Name: 'Sirius', Luminosity: '22.5', Distance: '8.6', id: '1'},
    {Name: 'Canopus', Luminosity: '13500', Distance: '309', id: '2'},
    {Name: 'Arcturus', Luminosity: '120', Distance: '36,72', id: '3'},
    {Name: 'Vega', Luminosity: '49', Distance: '25.04', id: '4'}
]

const columns = Object.keys(data[0]);
const StarPage = () => {
    const [stars, setStar] = useState(data);
    console.log(1);
  
    const handleAppPerson = (starData) => {
        const data = [...stars, starData];
        setStar(data)
    }
  
    const handleDelateItem = (id) => {
      const filteredData = stars.filter(star => star.id !== id);
      setStar(filteredData);
    }

    const getInitialStarData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
         }, {})
    }
    return (
      <div> 
        <div className="container">
          <h1>Page with Stars</h1>
          <Form
            initialData={getInitialStarData()}
            columns={columns}
            onAddData={handleAppPerson}
          />
          <Table
            data={stars}
            columns={columns}
            tableDescriptor="Star"
            onDeleteData={handleDelateItem}
          />
        </div>
      </div>
    );
};

export default StarPage;