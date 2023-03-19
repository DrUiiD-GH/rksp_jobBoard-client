import React, {useContext,  useState} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {Context} from "../index";
import {useLocation} from "react-router-dom";
import {CREAT_NEW_VACANCY_ROUTE} from "../utils/consts";

const EditVacancyPage = () => {
    const location = useLocation()
    const isCreate = location.pathname === CREAT_NEW_VACANCY_ROUTE

    const toNumber = (i)=>{
        i = Number(i)
        if(i===0){
            return null
        }else {
            return i
        }
    }



    //Для редактирования использовать UseEffect для подгрузки данных по id из useParams + подгружать фильтр(категории, занятость)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [title, setTitle] = useState('')
    const [nameCompany, setNameCompany] = useState('')
    const [salaryFrom, setSalaryFrom] = useState()
    const [salaryTo, setSalaryTo] = useState()
    const [selectedEmployment, setSelectedEmployment] = useState(null)
    const [selectedSchedule, setSelectedSchedule] = useState(null)
    const [selectedExperience, setSelectedExperience] = useState(null)
    const [contacts, setContacts] = useState('')
    const [description, setDescription] = useState('')

    const {vacancy} = useContext(Context)
    return (
        <Container className="mb-5">
            <Card className="mt-3">
                <h2 className=" align-self-center mt-3">{isCreate?'Новая вакансия':'Изменение вакансии'}</h2>
                <Form className='m-3'>
                    <Row className={"mt-3"}>
                        <Form.Label column="lg" lg={2}>
                            Категория:
                        </Form.Label>
                        <Col>
                            <Form.Select size={'lg'} onChange={e=>setSelectedCategory(toNumber(e.target.value))}>
                                <option value={0}>Выберите категорию</option>
                                {vacancy.categories.map(
                                    category=>
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                            )}
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className={"mt-3"}>
                        <Form.Label column="lg" lg={2}>
                            Должность:
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" type="text" placeholder="Введите должность..." value={title} onChange={e=>setTitle(e.target.value)}/>
                        </Col>
                    </Row>
                    <Row className={"mt-3"}>
                        <Form.Label column="lg" lg={2}>
                            Компания:
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" type="text" placeholder="Введите наименование компании..." value={nameCompany} onChange={e=>setNameCompany(e.target.value)}/>
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
                                    <Form.Control size="lg" type="number" value={Number(salaryFrom)}/>
                                </Col>
                            </Row>
                            <Row className={"mt-3"}>
                                <Form.Label column="lg" lg={1}>
                                    До:
                                </Form.Label>
                                <Col>
                                    <Form.Control size="lg" type="number"  value={Number(salaryTo)} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className={"mt-5"}>
                        <Form.Label column="lg" lg={2}>
                            Занятость:
                        </Form.Label>
                        <Col>
                            <Form.Select onChange={e=>setSelectedEmployment(toNumber(e.target.value))}>
                                <option value={0}>Любая</option>
                                {vacancy.employments.map(
                                    employment =>
                                        <option key={employment.id} value={employment.id}>{employment.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                    </Row>

                    <Row className={"mt-3"}>
                        <Form.Label column="lg" lg={2}>
                            График:
                        </Form.Label>
                        <Col>
                            <Form.Select onChange={e=>setSelectedSchedule(toNumber(e.target.value))}>
                                <option value={0}>Любой</option>
                                {vacancy.schedules.map(
                                    schedule =>
                                        <option key={schedule.id} value={schedule.id}>{schedule.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                    </Row>

                    <Row className={"mt-3"}>
                        <Form.Label column="lg" lg={2}>
                            Опыт работы:
                        </Form.Label>
                        <Col>
                            <Form.Select onChange={e=>setSelectedExperience(toNumber(e.target.value))}>
                                <option value={0}>Любой</option>
                                {vacancy.experiences.map(
                                    experience =>
                                        <option key={experience.id} value={experience.id}>{experience.name}</option>
                                )}
                            </Form.Select>
                        </Col>
                    </Row>

                    <Row className={"mt-3"}>
                        <Form.Label column="lg" lg={2}>
                            Контакты:
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" as="textarea" rows={2} value={contacts} onChange={e=>setContacts(e.target.value)}/>
                        </Col>
                    </Row>

                    <Row className={"mt-3"}>
                        <Form.Label column="lg" lg={2}>
                            Описание:
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" as="textarea" rows={10} value={description} onChange={e=>setDescription(e.target.value)}/>
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

export default EditVacancyPage;