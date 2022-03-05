import React from 'react';

function Table({columns, data, tableDescriptor, onDeleteData}) {
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">{tableDescriptor}</th>
                {columns.map(columnTitle => (
                    <th key={columnTitle} scope="col">{columnTitle}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={item[Object.keys(item)[0]] + index}>
                    <th scope="row">{++index}</th>
                    {columns.map(columnTitle => (
                        <td key={columnTitle + item[columnTitle]}>{item[columnTitle]}</td>
                    ))}
                    <td className="d-flex justify-content-center align-items-center"><button className="alert alert-danger" onClick={(e) => onDeleteData(index - 1)}>Delete</button></td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Table;
