import React from 'react';
import { Card, CardBody, CardHeader, CardFooter, Row, Col, Button, Alert } from 'reactstrap';
import Widget from '../component/widget';
import Instrument from "./component/instrument";

const notes = [
    [
        {
            note: 'a',
            octave: 4
        },
        {
            note: 'b',
            octave: 4
        }
    ]
];

const ScaleNotesOnInstrument = props =>{
    return <Card>
        <CardHeader>
            Select All Scale Notes on Instrument
        </CardHeader>
        <CardBody>
            <Row>
                <Col md={4} sm={12}>
                    <Card  className="border-primary">
                        <CardHeader>
                            Chord
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <Widget color="primary" header="E Maj" mainText="Chord to Spell"/>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter className="text-center">
                            <Button color="primary">Hint</Button>
                        </CardFooter>
                    </Card>
                </Col>
                <Col  md={8} sm={12}>
                    <Instrument notes={notes} isForAnswer={true}/>
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

export default ScaleNotesOnInstrument;