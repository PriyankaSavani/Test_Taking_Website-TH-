import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Typist from 'react-text-typist';

// component
import { FormInput } from '../../components/form';

// images
import test from '../../assets/images/other/test.png';

const HeroComponent = () => {

    const navigate = useNavigate()

    const handleGetDemo = () => {
        navigate('/test')
    }

    return (
        <section className="position-relative overflow-hidden hero py-5">
            <Container>
                <Row className="align-items-center text-center text-sm-start">
                    <Col lg={6}>
                        <div>
                            <h1 className="mt-3 mb-4 pb-2 hero-title">
                                At <span className="highlight highlight-success d-inline-block">accusamus</span> et
                                iusto odio dignissimos ducimus qui blanditiis {' '}
                                <Typist
                                    sentences={['praesentium', 'voluptatum']}
                                    typingSpeed={100}
                                    deletingSpeed={60}
                                    cursorSmooth
                                />
                            </h1>
                            <p className="fs-16 text-muted">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam.
                            </p>
                            <div className="py-5">
                                <Row className="g-2 text-start">
                                    <Col sm="auto">
                                        <FormInput
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter Your Email"
                                            name={'email'}
                                        />
                                    </Col>
                                    <Col sm="auto">
                                        <Button onClick={handleGetDemo} className="mt-1 mt-sm-0">Get Demo</Button>
                                    </Col>
                                </Row>
                                <p className="text-muted mb-0 pt-2 fs-14">
                                    Already using TH? <Link to="/">Log In</Link>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ offset: 1, span: 5 }} className="hero-right">
                        <div className="img-container">
                            <img src={test} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default HeroComponent