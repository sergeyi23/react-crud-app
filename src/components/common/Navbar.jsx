import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import { clearCookie } from "../../services/authService";
import {Link} from "react-router-dom";

const Nav = styled.header`
  position: sticky;
  display: grid;
  top: 0;
  z-index: 10;
  grid-template-columns: 1fr 1fr;
  height: 40px;
  margin: 15px 0;
  background-color: white;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 0;
  
  :last-child {
    margin-left: auto;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #282c34;
  margin: 0 14px 0 0;

  :hover {
    color: #282c34;
  }
`;

const Navbar = ({loginStatus, setLoginStatus, login}) => {
    return (
        <Nav>
            <Item>
                <StyledLink to="/">
                    <strong>Рецепты блюд</strong>
                </StyledLink>

                <StyledLink to="/dishes">
                    Блюда
                </StyledLink>

                <StyledLink to="/ingredients">
                    Ингредиенты
                </StyledLink>

                <StyledLink to="/queries">
                    Запросы
                </StyledLink>
            </Item>

            <Item>
                {!loginStatus && (
                    <StyledLink to="/login">
                        Войти
                    </StyledLink>
                )}
                {loginStatus && (
                    <div className="d-inline-flex">
                        <StyledLink to="/profile">
                            {login}
                        </StyledLink>

                        <StyledLink
                            to="/"
                            onClick={() => { clearCookie(); setLoginStatus(false); }}
                        >
                            Выйти
                        </StyledLink>
                    </div>
                )}
            </Item>
        </Nav>
    )
}

export default Navbar;