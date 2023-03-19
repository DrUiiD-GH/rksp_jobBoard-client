import React, {useContext} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {Context} from "../index";
import {useLocation} from "react-router-dom";
import {CREAT_NEW_VACANCY_ROUTE} from "../utils/consts";

const CreateNewVacancyPage = () => {

    const location = useLocation()
    const isCreate = location.pathname === CREAT_NEW_VACANCY_ROUTE

    const {vacancy} = useContext(Context)
    return (
        <Container >
            <Card className="mt-3">
                <h2 className=" align-self-center mt-3">{isCreate?'Новая вакансия':'Изменение вакансии'}</h2>
                <Form className='m-3'>
                    <Row className={"mt-3"}>
                        <Form.Label column="lg" lg={2}>
                            Категория:
                        </Form.Label>
                        <Col>
                            <Form.Select size={'lg'}>
                                <option>Выберите категорию</option>
                                {vacancy.categories.map(
                                    category=>
                                        <option key={category.id}>{category.name}</option>
                                            )}
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className={"mt-3"}>
                        <Form.Label column="lg" lg={2}>
                            Должность:
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" type="text" placeholder="Введите должность..."/>
                        </Col>
                    </Row>
                    <Row className={"mt-3"}>
                        <Form.Label column="lg" lg={2}>
                            Компания:
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" type="text" placeholder="Введите наименование компании..."/>
                        </Col>
                    </Row>
                    <Row className={"mt-3"}>
                        <Form.Label column="lg" lg={2}>
                            Зарплата
                        </Form.Label>
                        <Col>
                            <Row className='mt-4'>
                                <Form.Label column="lg" lg={1}>
                                    От:
                                </Form.Label>
                                <Col>
                                    <Form.Control size="lg" type="number" />
                                </Col>
                            </Row>
                            <Row className={"mt-3"}>
                                <Form.Label column="lg" lg={1}>
                                    До:
                                </Form.Label>
                                <Col>
                                    <Form.Control size="lg" type="number" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className={"mt-5"}>
                        <Form.Label column="lg" lg={2}>
                            Занятость:
                        </Form.Label>
                        <Col>
                            <Form.Select>
                                <option>Любая</option>
                                {vacancy.employments.map(
                                    employment =>
                                        <option key={employment.id}>{employment.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                    </Row>

                    <Row className={"mt-3"}>
                        <Form.Label column="lg" lg={2}>
                            График:
                        </Form.Label>
                        <Col>
                            <Form.Select>
                                <option>Любой</option>
                                {vacancy.schedules.map(
                                    schedule =>
                                        <option key={schedule.id}>{schedule.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                    </Row>

                    <Row className={"mt-3"}>
                        <Form.Label column="lg" lg={2}>
                            Опыт работы:
                        </Form.Label>
                        <Col>
                            <Form.Select >
                                <option>Любой</option>
                                {vacancy.experiences.map(
                                    experience =>
                                        <option key={experience.id}>{experience.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                    </Row>

                    <Row className={"mt-3"}>
                        <Form.Label column="lg" lg={2}>
                            Контакты:
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" as="textarea" rows={2}/>
                        </Col>
                    </Row>

                    <Row className={"mt-3"}>
                        <Form.Label column="lg" lg={2}>
                            Описание:
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" as="textarea" rows={10}/>
                        </Col>
                    </Row>
                    <Row className={"mt-3 p-3"}>
                        <Button size="lg" variant="success">{isCreate?'Разместить вакансию':'Подвердить изменения'}</Button>
                    </Row>
                </Form>
            </Card>

        </Container>
    );
};

export default CreateNewVacancyPage;