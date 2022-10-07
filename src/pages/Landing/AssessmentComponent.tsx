import React from 'react'
import { Col, Container, Row, Badge, Card } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// types
import { Assessment } from './landing';
import { Link } from 'react-router-dom';

type AssessmentProps = {
    Assessments: Assessment[];
};

const AssessmentComponent = ({ Assessments }: AssessmentProps) => {
    return (
        <section className="my-lg-5 py-5 py-sm-7 bg-gradient2 position-relative">
            <div className="divider top d-none d-sm-block"></div>
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                            Why Choose Us
                        </Badge>
                        <h1 className="display-5 fw-medium">
                            TRUSTED SKILLS TESTS AND BEHAVIORAL ASSESSMENTS FOR EMPLOYERS
                        </h1>
                        <p className="text-muted mx-auto">
                            Accelerating the Impact of Talent Leaders
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {(Assessments || []).map((Assessment, index) => {
                        return (
                            <Col lg={6} key={index.toString()}>
                                <Card className="shadow">
                                    <Card.Body>
                                        <div className="d-flex text-align-start">
                                            <span className="align-self-center bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-xs text-primary me-4 flex-shrink-0">
                                                <FeatherIcon icon={Assessment.icon} className="icon-dual-primary" />
                                            </span>
                                            <div className="flex-grow-1">
                                                <h5 className="mt-0">{Assessment.title}</h5>
                                                <p className="mb-0">{Assessment.description}</p>
                                                <Link to='/' className='text-primary'>{Assessment.link}</Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default AssessmentComponent