import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {setStarships, deleteStarship} from '../../../store/actions/starships'
import Table from "../../common/Table";
import Button from "../../common/Button";
import {getStarships} from "../../../services/swApiService"
const data = []
const StarshipsPage = () => {
    const dispatch = useDispatch();
    const starships = useSelector(state => state.starships);
  
    useEffect( () => {
      const getData = async () => {
          const data = await getStarships();
          if(!localStorage.getItem('starships')){
            localStorage.setItem('starships',JSON.stringify(data));
          }
          dispatch(setStarships(JSON.parse(localStorage.getItem('starships'))));
      }
      getData()
    }, [])
  
    const handleDelateItem = (id) => {
      const filteredData = starships.filter(star => star.id !== id);
      localStorage.setItem('starships',JSON.stringify(filteredData));
      dispatch(deleteStarship(id));
    }

    const getColumnNames = () => {
      if (!starships.length) {
        return []
      }
      return Object.keys(starships[0])
    }

    return (
      <div> 
        <div className="container">
          <h1>Page with Starships</h1>
          <Link to={'/starships/new'}>
            <Button
              label="Create"
              classes="btn btn-primary mb-2"
            />
          </Link>
          <Table
            data={starships}
            category={'starships'}
            columns={getColumnNames()}
            tableDescriptor="Starships"
            onDeleteData={handleDelateItem}
          />
        </div>
      </div>
    );
};

export default StarshipsPage;