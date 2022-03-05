import React from "react";
import Table from "./Table";
import Form from "./Form";



function Page({data, title, stateData, setData}) {
    if (data) {
        const columns = Object.keys(data[0]);
        /*const [stateData, setData] = useState(data);
        console.log(stateData)*/

        const handleAdd = (Data) => {
            const data = [...stateData, Data];
            setData(data);
        }

        const handleDelete = (index) => {
            let temp = [...stateData]
            temp.splice(index, 1)
            const data = [...temp];
            setData(data);
        }

        const getInitialData = () => {
            return columns.reduce((cols, columnName) => {
                cols[columnName] = "";
                return cols;
            }, {})
        }

        return (
            <div className="container">
                <Table
                    data={stateData}
                    columns={columns}
                    tableDescriptor={title}
                    onDeleteData={handleDelete}
                />
                <Form
                    initialData={getInitialData()}
                    columns={columns}
                    onAddData={handleAdd}
                />
            </div>
        );
    } else {
        return (<h1>Empty data!</h1>)
    }
}

export default Page;