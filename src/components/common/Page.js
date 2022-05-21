import React from 'react';
import Table from "../common/Table";
import {Link, useNavigate} from "react-router-dom";

function Page({ data, columns, setter, path, title }) {

    const navigate = useNavigate()

    const handleRemoveData = (id) => {
        const newData = data.filter(item => item.id !== id);
        setter(newData);
    };

    const handleSave = (event) => {
        event.preventDefault();
        console.log(data);
    };

    const handleUpdate = (index) => {
        navigate(`/${path}/update/${index}`)
    }

    return (
        <div>
            <h3>{title}</h3>
            {data.length > 0 ?
                <div>
                    <Table
                        tableData={data}
                        columns={columns}
                        onRemoveData={handleRemoveData}
                        onUpdateData={handleUpdate}
                        onSave={handleSave}
                    />
                </div>
                : <h4>Нет данных</h4>
            }
            <Link className="btn btn-outline-primary mt-2" role="button" to="new">Создать</Link>
        </div>
    );
}

export default Page