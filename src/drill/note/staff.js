import React, {useContext, useState} from 'react';
import { Card, CardBody, CardHeader, CardFooter, Row, Col } from 'reactstrap';
import ScoreBoard from '../component/score_board';
import StaffVisualizer from './component/staff_visualizer';
import Instrument from './component/instrument';
import {Notes, getRandomNote} from '../logic/source';
import {GameStateContext} from "../context";

const NoteStaff = props =>{

    const {increaseCorrect, increaseIncorrect, startTimer, resetTimer} = useContext(GameStateContext);

    const [assignment, setAssignment] = useState(getRandomNote());
    const [answer, setAnswer] = useState([]);
    const [status, setStatus] = useState(0);// 0:1:2 still thinking/correct/wrong

    const onNoteSelect = note =>{
        if(status === 0){
            setAnswer([note]);
        }
    };

    const checkAnswer = () =>{
        let note = Notes[assignment.index];
        if(answer.length === 0){
            let correctionAnswers = [];

            note.guitar.forEach(string => {
                correctionAnswers.push({
                    index: assignment.index,
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
            if(answer[0].index === assignment.index){

                let correctionAnswers = [];
                note.guitar.forEach(string => {
                    correctionAnswers.push({
                        index: assignment.index,
                        noteIndex: 0,
                        color: string === answer[0].string?'green':'orange',
                        string: string,
                        readOnly: true
                    })
                });

                setStatus(1);
                setAnswer(correctionAnswers);
                increaseCorrect();
            }
            else{
                let correctionAnswers = [{...answer[0], color: 'red'}];
                note.guitar.forEach(string => {
                    correctionAnswers.push({
                        index: assignment.index,
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
            setAnswer([]);
            setAssignment(getRandomNote());
            setStatus(0);
        }
    };

    return <Card>
        <CardHeader>
            Name Note on Staff
        </CardHeader>
        <CardBody>
            <Row>
                <Col md={4} sm={12}>
                    <StaffVisualizer isEditable={false} notes={[assignment]} isHarmony={true}/>
                </Col>
                <Col md={8} sm={12}>
                    <Instrument
                        notes={answer}
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

export default NoteStaff;