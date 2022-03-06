import React from "react";
import Table from "./Table";
import {useNavigate} from "react-router-dom";

function Page({data, title, stateData, setData, service}) {

    const navigate = useNavigate()
    const getColumns = () => {
        if (!stateData.length) {
            return []
        }
        return Object.keys(stateData[0])
    }

    const handleDelete = (index) => {
        let temp = [...stateData]
        temp.splice(index, 1)
        const data = [...temp];
        setData(data);
    }

    const handleUpdate = (index) => {
        navigate(`/${service}/update/${index}`)
    }

    return (
        <div className="container">
            {stateData.length > 0 &&
                <Table
                    data={stateData}
                    columns={getColumns()}
                    tableDescriptor={title}
                    onDeleteData={handleDelete}
                    onUpdateData={handleUpdate}
                />
            }
            {!stateData.length && <h1>Empty data!</h1>}
        </div>
    );
}

export default Page;