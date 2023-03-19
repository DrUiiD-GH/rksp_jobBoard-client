import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Filter from "../components/jobBoard/Filter";
import VacancyList from "../components/jobBoard/VacancyList";
import {observer} from "mobx-react-lite";
import {fetchCategories, fetchEmployments, fetchExperience, fetchSchedules} from "../http/filtersApi";
import {Context} from "../index";
import {fetchVacancies} from "../http/vacancyApi";

const JobBoard = observer(() => {
    const {vacancy} = useContext(Context)
    useEffect(()=>{
        fetchEmployments().then(data => vacancy.setEmployments(data))
        fetchCategories().then(data => vacancy.setCategories(data))
        fetchSchedules().then(data => vacancy.setSchedules(data))
        fetchExperience().then(data => vacancy.setExperiences(data))
        fetchVacancies().then(data => vacancy.setVacancies(data))
    }, [])
    return (
        <Container className="pt-3">
            <Row>
                <Col md={3}>
                    <Filter/>
                </Col>
                <Col md={6}>
                    <VacancyList/>
                </Col>
            </Row>
        </Container>
    );
});

export default JobBoard;