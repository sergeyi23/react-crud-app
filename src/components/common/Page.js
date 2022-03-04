import React, {useState} from 'react';
import Table from "./Table";
import Form from './Form'

import 'bootstrap/dist/css/bootstrap.css';


function Page({data, title}) {
    const columns = Object.keys(data[0]);

    const [tableData, setTableData] = useState(data);

    const handleAppData = (newData) => {
        const data = [...tableData, newData];
        setTableData(data)
    }

    const handleRemoveData = (row) => {
        setTableData(tableData.filter(item => item !== row))
    }

    const getInitialData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    return (
        <div className="container">
            {tableData.length > 0 ?
            <Table
                tableData={tableData}
                columns={columns}
                tableDescriptor={title}
                onRemoveData={handleRemoveData}
            />
                : <h4>No data</h4>}
            <Form
                initialData={getInitialData()}
                columns={columns}
                onAddData={handleAppData}
            />
        </div>
    );
}

export default Page;
