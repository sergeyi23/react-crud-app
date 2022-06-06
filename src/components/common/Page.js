import React from 'react';
import Table from "../common/Table";
import {Link, useNavigate} from "react-router-dom";
import Button from "./Button";

function Page({ data, columns, setter, path, title, loginStatus, remove, isAdmin }) {

    const navigate = useNavigate()

    const handleRemoveData = (id) => {
        const newData = data.filter(item => item.id !== id);
        setter(newData);
    };

    const handleSave = async(event) => {
        event.preventDefault();
        const body = { indexes: data.map(item => item.id) };
        await remove(body);
        alert('Данные сохранены');
    };

    const handleUpdate = (index) => {
        navigate(`/${path}/update/${index}`)
    }

    return (
        <div>
            <h3>{title}</h3>
            {loginStatus && (
                <div className="my-3">
                    <Link
                        className="btn btn-outline-primary"
                        role="button"
                        to="new"
                    >
                        Создать
                    </Link>

                    {data.length > 0 && (
                        <Button
                            label="Сохранить"
                            classes="btn btn-outline-success mx-2"
                            onClick={handleSave}
                        />
                    )}
                </div>
            )}
            {data.length > 0 ?
                <Table
                    path={path}
                    tableData={data}
                    columns={columns}
                    onRemoveData={handleRemoveData}
                    onUpdateData={handleUpdate}
                    loginStatus={loginStatus}
                    isAdmin={isAdmin}
                />
            : <h4>Нет данных</h4>
            }
        </div>
    );
}

export default Page