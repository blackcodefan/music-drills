import React, {useContext} from 'react';
import {Row, Col } from 'reactstrap';
import {GameStateContext} from "../context";

const ScoreBoard = props =>{
    const {
        correct,
        incorrect,
        avgTime,
        lastAnswer,
        totalAnswerTimer,
        currentAnswerTimer
    } = useContext(GameStateContext);

    const timeFormatter = (min, sec) =>{
        let minString, secString;
        if(min < 10) minString = `0${min}`;
        else minString = min.toString();
        if(sec < 10) secString = `0${sec}`;
        else secString = sec.toString();
        return minString + ' : ' + secString;
    };

    return (
        <Row>
            <Col md={4} sm={6} xs={6} className="text-success">Correct: <strong>{correct}</strong></Col>
            <Col md={4} sm={6} xs={6} className="text-primary">Avg Time: <strong>{avgTime}</strong></Col>
            <Col md={4} sm={6} xs={6} className="text-primary">Crt.answ. time: <strong>{timeFormatter(currentAnswerTimer.minutes, currentAnswerTimer.seconds)}</strong></Col>
            <Col md={4} sm={6} xs={6} className="text-danger">Incorrect: <strong>{incorrect}</strong></Col>
            <Col md={4} sm={6} xs={6} className="text-primary">Last Answer: <strong>{lastAnswer}</strong></Col>
            <Col md={4} sm={6} xs={6} className="text-primary">Total time: <strong>{timeFormatter(totalAnswerTimer.minutes, totalAnswerTimer.seconds)}</strong></Col>
        </Row>
    );
};

export default ScoreBoard;