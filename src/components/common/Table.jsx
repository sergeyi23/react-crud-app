import React from 'react';
import {Link} from "react-router-dom";

function Table({columns, data, tableDescriptor, onDeleteData, onUpdateData}) {
    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">{tableDescriptor}</th>
                    {columns.map(columnTitle => (
                        <th key={columnTitle} scope="col">{columnTitle}</th>
                    ))}
                    <th scope="col">Manage</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={item[Object.keys(item)[0]] + index}>
                        <th scope="row">{++index}</th>
                        {columns.map(columnTitle => (
                            <td key={columnTitle + item[columnTitle]} className="align-middle">{item[columnTitle]}</td>
                        ))}
                        <td className="d-flex justify-content-center align-items-center">
                            <button className="alert alert-heading m-2" onClick={(e) => onUpdateData(index - 1)}>Edit</button>
                            <button className="alert alert-danger m-2" onClick={(e) => onDeleteData(index - 1)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Link className="btn-dark btn mb-2" role="button" to="new">Create new</Link>
        </div>
    )
}

export default Table;
