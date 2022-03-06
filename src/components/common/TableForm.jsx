import React from "react";
import Form from "../common/Form";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import stores from "../../services/reduxHelper";

const getInitialData = (data) => {
    return (data[0]) ? Object.keys(data[0]).reduce((cols, columnName) => {
        cols[columnName] = "";
        return cols;
    }, {}) : {}
}

function TableForm({service}) {
    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch()
    const store = stores[service]
    const data = useSelector(state => store.getAll(state))

    const initialData = getInitialData(data)

/*    console.log(params.operation, params.id)*/

    const handleAdd = (Data) => {
        dispatch(store.add(Data))
        navigate(`/${service}`)
    }

    const handleUpdate = (Data) => {
        dispatch(store.update(params.id, Data))
        console.log(Data)
        navigate(`/${service}`)
    }

    const handler = {
        "new": handleAdd,
        "update": handleUpdate
    }

    return (
        <div className="container">
            <Form initialData={(params.id) ? data[parseInt(params.id)] : initialData} onAddData={handler[params.operation]}/>
        </div>
    );
}

export default TableForm;