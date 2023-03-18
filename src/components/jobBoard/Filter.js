import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Form, FormGroup, ListGroup} from "react-bootstrap";

const Filter = observer(() => {
    const {vacancy} = useContext(Context)
    return (
        <ListGroup>
            {/*Категория*/}
            <ListGroup.Item >
                <FormGroup className="pb-2">
                    <Form.Label>
                        Категория
                    </Form.Label>

                    <Form.Select size="sm">
                        <option onChange={()=>vacancy.setSelectedCategory({})}>Выберите категорию</option>
                        {vacancy.categories.map(category =>
                            <option key={category.id} onChange={()=>vacancy.setSelectedCategory(category)}>{category.name}</option>
                        )}
                    </Form.Select>
                </FormGroup>
            </ListGroup.Item>
            {/*Занятость*/}
            <ListGroup.Item>
                    <Form.Group className="mb-2">
                        <Form.Label>
                            Занятость
                        </Form.Label>
                        <Form>
                            <Form.Check
                                type="radio"
                                label='Не важно'
                                name="formHorizontalRadios"
                                id='0'
                                onChange={() => vacancy.setSelectedEmployment({})}
                            />
                            {vacancy.employments.map(employment =>
                                <Form.Check
                                    key={employment.id}
                                    type="radio"
                                    label={employment.name}
                                    name="formHorizontalRadios"
                                    id={employment.id}
                                    onChange={() => vacancy.setSelectedEmployment(employment)}
                                />)}
                        </Form>
                    </Form.Group>
            </ListGroup.Item>
            {/*График работы*/}
            <ListGroup.Item>
                <Form.Group className="mb-2">
                    <Form.Label>
                        График работы
                    </Form.Label>
                    <Form>
                        <Form.Check
                            type="radio"
                            label='Не важно'
                            name="formHorizontalRadios"
                            id='0'
                            onChange={() => vacancy.setSelectedSchedule({})}
                        />
                        {vacancy.schedules.map(schedule =>
                            <Form.Check
                                key={schedule.id}
                                type="radio"
                                label={schedule.name}
                                name="formHorizontalRadios"
                                id={schedule.id}
                                onChange={() => vacancy.setSelectedSchedule(schedule)}
                            />)}
                    </Form>
                </Form.Group>
            </ListGroup.Item>
            {/*Опыт работы*/}
            <ListGroup.Item>
                <Form.Group className="mb-2">
                    <Form.Label>
                        Опыт работы
                    </Form.Label>
                    <Form>
                        <Form.Check
                            type="radio"
                            label='Не важно'
                            name="formHorizontalRadios"
                            id='0'
                            onChange={() => vacancy.setSelectedExperience()}
                        />
                        {vacancy.experiences.map(experience =>
                            <Form.Check
                                key={experience.id}
                                type="radio"
                                label={experience.name}
                                name="formHorizontalRadios"
                                id={experience.id}
                                onChange={() => vacancy.setSelectedExperience(experience)}
                            />)}
                    </Form>
                </Form.Group>
            </ListGroup.Item>
        </ListGroup>
    );
});

export default Filter;