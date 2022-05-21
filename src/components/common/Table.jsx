import React from 'react';
import Button from "./Button";
import editIcon from "./../../images/edit.png";
import deleteIcon from "./../../images/delete.png";

function Table({columns, tableData, onRemoveData, onUpdateData, onSave}) {
    return (
        <div>
            <table className="table ">
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
                        <td className="">
                            <Button
                                value={item.id}
                                size="36"
                                image={deleteIcon}
                                classes="btn btn-outline"
                                onClick={() => onRemoveData(item.id)}
                            />
                            <Button
                                image={editIcon}
                                size="30"
                                classes="btn btn-outline"
                                onClick={() => onUpdateData(item.id)}
                            />

                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <Button
                label="Сохранить"
                classes="btn btn-outline-success"
                onClick={onSave}
            />
        </div>
    )
}

export default Table;
