import React from 'react';
import Button from "./Button";
import editIcon from "./../../images/edit.png";
import deleteIcon from "./../../images/delete.png";

function Table({columns, tableData, onRemoveData, onUpdateData, path, loginStatus, isAdmin}) {
    return (
        <div>
            <table className="table mb-4">
                <thead>
                <tr>
                    {Object.values(columns).map(columnTitle => (
                        <th key={columnTitle} scope="col">{columnTitle}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {tableData.map(item => (
                    <tr key={item.id}>
                        {Object.keys(columns).map(columnTitle => (
                            <td key={item[columnTitle]+columnTitle}>{item[columnTitle]}</td>
                        ))}
                        {loginStatus && (
                            <td className="d-inline-flex align-items-center">
                                <Button
                                    value={item.id}
                                    size="36"
                                    image={deleteIcon}
                                    classes="btn btn-outline"
                                    onClick={() => onRemoveData(item.id)}
                                />
                                <Button
                                    image={editIcon}
                                    disabled={!isAdmin}
                                    size="28"
                                    classes="btn btn-outline"
                                    onClick={() => onUpdateData(item.id)}
                                />
                            </td>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>

            {loginStatus && path === 'dishes' && (
                <a
                    href='https://localhost:7166/api/dishes/get-document'
                    download='Блюда.xlsx'
                    className="btn btn-outline-success mb-3"
                >
                    Получить отчёт
                </a>
            )}
        </div>
    )
}

export default Table;
