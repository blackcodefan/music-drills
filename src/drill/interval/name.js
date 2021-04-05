import React, {useContext, useState} from 'react';
import { Card, CardBody, CardHeader, CardFooter, Row, Col, Button } from 'reactstrap';
import StaffVisualizer from './component/staff_visualizer';
import Instrument from './component/instrument';
import {getRandomInterval, getRandomNoteForInterval, getRandomNotesForInterval, Intervals} from "../logic/source";
import {GameStateContext} from "../context";
import ScoreBoard from "../component/score_board";

const IntervalName = props =>{

    const answers = new Array(14);
    answers.fill(0);

    const {increaseCorrect, increaseIncorrect, startTimer, resetTimer} = useContext(GameStateContext);
    const temp = getRandomInterval();
    const [assignment, setAssignment] = useState(temp);
    const [assignmentNotes, setAssignmentNotes] = useState(getRandomNotesForInterval(temp.space));
    const [answer, setAnswer] = useState(answers);
    const [status, setStatus] = useState(0);

    const set = index =>{
        let newAnswer = [...answers];
        newAnswer[index] = 1;
        setAnswer(newAnswer);
    };

    const checkAnswer = () =>{
        let answerIndex = answer.indexOf(1);
        let newAnswer = [...answers];
        if(answerIndex === -1){
            newAnswer[assignment.index] = 3;
            setAnswer(newAnswer);
            setStatus(2);
            increaseIncorrect()
        }else{
            if(answerIndex === assignment.index){
                newAnswer[assignment.index] = 2;
                setAnswer(newAnswer);
                setStatus(1);
                increaseCorrect();
            }else{
                newAnswer[assignment.index] = 2;
                newAnswer[answerIndex] = 3;
                setAnswer(newAnswer);
                setStatus(2);
                increaseIncorrect();
            }
        }
    };

    const onSubmit = () =>{
        startTimer();
        if(status === 0) checkAnswer();
        else{
            resetTimer();
            setAnswer([...answers]);
            const temp = getRandomInterval();
            setAssignment(temp);
            setAssignmentNotes(getRandomNotesForInterval(temp.space));
            setStatus(0);
        }
    };


    return <Card>
        <CardHeader>
            Name the Interval
        </CardHeader>
        <CardBody>
            <Row>
                <Col md={4} sm={12}>
                    <StaffVisualizer isEditable={false} notes={assignmentNotes} isHarmony={true}/>
                </Col>
                <Col md={8} sm={12}>
                    <Instrument notes={assignmentNotes}/>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Card className="border-primary">
                        <CardHeader>
                            Select Interval Names
                        </CardHeader>
                        <CardBody>
                            <Row>
                                {
                                    Intervals.map(interval => (
                                        <Col md={2} sm={3} xs={6} key={interval.index}>
                                            <Button
                                                color={answer[interval.index] === 0 || answer[interval.index] === 1?"primary":answer[interval.index] === 2?"success":"danger"}
                                                outline={answer[interval.index] !== 1}
                                                style={{marginBottom: '10px'}}
                                                onClick={() => set(interval.index)}>
                                                {interval.shortName}
                                                </Button>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </CardBody>
                        <CardFooter className="text-center">
                            <Button color={
                                status === 0?
                                    "primary":status === 1?
                                    "success":"danger"} onClick={onSubmit}>
                                {
                                    status === 0?'Answer':'Next'
                                }
                            </Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </CardBody>
        <CardFooter className="text-center">
            <ScoreBoard/>
        </CardFooter>
    </Card>;
};

export default IntervalName;