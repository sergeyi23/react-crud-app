import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import { clearCookie } from "../../services/authService";

const Nav = styled.header`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  z-index: 10;
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
`;

const A = styled.a`
  text-decoration: none;
  color: #282c34;
  margin-right: 10px;
  
  :hover {
    color: #282c34;
  }
`;

const Navbar = ({loginStatus, setLoginStatus}) => {
    return (
        <Nav>
            <Item>
                <A href="/">
                    <strong>Рецепты блюд</strong>
                </A>
                <A href="/dishes">Блюда</A>
                <A href="/ingredients">Ингредиенты</A>
                <A href="/queries">Запросы</A>
            </Item>

            <Item>
                {!loginStatus && (
                    <A href="/login">Войти</A>
                )}
                {loginStatus && (
                    <div>
                        <A href="/profile">Профиль</A>
                        <A
                            href="/"
                            onClick={() => { clearCookie(); setLoginStatus(false); }}
                        >
                            Выйти
                        </A>
                    </div>
                )}
            </Item>
        </Nav>
    )
}

export default Navbar;