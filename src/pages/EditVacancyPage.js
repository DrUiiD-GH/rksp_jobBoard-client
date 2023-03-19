import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {Context} from "../index";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {CREAT_NEW_VACANCY_ROUTE, VACANCY_ROUTE} from "../utils/consts";
import {fetchCategories, fetchEmployments, fetchExperience, fetchSchedules} from "../http/filtersApi";
import {observer} from "mobx-react-lite";
import {createVacancy, editVacancy, fetchOneVacancy} from "../http/vacancyApi";

const EditVacancyPage = observer(() => {
    const location = useLocation()
    let {id} = useParams()
    const isCreate = location.pathname === CREAT_NEW_VACANCY_ROUTE
    const {vacancy} = useContext(Context)
    const navigate = useNavigate()
    useEffect(()=>{
        fetchEmployments().then(data => vacancy.setEmployments(data))
        fetchCategories().then(data => vacancy.setCategories(data))
        fetchSchedules().then(data => vacancy.setSchedules(data))
        fetchExperience().then(data => vacancy.setExperiences(data))
    }, [])

    useEffect(()=>{
        if(!isCreate){
            fetchOneVacancy(id).then(data=>{
                setSelectedCategory(data.categoryId)
                setTitle(data.title)
                setNameCompany(data.nameCompany)
                setSalaryFrom(data.salaryFrom)
                setSalaryTo(data.salaryTo)
                setSelectedEmployment(data.employmentId)
                setSelectedSchedule(data.scheduleId)
                setSelectedExperience(data.experienceId)
                setContacts(data.contacts)
                setDescription(data.description.text)

            })
        }
    }, [])


    const toNumber = (i)=>{
        i = Number(i)
        if(i===0){
            return null
        }else {
            return i
        }
    }
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [title, setTitle] = useState('')
    const [nameCompany, setNameCompany] = useState('')
    const [salaryFrom, setSalaryFrom] = useState(null)
    const [salaryTo, setSalaryTo] = useState(null)
    const [selectedEmployment, setSelectedEmployment] = useState(null)
    const [selectedSchedule, setSelectedSchedule] = useState(null)
    const [selectedExperience, setSelectedExperience] = useState(null)
    const [contacts, setContacts] = useState('')
    const [description, setDescription] = useState('')



    const addVacancy = async ()=>{
        try {
            if (isCreate) {
                createVacancy(
                    title,
                    nameCompany,
                    salaryFrom,
                    salaryTo,
                    contacts,
                    selectedCategory,
                    selectedEmployment,
                    selectedSchedule,
                    selectedExperience,
                    description
                ).then(data => navigate(VACANCY_ROUTE+'/'+data.id))
            }else {
                editVacancy(id,
                    title,
                    nameCompany,
                    salaryFrom,
                    salaryTo,
                    contacts,
                    selectedCategory,
                    selectedEmployment,
                    selectedSchedule,
                    selectedExperience,
                    description
                    ).then(data => {
                        console.log(data)
                    navigate(VACANCY_ROUTE+'/'+id)
                    }
                )
            }

        }catch (e){
            console.log(e.message)
        }
    }

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
                                    <Form.Control size="lg" type="number" value={Number(salaryFrom)} onChange={e =>setSalaryFrom(e.target.value)}/>
                                </Col>
                            </Row>
                            <Row className={"mt-3"}>
                                <Form.Label column="lg" lg={1}>
                                    До:
                                </Form.Label>
                                <Col>
                                    <Form.Control size="lg" type="number"  value={Number(salaryTo)} onChange={e =>setSalaryTo(e.target.value)}/>
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
                        <Button size="lg" variant="success" onClick={addVacancy}>{isCreate?'Разместить вакансию':'Подвердить изменения'}</Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default EditVacancyPage;