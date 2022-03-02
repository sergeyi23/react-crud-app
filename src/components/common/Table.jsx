import React from 'react';

function Table({columns, data, tableDescriptor, deleteItem}) {

    return (
        <table className="table table-dark">
            <thead>
            <tr>
                <th scope="col">{tableDescriptor}</th>
                {columns.map(columnTitle => (
                    <th key={columnTitle} scope="col">{columnTitle}</th>
                ))}
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => {
                const deleteItemWrapper = () => {
                    deleteItem(item.id)
                }

                return (
                    <tr key={item.id}>
                        <th scope="row">{++index}</th>
                        {columns.map(columnTitle => (
                                <td
                                    key={item[columnTitle] + columnTitle}>{item[columnTitle]}
                                </td>
                            )
                        )}
                        <td>
                            <button type="button"
                                    className="btn btn-danger"
                                    onClick={deleteItemWrapper}
                            >Delete
                            </button>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default Table;
