import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap'
import { collection, getDocs } from 'firebase/firestore'

// component
import Scrollbar from '../../components/Scrollbar';

// data base
import { db } from '../../lib/firebase';

const Test1 = () => {

    const [questions, setQuestions] = useState<any>([])
    const [result, setResult] = useState<number>(0)
    const navigate = useNavigate();

    // handle Submit test
    const handleSubmit = ({ isCorrect }: any) => {
        navigate("/result");
        if (isCorrect === true) {
            setResult(result + 1)
        }
    };

    // handle get all the questions from firebase
    const handleGetQuestionsData = () => {
        const questionList = collection(db, 'Test1')

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
                    const ans = question.data.Answers
                    return (
                        <React.Fragment key={index}>
                            <h4 className="px-4">Question {index + 1}  </h4>
                            <p className="px-4">{question.data.que}</p>
                            {ans !== undefined &&
                                <div className="px-4">
                                    <div className="test_answer">
                                        <div className="test_answer_item">
                                            <Form.Check
                                                type="checkbox"
                                                id={`test-1-que-${index + 1}-ans-1`}
                                                label={ans.ans_1[0]}
                                                name={`test-1-que-${index + 1}-ans-1`}
                                            />
                                            <div className="test_answer_check_inner"></div>
                                            <div className="test_answer_check_outer"></div>
                                        </div>
                                        <div className="test_answer_item">
                                            <Form.Check
                                                type="checkbox"
                                                id={`test-1-que-${index + 1}-ans-2`}
                                                label={ans.ans_2[0]}
                                                name={`test-1-que-${index + 1}-ans-2`}
                                            />
                                            <div className="test_answer_check_inner"></div>
                                            <div className="test_answer_check_outer"></div>
                                        </div>
                                        <div className="test_answer_item">
                                            <Form.Check
                                                type="checkbox"
                                                id={`test-1-que-${index + 1}-ans-3`}
                                                label={ans.ans_3[0]}
                                                name={`test-1-que-${index + 1}-ans-3`}
                                            />
                                            <div className="test_answer_check_inner"></div>
                                            <div className="test_answer_check_outer"></div>
                                        </div>
                                        <div className="test_answer_item">
                                            <Form.Check
                                                type="checkbox"
                                                id={`test-1-que-${index + 1}-ans-4`}
                                                label={ans.ans_4[0]}
                                                name={`test-1-que-${index + 1}-ans-4`}
                                            />
                                            <div className="test_answer_check_inner"></div>
                                            <div className="test_answer_check_outer"></div>
                                        </div>
                                    </div>
                                </div>
                            }
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

export default Test1