import React from 'react';
import { Link} from "react-router-dom";
import Table from "../common/Table";
import Button from '../common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStarships } from '../../store/selectors/starships';
import { deleteStarship, changeBelovedStatus } from '../../store/actions/starships';
import { getTableColumns } from './TableCol';

function StarshipsPage() {
    const dispatch = useDispatch();
    const starships = useSelector(state => getAllStarships(state));

    const handleBelovedStatus = id => {
        dispatch(changeBelovedStatus(id));
    }

    const handleDeleteStarship = (id) => {
        dispatch(deleteStarship(id));
    }

    return (
        <div className="container">
            <h1>Starships page</h1>
            <Link to='/starships/new'>
                <Button
                    label="New Starship"
                    classes="btn btn-success m-2"
                />
            </Link>
            <Table
            data={starships}
            columns={getTableColumns(starships, 'starships', handleBelovedStatus)}
            onDeleteData={handleDeleteStarship}
            tableDescriptor="Starships"
            pathname={'/starships'}
            />
        </div>
    );
}

export default StarshipsPage;