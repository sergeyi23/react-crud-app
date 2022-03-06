import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {setPeople, deletePerson} from '../../../store/actions/people'
import Table from "../../common/Table";
import Button from "../../common/Button";
import {getPeople} from "../../../services/swApiService";
const data = []

const PeoplePage = () => {
  const dispatch = useDispatch();
  const people = useSelector(state => state.people);

    useEffect( () => {
      const getData = async () => {
          if(!localStorage.getItem('people')){
            const data = await getPeople();
            localStorage.setItem('people',JSON.stringify(data));
          }
          dispatch(setPeople(JSON.parse(localStorage.getItem('people'))));
      }
      getData()
    }, [])

    const handleDelateItem = (id) => {
      const filteredData = people.filter(person => person.id !== id);
      localStorage.setItem('people',JSON.stringify(filteredData));
      dispatch(deletePerson(id));
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
            category={'people'}
            columns={getColumnNames()}
            tableDescriptor="People"
            onDeleteData={handleDelateItem}
          />
        </div>
      </div>
    );
};

export default PeoplePage;