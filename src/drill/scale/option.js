import React, {useState} from 'react';
import { Card, CardBody, CardHeader, CardFooter, Row, Col, Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { AppSwitch } from '@coreui/react';
import classnames from 'classnames';


const ScaleOption = props =>{

    const [activeTab, setActiveTab] = useState('1');

    return <Card>
        <CardHeader>
            Scale Options
        </CardHeader>
        <CardBody>
            <Row>
                <Col className="instrument-switcher floating">
                    <span>C</span><AppSwitch className={'mx-1'} color={'primary'} outline label checked />
                </Col>
                <Col className="instrument-switcher floating">
                    <span>D</span><AppSwitch className={'mx-1'} color={'primary'} outline label checked />
                </Col>
                <Col className="instrument-switcher floating">
                    <span>E</span><AppSwitch className={'mx-1'} color={'primary'} outline label checked />
                </Col>
                <Col className="instrument-switcher floating">
                    <span>F</span><AppSwitch className={'mx-1'} color={'primary'} outline label checked />
                </Col>
                <Col className="instrument-switcher floating">
                    <span>G</span><AppSwitch className={'mx-1'} color={'primary'} outline label checked />
                </Col>
                <Col className="instrument-switcher floating">
                    <span>A</span><AppSwitch className={'mx-1'} color={'primary'} outline label checked />
                </Col>
                <Col className="instrument-switcher floating">
                    <span>B</span><AppSwitch className={'mx-1'} color={'primary'} outline label checked />
                </Col>
            </Row>
            <Row>
                <Col className="instrument-switcher floating">
                    <span>F#</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                </Col>
                <Col className="instrument-switcher floating">
                    <span>Db</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                </Col>
                <Col className="instrument-switcher floating">
                    <span>Ab</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                </Col>
                <Col className="instrument-switcher floating">
                    <span>Eb</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                </Col>
                <Col className="instrument-switcher floating">
                    <span>Bb</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                </Col>
                <Col className="instrument-switcher floating">
                    <span>F</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                </Col>
            </Row>
            <Row  className="floating">
                <Col md={12}>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { setActiveTab('1'); }}
                            >
                                Major Scale
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { setActiveTab('2'); }}
                            >
                                Pentatonic/Blues
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '3' })}
                                onClick={() => { setActiveTab('3'); }}
                            >
                                Melodic Minor
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '4' })}
                                onClick={() => { setActiveTab('4'); }}
                            >
                                Harmonic Minor
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '5' })}
                                onClick={() => { setActiveTab('5'); }}
                            >
                                Symmetric
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col className="instrument-switcher floating">
                                    <span>Major(Ionian)</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher floating">
                                    <span>Dorian</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher floating">
                                    <span>Phrygian</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher floating">
                                    <span>Lydian</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher floating">
                                    <span>Mixolydian</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher floating">
                                    <span>Aeolian</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col className="instrument-switcher floating">
                                    <span>Minor Pentatonic</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher floating">
                                    <span>Major Pentatonic</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher floating">
                                    <span>Minor Blues</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher floating">
                                    <span>Major Blues</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col className="instrument-switcher floating">
                                    <span>Melodic Minor</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher floating">
                                    <span>Dorian b2</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher floating">
                                    <span>Lydian Augmented</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher floating">
                                    <span>Lydian Dominant</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="instrument-switcher floating">
                                    <span>Mixolydian b6</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher floating">
                                    <span>Locrian #2</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher floating">
                                    <span>Altered Dominant</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row>
                                <Col className="instrument-switcher floating" sm={4}>
                                    <span>Harmonic Minor</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher floating" sm={4}>
                                    <span>HM Mode</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher floating" sm={4}>
                                    <span>HM Mode 2:Locrian</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher floating" sm={4}>
                                    <span>HM Mode 6:Lydian</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher floating" sm={4}>
                                    <span>HM Mode 7:Alt</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="5">
                            <Row>
                                <Col className="instrument-switcher floating">
                                    <span>Diminished HW</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher floating">
                                    <span>Diminished WH</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher floating">
                                    <span>Whole Tone</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        </CardBody>
        <CardFooter className="text-center">
            <Row>
                <Col md={4} sm={6} xs={12} className="text-success">
                    <Button color="primary" style={{marginBottom: '10px'}}>Select All</Button>
                </Col>
                <Col md={4} sm={6} xs={12} className="text-success">
                    <Button color="warning" style={{marginBottom: '10px'}}>Clear All</Button>
                </Col>
                <Col md={4} sm={6} xs={12} className="text-success">
                    <Button color="primary" style={{marginBottom: '10px'}}>OK</Button>
                </Col>
            </Row>
        </CardFooter>
    </Card>;
};

export default ScaleOption;