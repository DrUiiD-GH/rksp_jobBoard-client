import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {JOB_BOARD_ROUTE, LOGIN_ROUTE, MY_VACANCIES_ROUTE} from "../utils/consts";
import {NavLink, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";


const NavBar = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const logOut = ()=>{
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        navigate(JOB_BOARD_ROUTE)
    }
    return (
        <Navbar bg="dark" variant="light">
            <Container>
                <NavLink to={JOB_BOARD_ROUTE} style={{color:'white', fontSize:32, textDecoration:'none'}}>JOB BOARD</NavLink>
                {
                    user.isAuth ?
                        <Nav className="ml-auto">
                            <Button
                                variant="outline-light"
                                onClick={()=>navigate(MY_VACANCIES_ROUTE)}
                            >
                                Мои вакансии
                            </Button>
                            <Button
                                variant="outline-light"
                                style={{marginLeft:10}}
                                onClick={()=>logOut()}
                            >
                                Выйти
                            </Button>
                        </Nav>
                        :
                        <Nav className="ml-auto">
                            <Button variant="outline-light" onClick={()=>navigate(LOGIN_ROUTE)}>Авторизоваться</Button>
                        </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;