import React from 'react';
import { Card, CardBody, CardHeader, CardFooter, Row, Col, Button } from 'reactstrap';
import Widget from '../component/widget';
import StaffVisualizer from "./component/staff_visualizer";
import ScoreBoard from "../component/score_board";

const ScaleSpellOnStaff = props =>{
    return <Card>
        <CardHeader>
            Spell Scale on Stuff
        </CardHeader>
        <CardBody>
            <Row>
                <Col md={5} sm={12}>
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
                <Col  md={7} sm={12}>
                    <StaffVisualizer notes={[]} isHarmony={true}/>
                </Col>
            </Row>
        </CardBody>
        <CardFooter className="text-center">
            <ScoreBoard/>
        </CardFooter>
    </Card>;
};

export default ScaleSpellOnStaff;