import React from 'react'
import { useParams } from "react-router-dom";
import Form from '../common/Form';
import { useDispatch, useSelector } from 'react-redux';

function FormPage({ rootPath, rule, columns, addAction, updateAction, selector }) {
  const dispatch = useDispatch();
  const data = useSelector(state => selector(state));
  const { id } = useParams();
  const isNew = id === 'new';

  const handleAddData = (itemData) => {
    dispatch(addAction(itemData));
  }

  const handleUpdateData = (itemData) => {
    dispatch(updateAction(itemData));
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