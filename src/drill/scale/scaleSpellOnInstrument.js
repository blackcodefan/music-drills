import React from 'react';
import { Card, CardBody, CardHeader, CardFooter, Row, Col, Button } from 'reactstrap';
import Widget from '../component/widget';
import Instrument from "./component/instrument";
import ScoreBoard from "../component/score_board";

const ScaleSpellOnInstrument = props =>{
    return <Card>
        <CardHeader>
            Spell Scale on Instrument
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
                    <Instrument notes={[]} isForAnswer={true}/>
                </Col>
            </Row>
        </CardBody>
        <CardFooter className="text-center">
            <ScoreBoard/>
        </CardFooter>
    </Card>;
};

export default ScaleSpellOnInstrument;