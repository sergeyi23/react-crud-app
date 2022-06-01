import React, { useEffect, useState } from 'react';
import { signUp, getLastEnter, getCookie } from "../../services/authService";
import Input from "../common/Input";
import styled from "styled-components";
import Button from "../common/Button";

const initialData = {
    "login": "",
    "password": ""
};

const Error = styled.span`
  margin-top: 10px;
  color: orangered;
  text-align: center;
`;

const Success = styled.span`
  margin-top: 10px;
  color: chartreuse;
  text-align: center;
`;

const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    width: 380px;
`;

const ProfilePage = () => {
    const [data, setData] = useState(initialData);
    const [error, setError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const login = getCookie('login')
    const role = getCookie('role');
    const [lastEnterTime, setLastEnterTime] = useState('');

    useEffect(() => {
        const getData = async () => {
            const response = await getLastEnter(login.toLowerCase());
            const date = new Date(Date.parse(response.substring(1, 20)));
            const stringDate = `${
                date.getDate() < 10 && '0'}${
                date.getDate()}.${
                date.getMonth() < 10 && '0'}${
                date.getMonth() + 1}.${
                date.getFullYear()} ${
                date.getHours() - (date.getTimezoneOffset() / 60)}:${
                date.getMinutes()}`;
            setLastEnterTime(stringDate);
        }

        getData();
    }, [login]);

    const handleChange = (event) => {
        const { currentTarget : input } = event;
        const newData = {...data};
        newData[input.name] = input.value;
        setData(newData)
    }

    const handleSignUp = async() => {
        const response = await signUp(data);
        if (response.status) {
            setIsSuccess(true);
            setError(false);
        }
        else {
            setError(true);
            setIsSuccess(false);
        }
    }

    return (
        <Block>
            <p>Логин: {login}</p>
            <p>Роль: {role}</p>
            <p>Время последнего входа: {lastEnterTime}</p>

            {role === 'Admin' && (
                <div className="mt-4">
                    <h6>Создать нового пользователя</h6>

                    <form>
                        <Input
                            key="login"
                            name="login"
                            label="Логин"
                            maxLength="20"
                            type="text"
                            onChange={handleChange}
                        />

                        <Input
                            key="password"
                            name="password"
                            label="Пароль"
                            maxLength="20"
                            type="password"
                            onChange={handleChange}
                        />
                    </form>

                    {error && (<Error>Пользователь с таким логином уже существует</Error>)}

                    {isSuccess && (<Success>Пользователь создан</Success>)}

                    <Button
                        onClick={handleSignUp}
                        label="Сохранить пользователя"
                        classes="btn btn-outline-success my-4"
                    />
                </div>
            )}
        </Block>
    );
}

export default ProfilePage;