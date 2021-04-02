import React, {useState} from 'react';
import { Card, CardBody, CardHeader, CardFooter, Row, Col } from 'reactstrap';
import StaffVisualizer from './component/staff_visualizer';
import Instrument from './component/instrument';
import {Notes, getRandomNote, RandomInt} from '../logic/source';

const NoteInstrument = props =>{

    const [assignment, setAssignment] = useState(getRandomNote());
    const [answer, setAnswer] = useState([]);
    const [status, setStatus] = useState(0);// 0:1:2 still thinking/correct/wrong

    const onStaffTap = note =>{
        if(note.index !== 0 && status === 0){
            setAnswer([note]);
        }
    };

    const onSharp = () =>{
        if(answer.length === 0) return;
        let newAnswer = {color: 'black', readOnly: false};

        let note = Notes[answer[0].index];

        if (note.note[0] !== 'e' && note.note[0] !== 'b'){

            if (note.accident.length === 0){
                newAnswer.index = note.index + 1;
                newAnswer.noteIndex = 0;
            }else{
                let accident = note.accident[answer[0].noteIndex];
                if (accident === '#'){
                    newAnswer.index = note.index;
                    newAnswer.noteIndex = answer[0].noteIndex;
                } else{
                    newAnswer.index = note.index + 2;
                    newAnswer.noteIndex = 0;
                }
            }
        }
        else{
            newAnswer.index = note.index;
            newAnswer.noteIndex = answer[0].noteIndex;
        }

        setAnswer([newAnswer]);
    };

    const onFlat = () => {
        if(answer.length === 0) return;
        let newAnswer = {color: 'black', readOnly: false};

        let note = Notes[answer[0].index];

        if (note.note[0] !== 'c' && note.note[0] !== 'f'){

            if (note.accident.length === 0){
                newAnswer.index = note.index - 1;
                newAnswer.noteIndex = 1;
            }else{
                let accident = note.accident[answer[0].noteIndex];
                if (accident === '#'){
                    newAnswer.index = note.index - 2;
                    newAnswer.noteIndex = 1;
                } else{
                    newAnswer.index = note.index;
                    newAnswer.noteIndex = answer[0].noteIndex;
                }
            }
        }
        else{
            newAnswer.index = note.index;
            newAnswer.noteIndex = answer[0].noteIndex;
        }

        setAnswer([newAnswer]);
    };

    const onNatural = () => {
        if(answer.length === 0) return;
        let newAnswer = {color: 'black', readOnly: false};

        let note = Notes[answer[0].index];

        if (note.accident.length === 0){
            newAnswer.index = note.index - 1;
            newAnswer.noteIndex = 1;
        }else{
            let accident = note.accident[answer[0].noteIndex];
            if (accident === '#'){
                newAnswer.index = note.index - 1;
                newAnswer.noteIndex = 0;
            } else{
                newAnswer.index = note.index + 1;
                newAnswer.noteIndex = 0;
            }
        }

        setAnswer([newAnswer]);
    };

    const onDel = () =>{
        setAnswer([]);
    };

    const onClear = () =>{
        setAnswer([]);
    };

    const checkAnswer = () =>{
        let note = Notes[assignment.index];
        if(answer.length === 0){
            let correctionAnswer = {
                index: assignment.index,
                noteIndex: 0,
                color: 'red',
                string: note.guitar[RandomInt(0, note.guitar.length - 1)],
                readOnly: true
            };

            setStatus(2);
            setAnswer([correctionAnswer]);
        }else{
            if(answer[0].index === assignment.index){

                let correctionAnswer = {
                    index: assignment.index,
                    noteIndex: 0,
                    color: 'green',
                    string: note.guitar[RandomInt(0, note.guitar.length - 1)],
                    readOnly: true
                };

                setStatus(1);
                setAnswer([correctionAnswer]);
            }
            else{
                let correctionAnswers = [{...answer[0], color: 'red'}];
                correctionAnswers.push({
                    index: assignment.index,
                    noteIndex: 0,
                    color: 'orange',
                    string: note.guitar[RandomInt(0, note.guitar.length - 1)],
                    readOnly: true
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
            Name Note on Instrument
        </CardHeader>
        <CardBody>
            <Row>
                <Col md={8} sm={12}>
                    <Instrument notes={[assignment]}/>
                </Col>
                <Col md={4} sm={12}>
                    <StaffVisualizer
                        notes={answer} isHarmony={true}
                        onStaffTap={onStaffTap}
                        onSharp={onSharp}
                        onFlat={onFlat}
                        onNatural={onNatural}
                        onDel={onDel}
                        onClear={onClear}
                        onAnswer={onSubmit}
                        answerStatus={status}
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

export default NoteInstrument;