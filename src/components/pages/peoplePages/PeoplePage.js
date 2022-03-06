import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from "../../common/Table";
import Button from "../../common/Button";
import {getPeople} from "../../../services/swApiService";
const data = []

const PeoplePage = () => {
    const [people, setPeople] = useState(data);
  
    useEffect( () => {
      const getData = async () => {
          if(!localStorage.getItem('people')){
            const data = await getPeople();
            localStorage.setItem('people',JSON.stringify(data));
            //console.log(JSON.parse(localStorage.getItem('people')));
          }
          setPeople(JSON.parse(localStorage.getItem('people')));
      }
      getData()
    }, [])

    const handleDelateItem = (id) => {
      const filteredData = people.filter(person => person.id !== id);
      localStorage.setItem('people',JSON.stringify(filteredData));
      setPeople(filteredData);
    }

    const getColumnNames = () => {
      if (!people.length) {
        return []
      }
      return Object.keys(people[0])
    }

    return (
      <div> 
        <div className="container">
          <h1>Page with People</h1>
          <Link to={'/people/new'}>
            <Button
              label="Create"
              classes="btn btn-primary mb-2"
            />
          </Link>
          <Table
            data={people}
            columns={getColumnNames()}
            tableDescriptor="People"
            onDeleteData={handleDelateItem}
          />
        </div>
      </div>
    );
};

export default PeoplePage;