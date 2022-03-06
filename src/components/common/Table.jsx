import React from 'react';
import { Link } from 'react-router-dom';
import Button from "./Button";
function Table({data, columns, tableDescriptor, onDeleteData}) {
    if(data.length == 0){
        return <h1>This page contains no information.</h1>
    }

    return (
        <table className="table table-dark">
            <thead>
            <tr>
                <th scope="col">{tableDescriptor}</th>
                {columns.map(columnTitle => (
                    <th key={columnTitle} scope="col">{columnTitle}</th>
                ))}
                <th></th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={item.id}>
                    <th scope="row">{++index}</th>
                    {columns.map(columnTitle => (
                        <td key={item[columnTitle]+columnTitle}>
                            <Link to={`/people/${item.id}`}>
                                {item[columnTitle]}
                            </Link>
                        </td>
                    ))}
                    <td>
                        <Button
                            label="Delete"
                            classes="btn btn-danger"
                            onClick={() => onDeleteData(item.id)}
                        />
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Table;
