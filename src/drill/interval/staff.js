import React, {useState} from 'react';
import { Card, CardBody, CardHeader, CardFooter, Row, Col, Button } from 'reactstrap';
import StaffVisualizer from './component/staff_visualizer';
import Widget from "../component/widget";
import {getRandomNote} from "../logic/source";

const IntervalStaff = props =>{

    const [assignment, setAssignment] = useState(getRandomNote());
    const [answer, setAnswer] = useState([]);
    const [status, setStatus] = useState(0);// 0:1:2 still thinking/correct/wrong

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
                            <Widget color="primary" header="E Maj" mainText="Chord to Spell"/>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={8} sm={12}>
                    {/*<StaffVisualizer notes={answer} isHarmony={true}/>*/}
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

export default IntervalStaff;