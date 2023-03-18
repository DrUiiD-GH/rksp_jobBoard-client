import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Filter from "../components/Filter";

const JobBoard = () => {
    return (
        <Container className="pt-3">
            <Row>
                <Col md={3}>
                    <Filter/>
                </Col>
                <Col md={9}>

                </Col>
            </Row>
        </Container>
    );
};

export default JobBoard;