import React from 'react'
import { Button, Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

const IndustriesComponent = () => {

    const navigate = useNavigate()

    const handleGetDemo = () => {
        navigate('/test')
    }

    return (
        <section className="position-relative pb-6 pt-lg-6 pt-4 features">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <h3 className="fw-medium mb-5">Industries</h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} md={6}>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Call Center
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Accounting
                        </h6>
                    </Col>
                    <Col lg={3} md={6}>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Administration
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Engineering
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Health Care
                        </h6>
                    </Col>
                    <Col lg={3} md={6}>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Retail
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Manufacturing
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Sales
                        </h6>
                    </Col>
                    <Col lg={3} md={6}>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Satffing
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Education
                        </h6>
                    </Col>
                </Row>
                <Row className="mt-5 justify-content-center">
                    <Col xs="auto">
                        <Button onClick={handleGetDemo} className="btn-primary mb-2">
                            Get a Demo <FeatherIcon className="icon-xs ms-2" icon="arrow-right" />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default IndustriesComponent