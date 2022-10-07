import React from 'react'
import classNames from 'classnames'
import { Button, Col, Container, Nav, Tab, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

// component
import NavbarComponent from '../../components/NavbarComponent'
import Test1 from './Test1'
import Test2 from './Test2'
import Footer from '../../components/Footer'

const Test = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/')
    }

    const Questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <>
            {/* navbar */}
            <div className='header-1'>
                <NavbarComponent
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-primary btn-sm"
                    fixedWidth
                />
            </div>

            {/* content */}
            <Container>
                <Row>
                    <Col xl={4}>
                        <Button onClick={handleBack} variant='outline-secondary' className='mt-4'>Back</Button>
                        <h3>Questions</h3>
                        <div className='button-list mb-3'>
                            {(Questions || []).map((question, index) => {
                                return (
                                    <button
                                        key={index}
                                        className={
                                            classNames(
                                                'btn',
                                                index % 5 === 0 ? 'btn-primary' : 'btn-outline-primary'
                                            )
                                        }
                                    >
                                        Question {question}
                                    </button>
                                )
                            })}
                        </div>
                        <p>(2 / 10 questions are attained)</p>
                    </Col>
                    <Col xl={8}>
                        <Tab.Container id="test" defaultActiveKey="test1">
                            <Nav variant="tabs" className="p-4">
                                <Nav.Item>
                                    <Nav.Link eventKey="test1">Test 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="test2">Test 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="test1">
                                    <Test1 />
                                </Tab.Pane>
                                <Tab.Pane eventKey="test2">
                                    <Test2 />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>

            {/* footer */}
            <Footer />
        </>
    )
}

export default Test