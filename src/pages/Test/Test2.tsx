import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap'
import { collection, getDocs } from 'firebase/firestore'

// component
import Scrollbar from '../../components/Scrollbar';

// database
import { db } from '../../lib/firebase';

const Test2 = () => {

    const [questions, setQuestions] = useState<any>([])
    const navigate = useNavigate();

    // handle Submit test
    const handleSubmit = () => {
        navigate("/result");
    };

    // handle get all the questions from firebase
    const handleGetQuestionsData = () => {
        const questionList = collection(db, 'Test2')

        getDocs(questionList)
            .then(res => {
                const que = res.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id
                }))
                setQuestions(que)
            })
            .catch(err => console.log(err.message))
    }

    useEffect(() => {
        handleGetQuestionsData()
    }, [])

    return (
        <>
            <Scrollbar style={{ minHeight: "100%" }}>
                {(questions || []).map((question: any, index: any) => {
                    return (
                        <React.Fragment key={index}>
                            <h4 className="px-4">Question {index + 1}  </h4>
                            <p className="px-4">{question.data.que}</p>
                            <div className="px-4">
                                <div className="test_answer">
                                    <div className="test_answer_item">
                                        <Form.Check
                                            type="radio"
                                            id={`test-1-que-${index + 1}-ans-1`}
                                            label={question.data.ans_1}
                                            name={`test-1-que-${index + 1}-ans-1`}
                                        />
                                        <div className="test_answer_check_inner"></div>
                                        <div className="test_answer_check_outer"></div>
                                    </div>
                                    <div className="test_answer_item">
                                        <Form.Check
                                            type="radio"
                                            id={`test-1-que-${index + 1}-ans-2`}
                                            label={question.data.ans_2}
                                            name={`test-1-que-${index + 1}-ans-2`}
                                        />
                                        <div className="test_answer_check_inner"></div>
                                        <div className="test_answer_check_outer"></div>
                                    </div>
                                    <div className="test_answer_item">
                                        <Form.Check
                                            type="radio"
                                            id={`test-1-que-${index + 1}-ans-3`}
                                            label={question.data.ans_3}
                                            name={`test-1-que-${index + 1}-ans-3`}
                                        />
                                        <div className="test_answer_check_inner"></div>
                                        <div className="test_answer_check_outer"></div>
                                    </div>
                                    <div className="test_answer_item">
                                        <Form.Check
                                            type="radio"
                                            id={`test-1-que-${index + 1}-ans-4`}
                                            label={question.data.ans_4}
                                            name={`test-1-que-${index + 1}-ans-4`}
                                        />
                                        <div className="test_answer_check_inner"></div>
                                        <div className="test_answer_check_outer"></div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })}
            </Scrollbar>
            <div className="d-flex align-items-center justify-content-between m-3">
                <a href="?#" className="link-primary">
                    Clear Form
                </a>
                <div id="submit">
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </>
    )
}

export default Test2