import React from 'react';
import { Card, CardBody, CardHeader, CardFooter, Row, Col, Button, Alert } from 'reactstrap';
import Widget from '../component/widget';

const ChordToSpell = props =>{
    return <Card>
        <CardHeader>
            Spell Chord
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
                            <Row>
                                <Col md={12} className="text-center floating">
                                    <Alert color="primary">
                                        <strong>C E G#</strong>
                                    </Alert>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter className="text-center">
                            <Button color="primary">Hint</Button>
                        </CardFooter>
                    </Card>
                </Col>
                <Col  md={8} sm={12}>
                    <Card className="border-primary">
                        <CardHeader>
                            Notes & Accidents
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col className="text-center floating">
                                    <Button color="primary">C</Button>
                                </Col>
                                <Col className="text-center floating">
                                    <Button color="primary">D</Button>
                                </Col>
                                <Col  className="text-center floating">
                                    <Button color="primary">E</Button>
                                </Col>
                                <Col className="text-center floating">
                                    <Button color="primary">F</Button>
                                </Col>
                                <Col className="text-center floating">
                                    <Button color="primary">G</Button>
                                </Col>
                                <Col className="text-center floating">
                                    <Button color="primary">A</Button>
                                </Col>
                                <Col className="text-center floating" sm={3}>
                                    <Button color="primary">B</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center floating">
                                    <Button color="warning">#</Button>
                                </Col>
                                <Col className="text-center floating">
                                    <Button color="warning">b</Button>
                                </Col>
                                <Col className="text-center floating">
                                    <Button color="warning">=</Button>
                                </Col>
                                <Col className="text-center floating">
                                    <Button color="warning">Del</Button>
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

export default ChordToSpell;