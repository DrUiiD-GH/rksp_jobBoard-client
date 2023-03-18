import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import MyVacancyList from "../components/myVacancies/MyVacancyList";
import {useNavigate} from "react-router-dom";
import {CREAT_NEW_VACANCY_ROUTE} from "../utils/consts";

const MyVacancies = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <Container className="pt-3">
                <Row>
                    <Col md={3}>
                    </Col>
                    <Col md={6}>
                        <MyVacancyList/>
                    </Col>
                    <Col md={3}>
                        <div className="d-flex justify-content-center">
                            <Button variant="warning" style={{height:70}} onClick={()=>navigate(CREAT_NEW_VACANCY_ROUTE)}>Разместить новую вакансию</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default MyVacancies;