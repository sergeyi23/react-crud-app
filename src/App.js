import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import DishesPage from "./components/pages/Dishes/DishesPage";
import NewDishPage from "./components/pages/Dishes/NewDishPage";
import UpdateDishPage from "./components/pages/Dishes/UpdateDishPage";

import IngredientsPage from "./components/pages/Ingredients/IngredientsPage";
import NewIngredientPage from "./components/pages/Ingredients/NewIngredientPage";
import UpdateIngredientPage from "./components/pages/Ingredients/UpdateIngredientPage"

import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage";
import QueriesPage from "./components/pages/QueriesPage";

import Navbar from "./components/common/Navbar";

import { IsAdmin, IsOperator, getCookie} from "./services/authService";

import 'bootstrap/dist/css/bootstrap.css';


function App() {
    const isAdmin = IsAdmin();
    const isOperator = IsOperator();
    const [loginStatus, setLoginStatus] = useState(getCookie('role') !== undefined);
    const login = getCookie('login');

    return (
        <div className="container">
            <Navbar
                loginStatus={loginStatus}
                setLoginStatus={setLoginStatus}
                login={login}
            />
            <Routes>
                <Route path="/" element={<Navigate to={"/dishes"}/>} />
                <Route path={"*"} element={<Navigate to={"/not-found"}/>} />
                <Route path="/not-found" element={(<h2>Страница не найдена</h2>)} />

                <Route path="/login" element={ <LoginPage setLoginStatus={setLoginStatus}/> } />

                <Route path="/dishes" element={ <DishesPage loginStatus={loginStatus}/> } />
                {(isOperator || isAdmin) && (
                    <Route path="/dishes/new" element={ <NewDishPage/> } />
                )}
                {isAdmin && (
                    <Route path="/dishes/update/:id" element={ <UpdateDishPage/> } />
                )}

                <Route path="/ingredients" element={ <IngredientsPage loginStatus={loginStatus}/> } />
                {(isOperator || isAdmin) && (
                    <Route path="/ingredients/new" element={ <NewIngredientPage/> } />
                )}
                {isAdmin && (
                    <Route path="/ingredients/update/:id" element={ <UpdateIngredientPage/> } />
                )}

                {loginStatus && (
                    <Route path="/profile" element={ <ProfilePage/> } />
                )}
                <Route path="/queries" element={ <QueriesPage/> } />
            </Routes>
        </div>
    )
}

export default App;
