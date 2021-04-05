import React, {useContext, useState} from 'react';
import { Card, CardBody, CardHeader, CardFooter, Row, Col } from 'reactstrap';
import Instrument from './component/instrument';
import {getRandomInterval, getRandomNoteForInterval, Notes} from "../logic/source";
import Widget from "../component/widget";
import {GameStateContext} from "../context";
import ScoreBoard from "../component/score_board";

const IntervalInstrument = props =>{

    const {increaseCorrect, increaseIncorrect, startTimer, resetTimer} = useContext(GameStateContext);
    const temp = getRandomInterval();
    const [assignment, setAssignment] = useState(temp);
    const [answer, setAnswer] = useState([getRandomNoteForInterval(temp.space)]);
    const [status, setStatus] = useState(0);

    const onNoteSelect = note =>{
        if(status === 0){
            setAnswer([answer[0], note]);
        }
    };

    const checkAnswer = () =>{
        let assignmentNote = Notes[answer[0].index];
        let answerNote = Notes[assignmentNote.index + assignment.space];
        if(answer.length === 1){
            let correctionAnswers = [answer[0]];

            answerNote.guitar.forEach(string => {
                correctionAnswers.push({
                    index: answerNote.index,
                    noteIndex: 0,
                    color: 'orange',
                    string: string,
                    readOnly: true
                })
            });
            setStatus(2);
            setAnswer(correctionAnswers);
            increaseIncorrect();
        }else{
            if(answer[1].index === answerNote.index){

                let correctionAnswers = [answer[0]];
                answerNote.guitar.forEach(string => {
                    correctionAnswers.push({
                        index: answerNote.index,
                        noteIndex: 0,
                        color: string === answer[1].string?'green':'orange',
                        string: string,
                        readOnly: true
                    })
                });

                setStatus(1);
                setAnswer(correctionAnswers);
                increaseCorrect();
            }
            else{
                let correctionAnswers = [answer[0], {...answer[1], color: 'red'}];
                answerNote.guitar.forEach(string => {
                    correctionAnswers.push({
                        index: answerNote.index,
                        noteIndex: 0,
                        color: 'orange',
                        string: string,
                        readOnly: true
                    })
                });
                setStatus(2);
                setAnswer(correctionAnswers);
                increaseIncorrect();
            }
        }
    };

    const onSubmit = () =>{
        startTimer();
        if(status === 0) checkAnswer();
        else{
            resetTimer();
            const temp = getRandomInterval();
            setAssignment(temp);
            setAnswer([getRandomNoteForInterval(temp.space)]);
            setStatus(0);
        }
    };

    return <Card>
        <CardHeader>
            Place Interval Note on Instrument
        </CardHeader>
        <CardBody>
            <Row>
                <Col md={4} sm={12}>
                    <Card className="border-primary">
                        <CardHeader>
                            Interval
                        </CardHeader>
                        <CardBody>
                            <Widget color="primary" header={assignment.fullName} mainText="Interval Qualifier"/>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={8} sm={12}>
                    <Instrument notes={answer}
                        onAnswer={onSubmit}
                        answerStatus={status}
                        onNoteSelect={onNoteSelect}
                    />
                </Col>
            </Row>
        </CardBody>
        <CardFooter className="text-center">
            <ScoreBoard/>
        </CardFooter>
    </Card>;
};

export default IntervalInstrument;