import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Form from '../common/Form';
const columns = ['name','height','mass','gender','birth_year','id']
const DataForm = () => {
    const [people, setPeople] = useState(JSON.parse(localStorage.getItem('people')));

    const navigation = useNavigate()
    const userId = useParams().id

    useEffect(() => {
        localStorage.setItem('people',JSON.stringify(people))
    }, [people])

    const handleAppPerson = (personData) => {
        const data = [...people, personData];
        setPeople(data);
        setTimeout(() => {
            navigation('/people')
        })
    }
  
    const handleUdpatePerson = (personData) => {
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
                />
                </div>
            </div>
        );
    }
};

export default DataForm;