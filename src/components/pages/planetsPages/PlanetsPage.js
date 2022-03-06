import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from "../../common/Table";
import Button from "../../common/Button";
import {getPlanets} from "../../../services/swApiService"
const data = []

const PlanetPage = () => {
    const [planets, setPlanet] = useState(data);
  
    useEffect( () => {
      const getData = async () => {
          const data = await getPlanets();
          if(!localStorage.getItem('planets')){
            localStorage.setItem('planets',JSON.stringify(data));
            //console.log(JSON.parse(localStorage.getItem('planets')));
          }
          setPlanet(JSON.parse(localStorage.getItem('planets')));
      }
      getData()
    }, [])

    const handleDelateItem = (id) => {
      const filteredData = planets.filter(planet => planet.id !== id);
      localStorage.setItem('planets',JSON.stringify(filteredData));
      setPlanet(filteredData);
    }

    const getColumnNames = () => {
      if (!planets.length) {
        return []
      }
      return Object.keys(planets[0])
    }

    return (
      <div> 
        <div className="container">
          <h1>Page with Planets</h1>
          <Link to={'/planets/new'}>
            <Button
              label="Create"
              classes="btn btn-primary mb-2"
            />
          </Link>
          <Table
            data={planets}
            columns={getColumnNames()}
            tableDescriptor="Planet"
            onDeleteData={handleDelateItem}
          />
        </div>
      </div>
    );
};

export default PlanetPage;