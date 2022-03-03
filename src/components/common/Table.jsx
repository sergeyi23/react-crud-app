import React from "react";
import { Button } from "react-bootstrap";

function Table({ columns, data, tableDescriptor, onDeleteData }) {
  return (
    <table className="table table-dark col-11 col-md-8 col-xl-6 mx-auto">
      <thead>
        <tr>
          <th scope="col">{tableDescriptor}</th>
          {columns.map((columnTitle) => (
            <th key={columnTitle} scope="col">
              {columnTitle}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={Date.now() * Math.random()}>
            <th scope="row">{++index}</th>
            {columns.map((columnTitle) => (
              <td key={item[columnTitle] + columnTitle}>{item[columnTitle]}</td>
            ))}
            <td>
              <Button
                type="button"
                className="btn btn-danger  px-1"
                onClick={() => onDeleteData(item.id)}
              >
                DELETE
              </Button>{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
