import React from 'react';
import { Link } from "react-router-dom";
import Table from "../common/Table";
import Button from '../common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlanets } from '../../store/selectors/planets';
import { deletePlanet, changeBelovedStatus } from '../../store/actions/planets';
import { getTableColumns } from './TableCol';

function PlanetsPage() {
    const dispatch = useDispatch();
    const planets = useSelector(state => getAllPlanets(state));

    const handleBelovedStatus = id => {
        dispatch(changeBelovedStatus(id));
    }
    const handleDeletePlanet = (id) => {
        dispatch(deletePlanet(id));
    }

    return (
        <div className="container">
            <h1>Planets page</h1>
            <Link to='/planets/new'>
                <Button
                    label="New Planet"
                    classes="btn btn-success m-2"
                />
            </Link>
            <Table
            data={planets}
            columns={getTableColumns(planets, 'planets', handleBelovedStatus)}
            onDeleteData={handleDeletePlanet}
            tableDescriptor="Planets"
            />
        </div>
    );
}

export default PlanetsPage;