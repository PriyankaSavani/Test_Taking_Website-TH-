import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

// images
import code from '../../assets/images/other/code.jpg';

const ServiceComponent = () => {
    return (
        <section className="position-relative py-xl-8 py-6 features">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5}>
                        <div className="mb-5 mb-lg-0">
                            <span className="align-self-center bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-xs text-primary me-3">
                                <FeatherIcon icon="code" className="icon-dual-primary" />
                            </span>
                            <h1 className=" mb-1 my-4">Solutions for Your Unique Skills Testing Needs</h1>
                            <p className="text-muted my-4">
                                By applying eSkill’s integrated approach to pre-employment and behavioral assessments you can
                                test skills, knowledge, communication abilities, and other attributes completely and accurately.
                            </p>
                            <Link to="/" className="btn btn-primary me-2">
                                View All Services
                            </Link>
                        </div>
                    </Col>
                    <Col lg={{ offset: 1, span: 6 }}>
                        <img src={code} alt="app img" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ServiceComponent