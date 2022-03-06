import React from 'react'
import { useParams } from "react-router-dom";
import Form from '../common/Form';
import { nanoid } from 'nanoid';

function FormPage({ data, setData, rootPath, rule, columns }) {
  const { id } = useParams();
  const isNew = id === 'new';

  const handleAddData = (itemData) => {
    const newData = [...data, {...itemData, id: nanoid()}];
    setData(newData)
  }

  const handleUpdateData = (itemData) => {
    const newData = data.map((item) => 
      item.id === itemData.id ? itemData : item
    )
    setData(newData)
  }

  const getData = (id) => {
    return data.find((item) => item.id === id)
  }

  const getInitialData = () => {
    return columns.reduce((cols, columnName) => {
        cols[columnName] = "";
        return cols;
    }, {})
  }

  return (
    <div className="container">
      <Form
      initialData={isNew ? getInitialData() : (getData(id) || getInitialData())}
      columns={columns}
      onAddData={isNew ? handleAddData : handleUpdateData}
      rootPath={rootPath}
      rule={rule}
      />
    </div>
  )
}


export default FormPage;