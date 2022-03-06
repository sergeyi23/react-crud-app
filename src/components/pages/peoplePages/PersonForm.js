import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Joi from "joi"
import Form from '../../common/Form';

const columns = ['name','height','mass','gender','birth_year','id']
const schema = Joi.object().keys({
    name: Joi.string().min(2).max(25).required(),
    height: Joi.number().integer().required(),
    mass: Joi.number().integer().required(),
    gender: Joi.string().required(),
    birth_year: Joi.string().required(),
    id: Joi.any(),
  });

const DataForm = () => {
    const [people, setPeople] = useState(JSON.parse(localStorage.getItem('people')));
    const [errors, setErrors] = useState('');

    const navigation = useNavigate();
    const userId = useParams().id;

    useEffect(() => {
        localStorage.setItem('people',JSON.stringify(people));
    }, [people])

    const handleAppPerson = (personData) => {
        const {error} = schema.validate(personData)
        if (error) {
            setErrors(error.details[0].message)
            return;
        }
        const data = [...people, personData];
        setPeople(data);
        setTimeout(() => {
            navigation('/people')
        })
    }
  
    const handleUdpatePerson = (personData) => {
        const {error} = schema.validate(personData)
        if (error) {
            setErrors(error.details[0].message)
            return;
        }
        setPeople(people.map((person)=>{
            if(person.id === personData.id){
                return personData;
            }
            return person;
        }))
        setTimeout(() => {
            navigation('/people')
        })
    }

    const getInitialPeopleData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
         }, {})
    }


    if(userId == 'new'){
        return (
            <div> 
                <div className="container">  
                <h1>Create new person</h1>
                <Form
                    initialData={getInitialPeopleData()}
                    columns={columns}
                    onAddData={handleAppPerson}
                    errors = {errors}
                    setErrors = {setErrors}
                />
                </div>
            </div>
        );
    }
    else{
        return (
            <div> 
                <div className="container">  
                <h1>Update person</h1>
                <Form
                    initialData={people.find(person => person.id == userId)}
                    columns={columns}
                    onAddData={handleUdpatePerson}
                    errors = {errors}
                    setErrors = {setErrors}
                />
                </div>
            </div>
        );
    }
};

export default DataForm;