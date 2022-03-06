import React from "react";
import Form from "../common/Form";
import {useNavigate, useParams} from "react-router-dom";

const getInitialData = (data) => {
    return (data[0]) ? Object.keys(data[0]).reduce((cols, columnName) => {
        cols[columnName] = "";
        return cols;
    }, {}) : {}
}

function TableForm({stateData, setData, service}) {
    const navigate = useNavigate()
    const params = useParams()

    const initialData = getInitialData(stateData)

/*    console.log(params.operation, params.id)*/

    const handleAdd = (Data) => {
        const data = [...stateData, Data];
        setData(data)
        navigate(`/${service}`)
    }

    const handleUpdate = (Data) => {
        let temp = [...stateData]
        temp[params.id] = Data
        setData([...temp])
        navigate(`/${service}`)
    }

    const handler = {
        "new": handleAdd,
        "update": handleUpdate
    }

    return (
        <div className="container">
            <Form initialData={(params.id) ? stateData[parseInt(params.id)] : initialData} onAddData={handler[params.operation]}/>
        </div>
    );
}

export default TableForm;