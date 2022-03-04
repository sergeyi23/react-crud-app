import React, { useState } from 'react';
import Table from "../common/Table";
import Form from '../common/Form'
const data = [
  {first: 'Mark', last: 'Otto', age:"30", handle: '@motto', id: '1'},
  {first: 'Carl', last: 'Reno', age:"40", handle: '@ceno', id: '2'},
  {first: 'Steve', last: 'Smith', age:"34", handle: '@ssteve', id: '3'}
]

const columns = Object.keys(data[0]);
const PeoplePage = () => {
    const [people, setPeople] = useState(data);
  
    const handleAppPerson = (personData) => {
        const data = [...people, personData];
        setPeople(data)
    }

    const handleDelateItem = (id) => {
      const filteredData = people.filter(person => person.id !== id);
      setPeople(filteredData);
    }
  
    const getInitialPeopleData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
         }, {})
    }
    return (
      <div> 
        <div className="container">
          <h1>Page with People</h1>
          <Form
            initialData={getInitialPeopleData()}
            columns={columns}
            onAddData={handleAppPerson}
          />
          <Table
            data={people}
            columns={columns}
            tableDescriptor="People"
            onDeleteData={handleDelateItem}
          />
        </div>
      </div>
    );
};

export default PeoplePage;