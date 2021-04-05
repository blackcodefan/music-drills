import React, {useContext, useState} from 'react';
import { Card, CardBody, CardHeader, CardFooter, Row, Col} from 'reactstrap';
import StaffVisualizer from './component/staff_visualizer';
import Widget from "../component/widget";
import {getRandomInterval, getRandomNoteForInterval, Notes, RandomInt} from "../logic/source";
import {GameStateContext} from "../context";
import ScoreBoard from "../component/score_board";

const IntervalStaff = props =>{
    const {increaseCorrect, increaseIncorrect, startTimer, resetTimer} = useContext(GameStateContext);
    const temp = getRandomInterval();
    const [assignment, setAssignment] = useState(temp);
    const [answer, setAnswer] = useState([getRandomNoteForInterval(temp.space)]);
    const [status, setStatus] = useState(0);

    const onStaffTap = note =>{
        if(status === 0){
            setAnswer([answer[0], note]);
        }
    };

    const onSharp = () =>{
        if(answer.length === 1) return;
        let newAnswer = {color: 'black', readOnly: false};

        let note = Notes[answer[1].index];

        if (note.note[0] !== 'e' && note.note[0] !== 'b'){

            if (note.accident.length === 0){
                newAnswer.index = note.index + 1;
                newAnswer.noteIndex = 0;
            }else{
                let accident = note.accident[answer[1].noteIndex];
                if (accident === '#'){
                    newAnswer.index = note.index;
                    newAnswer.noteIndex = answer[1].noteIndex;
                } else{
                    newAnswer.index = note.index + 2;
                    newAnswer.noteIndex = 0;
                }
            }
        }
        else{
            newAnswer.index = note.index;
            newAnswer.noteIndex = answer[1].noteIndex;
        }

        setAnswer([answer[0], newAnswer]);
    };

    const onFlat = () => {
        if(answer.length === 1) return;
        let newAnswer = {color: 'black', readOnly: false};

        let note = Notes[answer[1].index];

        if (note.note[0] !== 'c' && note.note[0] !== 'f'){
            if (note.accident.length === 0){
                newAnswer.index = note.index - 1;
                newAnswer.noteIndex = 1;
            }else{

                let accident = note.accident[answer[1].noteIndex];
                if (accident === '#'){
                    newAnswer.index = note.index - 2;
                    newAnswer.noteIndex = 1;
                } else{
                    newAnswer.index = note.index;
                    newAnswer.noteIndex = answer[1].noteIndex;
                }
            }
        }
        else{
            newAnswer.index = note.index;
            newAnswer.noteIndex = answer[1].noteIndex;
        }

        setAnswer([answer[0], newAnswer]);
    };

    const onNatural = () => {
        if(answer.length === 1) return;
        let newAnswer = {color: 'black', readOnly: false};

        let note = Notes[answer[1].index];

        if (note.accident.length === 0){
            newAnswer.index = note.index - 1;
            newAnswer.noteIndex = 1;
        }else{
            let accident = note.accident[answer[1].noteIndex];
            if (accident === '#'){
                newAnswer.index = note.index - 1;
                newAnswer.noteIndex = 0;
            } else{
                newAnswer.index = note.index + 1;
                newAnswer.noteIndex = 0;
            }
        }

        setAnswer([answer[0], newAnswer]);
    };

    const onDel = () =>{
        setAnswer([answer[0]]);
    };

    const onClear = () =>{
        setAnswer([answer[0]]);
    };

    const checkAnswer = () =>{
        let assignmentNote = Notes[answer[0].index];
        let answerNote = Notes[assignmentNote.index + assignment.space];

        if(answer.length === 1){
            let correctionAnswer = {
                index: answerNote.index,
                noteIndex: 0,
                color: 'red',
                string: answerNote.guitar[RandomInt(0, answerNote.guitar.length - 1)],
                readOnly: true
            };

            setStatus(2);
            setAnswer([ answer[0],correctionAnswer]);
            increaseIncorrect();
        }else{
            if(answer[1].index === answerNote.index){

                let correctionAnswer = {
                    index: answerNote.index,
                    noteIndex: 0,
                    color: 'green',
                    string: answerNote.guitar[RandomInt(0, answerNote.guitar.length - 1)],
                    readOnly: true
                };

                setStatus(1);
                setAnswer([answer[0], correctionAnswer]);
                increaseCorrect();
            }
            else{
                let correctionAnswers = [answer[0], {...answer[1], color: 'red'}];
                correctionAnswers.push({
                    index: answerNote.index,
                    noteIndex: 0,
                    color: 'orange',
                    string: answerNote.guitar[RandomInt(0, answerNote.guitar.length - 1)],
                    readOnly: true
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
            Place Interval Note on Staff
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
                    <StaffVisualizer notes={answer} isHarmony={true}
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
            <ScoreBoard/>
        </CardFooter>
    </Card>;
};

export default IntervalStaff;