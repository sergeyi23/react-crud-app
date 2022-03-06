import React from "react";
import Table from "./Table";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import stores from "../../services/reduxHelper";

function Page({title, stateData, setData, service}) {
    const dispatch = useDispatch()
    const store = stores[service]
    const data = useSelector(state => store.getAll(state))

    const navigate = useNavigate()
    const getColumns = () => {
        if (!data.length) {
            return []
        }
        return Object.keys(data[0])
    }

    const handleDelete = (index) => {
        dispatch(store.delete(index))
    }

    const handleUpdate = (index) => {
        navigate(`/${service}/update/${index}`)
    }

    return (
        <div className="container">
            <h1 className="mt-2">{title} from Star Wars Universe</h1>
            {data.length > 0 &&
                <Table
                    data={data}
                    columns={getColumns()}
                    tableDescriptor={title}
                    onDeleteData={handleDelete}
                    onUpdateData={handleUpdate}
                />
            }
            {!data.length && <h1>Empty data!</h1>}
        </div>
    );
}

export default Page;