import React, {useState} from 'react';
import { Card, CardBody, CardHeader, Row, Col, Button } from 'reactstrap';
import StaffVisualizer from './component/staff_visualizer';
import Instrument from './component/instrument';
import {getRandomNote} from "../logic/source";

const IntervalName = props =>{

    const [assignment, setAssignment] = useState(getRandomNote());
    const [answer, setAnswer] = useState([]);
    const [status, setStatus] = useState(0);// 0:1:2 still thinking/correct/wrong

    return <Card>
        <CardHeader>
            Name the Interval
        </CardHeader>
        <CardBody>
            <Row>
                <Col md={4} sm={12}>
                    {/*<StaffVisualizer isEditable={false} notes={[assignment]} isHarmony={true}/>*/}
                </Col>
                <Col md={8} sm={12}>
                    {/*<Instrument notes={answer}/>*/}
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Card className="border-primary">
                        <CardHeader>
                            Select Interval Names
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col md={2} sm={3} xs={6}><Button color="primary" outline style={{marginBottom: '10px'}}>Min 2nd</Button></Col>
                                <Col md={2} sm={3} xs={6}><Button color="primary" outline style={{marginBottom: '10px'}}>Maj 2nd</Button></Col>
                                <Col md={2} sm={3} xs={6}><Button color="primary" outline style={{marginBottom: '10px'}}>Min 3rd</Button></Col>
                                <Col md={2} sm={3} xs={6}><Button color="primary" outline style={{marginBottom: '10px'}}>Maj 3rd</Button></Col>
                                <Col md={2} sm={3} xs={6}><Button color="primary" outline style={{marginBottom: '10px'}}>Perf. 4th</Button></Col>
                                <Col md={2} sm={3} xs={6}><Button color="primary" outline style={{marginBottom: '10px'}}>Dim. 5th</Button></Col>
                                <Col md={2} sm={3} xs={6}><Button color="primary" outline style={{marginBottom: '10px'}}>Perf. 5th</Button></Col>
                                <Col md={2} sm={3} xs={6}><Button color="primary" outline style={{marginBottom: '10px'}}>Min 6th</Button></Col>
                                <Col md={2} sm={3} xs={6}><Button color="primary" outline style={{marginBottom: '10px'}}>Maj 6th</Button></Col>
                                <Col md={2} sm={3} xs={6}><Button color="primary" outline style={{marginBottom: '10px'}}>Min 7th</Button></Col>
                                <Col md={2} sm={3} xs={6}><Button color="primary" outline style={{marginBottom: '10px'}}>Maj 7th</Button></Col>
                                <Col md={2} sm={3} xs={6}><Button color="primary" outline style={{marginBottom: '10px'}}>Perf. 8th</Button></Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </CardBody>
    </Card>;
};

export default IntervalName;