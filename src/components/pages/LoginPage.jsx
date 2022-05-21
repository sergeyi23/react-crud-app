import React, {useState} from 'react';
import { setCookie, signIn } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Input from "../common/Input";
import Button from "../common/Button";

const initialData = {
    "login": "",
    "password": ""
};

const Block = styled.div`
    width: 20vw;
    height: 20vw;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    transform: translate(160%, -50%)
`;

const Error = styled.span`
  margin-top: 10px;
  color: orangered;
  text-align: center;
`;

const LoginPage = ({setLoginStatus}) => {
    const [data, setData] = useState(initialData);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { currentTarget : input } = event;
        const newData = {...data};
        newData[input.name] = input.value;
        setData(newData)
    }

    const handleLogin = async() => {
        const response = await signIn(data);
        if (response.status) {
            setCookie(response.role);
            setLoginStatus(true);
            navigate('/');
        }
        else
            setError(true);
    }

    return (
        <Block>
            <h2 className="d-flex justify-content-center">Вход</h2>

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

            {error && (<Error>Неверный логин и/или пароль</Error>)}

            <Button
                onClick={handleLogin}
                label="Войти"
                classes="btn btn-outline-success my-4"
            />
        </Block>
    );
}

export default LoginPage;