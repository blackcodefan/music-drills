import React from 'react';
import { Card, CardBody, CardHeader, CardFooter, Row, Col, Button, Alert } from 'reactstrap';
import StaffVisualizer from "./component/staff_visualizer";

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

const ChordNameOnStaff = props =>{
    return <Card>
        <CardHeader>
            Name Chord on Staff
        </CardHeader>
        <CardBody>
            <Row>
                <Col md={4} sm={12}>
                    <StaffVisualizer isEditable={false} notes={notes} isHarmony={true}/>
                </Col>
                <Col md={8} sm={12}>
                    <Card className="border-primary">
                        <CardHeader>
                            Write a spells
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <Alert color="primary" className="text-center">
                                        <strong>C E G#</strong>
                                    </Alert>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">C</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">D</Button>
                                </Col>
                                <Col  className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">E</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">F</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">G</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">A</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">B</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">#</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">b</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">Maj</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">Min</Button>
                                </Col>
                                <Col  className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">Dim</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">Dom</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">Aug</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">Sus</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">Add</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">/</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">2</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">4</Button>
                                </Col>
                                <Col  className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">5</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">6</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">7</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">9</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">11</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="primary">13</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="warning">Del</Button>
                                </Col>
                                <Col className="text-center floating" sm={1} xs={2}>
                                    <Button color="warning">Cancel</Button>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter className="text-center">
                            <Button color="primary">Answer</Button>
                        </CardFooter>
                    </Card>
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

export default ChordNameOnStaff;