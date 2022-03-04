import React from 'react';
import Button from "./Button";

function Table({columns, tableData, tableDescriptor, onRemoveData}) {

    const handleClick = (event) => {
        event.preventDefault();
        let id = event.currentTarget['value'];
        let row = tableData.find(item => item.id === id)
        onRemoveData(row)
    }

    return (
        <table className="table table-light">
            <thead>
            <tr>
                <th scope="col">{tableDescriptor}</th>
                {columns.map(columnTitle => (
                    <th key={columnTitle} scope="col">{columnTitle}</th>
                ))}
                <th scope="col"/>
            </tr>
            </thead>
            <tbody>
            {tableData.map((item, index) => (
                <tr key={item.id}>
                    <th scope="row">{++index}</th>
                    {columns.map(columnTitle => (
                        <td key={item[columnTitle]+columnTitle}>{item[columnTitle]}</td>
                    ))}
                    <td>
                        <Button
                            value={item.id}
                            label="Delete"
                            classes="btn btn-light"
                            onClick={handleClick}>
                        </Button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Table;
