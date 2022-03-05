import React from 'react';
import Button from './Button';
import {Link} from "react-router-dom";

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
                        {columns.map(columnTitle => {
                                return (columnTitle === 'name') ?
                                    <td key={item[columnTitle] + columnTitle}>
                                        <Link
                                            to={`/${tableDescriptor.toLowerCase()}/form/${item.id}`}>{item[columnTitle]}
                                        </Link>
                                    </td>
                                    :
                                    <td key={item[columnTitle] + columnTitle}>
                                        {item[columnTitle]}
                                    </td>
                            }
                        )}
                        <td>
                            <Button
                                label={'Delete'}
                                classes="btn btn-danger"
                                onClick={deleteItemWrapper}
                            />
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default Table;
