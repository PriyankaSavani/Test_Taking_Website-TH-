import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

// component
import NavbarComponent from '../../components/NavbarComponent'
import Footer from '../../components/Footer'

const Result = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/')
    }

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
            <Container className='mt-5'>
                <Button onClick={handleBack} variant='outline-secondary' className='mt-4'>Back</Button>
                <h1>Test Submissions - Test #1</h1>
                <h3>Laura S. Fitzgibbon (username: fitzgibbon)</h3>
                <Table bordered hover className='mt-5'>
                    <thead>
                        <tr>
                            <th>Individual Attempts</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Attampt 1</td>
                            <td>1/1 - 100%</td>
                        </tr>
                        <tr>
                            <td>Attampt 2</td>
                            <td>1/1 - 80%</td>
                        </tr>
                        <tr>
                            <td className='text-end'>
                                <span className='fw-bolder'>Overall Grade</span> (highest attempt):
                            </td>
                            <td>2/2 - 90%</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>

            {/* footer */}
            <Footer />
        </>
    )
}

export default Result