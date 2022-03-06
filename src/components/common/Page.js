import React from 'react';
import Table from "../common/Table";
import Button from "../common/Button";
import Form from "../common/Form";

function Page({data, cols, setter, title, schema}) {
    const columns = data === [] ? Object.keys(data[0]) : cols;

    const handleAppData = (newData) => {
        localStorage.removeItem(title)
        const d = [...data, newData];
        localStorage.setItem(title, JSON.stringify(d))
        setter(d)
    }

    const handleRemoveData = (id) => {
        localStorage.removeItem(title)
        let newData = data.filter(item => item.id != id)
        localStorage.setItem(title, JSON.stringify(newData))
        setter(newData)
    }

    const getInitialData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    return (
        <div className="container">
            {data.length > 0 ?
                <Table
                    tableData={data}
                    columns={columns}
                    tableDescriptor={title[0].toUpperCase() + title.slice(1)}
                    onRemoveData={handleRemoveData}
                />
                : <h4>No data</h4>}
            <Form
                initialData={getInitialData()}
                columns={columns}
                onAddData={handleAppData}
                schema={schema}
            />
        </div>
    );
}

export default Page