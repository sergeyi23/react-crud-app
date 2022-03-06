import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";

/*let data = [];

const url = 'https://swapi.dev/api/people';
async function f()
{
    let response = await fetch(url);
    return await response.json()
}

f().then(result => data = result);
console.log(data)*/

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);