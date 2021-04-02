import React, {useState} from 'react';
import { Card, CardBody, CardHeader, CardFooter, Row, Col } from 'reactstrap';
import StaffVisualizer from './component/staff_visualizer';
import Instrument from './component/instrument';
import {Notes, getRandomNote} from '../logic/source';

const NoteStaff = props =>{

    const [assignment, setAssignment] = useState(getRandomNote());
    const [answer, setAnswer] = useState([]);
    const [status, setStatus] = useState(0);// 0:1:2 still thinking/correct/wrong

    const onNoteSelect = note =>{
        if(note.index !== 0 && status === 0){
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
                    color: 'yellow',
                    string: string,
                    readOnly: true
                })
            });
            setStatus(2);
            setAnswer(correctionAnswers);
        }else{
            if(answer[0].index === assignment.index){

                let correctionAnswers = [];
                note.guitar.forEach(string => {
                    correctionAnswers.push({
                        index: assignment.index,
                        noteIndex: 0,
                        color: string === answer[0].string?'green':'yellow',
                        string: string,
                        readOnly: true
                    })
                });

                setStatus(1);
                setAnswer(correctionAnswers);
            }
            else{
                let correctionAnswers = [{...answer[0], color: 'red'}];
                note.guitar.forEach(string => {
                    correctionAnswers.push({
                        index: assignment.index,
                        noteIndex: 0,
                        color: 'yellow',
                        string: string,
                        readOnly: true
                    })
                });
                setStatus(2);
                setAnswer(correctionAnswers);
            }
        }
    };

    const onSubmit = () =>{
        if(status === 0) checkAnswer();
        else{
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
                    <StaffVisualizer isEditable={false} notes={[assignment]} isHarmony={false}/>
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
            <Row>
                <Col md={4} sm={6} xs={6} className="text-success">Correct: 0</Col>
                <Col md={4} sm={6} xs={6} className="text-primary">Avg Time: 0:00</Col>
                <Col md={4} sm={6} xs={6} className="text-primary">Crt.answ. time: 0:00</Col>
                <Col md={4} sm={6} xs={6} className="text-danger">Incorrect: 0</Col>
                <Col md={4} sm={6} xs={6} className="text-primary">Last Answer: 0:00</Col>
                <Col md={4} sm={6} xs={6} className="text-primary">Total time: 0:00</Col>
            </Row>
        </CardFooter>
    </Card>;
};

export default NoteStaff;