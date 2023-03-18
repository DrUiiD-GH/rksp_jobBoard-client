import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, VACANCY_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const Auth = observer(() => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        let data;
        try{
            if (isLogin) {
                data = await login(email, password)
                console.log(data)

            } else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(VACANCY_ROUTE)
        }catch (e){
            alert(e.response.data.message)
        }
    }


    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height:window.innerHeight - 54}}
        >
            <Card style={{width:600}} className="p-5">
                <h2 className="m-auto">{isLogin?'Авторизация':'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        type='password'
                    />
                    <div className="d-flex justify-content-between mt-3">
                        {
                            isLogin?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегестрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Авторизуйтесь!</NavLink>
                            </div>
                        }

                        <Button
                            variant={"outline-success"}
                            className="align-self-end"
                            onClick={()=>click()}
                        >
                            {isLogin? 'Войти' : 'Зарегестрироваться'}
                        </Button>
                    </div>
                </Form>
            </Card>

        </Container>
    );
});

export default Auth;