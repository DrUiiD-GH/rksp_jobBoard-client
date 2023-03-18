import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Filter from "../components/jobBoard/Filter";
import VacancyList from "../components/jobBoard/VacancyList";

const JobBoard = () => {
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
};

export default JobBoard;