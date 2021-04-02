import React, {useState} from 'react';
import { Card, CardBody, CardHeader, CardFooter, Row, Col, Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { AppSwitch } from '@coreui/react';
import classnames from 'classnames';

const ChordOption = props =>{

    const [activeTab, setActiveTab] = useState('1');

    return <Card>
        <CardHeader>
            Chord Options
        </CardHeader>
        <CardBody>
            <Row  className="floating">
                <Col className="instrument-switcher">
                    <span>C</span><AppSwitch className={'mx-1'} color={'primary'} outline label checked />
                </Col>
                <Col className="instrument-switcher">
                    <span>D</span><AppSwitch className={'mx-1'} color={'primary'} outline label checked />
                </Col>
                <Col className="instrument-switcher">
                    <span>E</span><AppSwitch className={'mx-1'} color={'primary'} outline label checked />
                </Col>
                <Col className="instrument-switcher">
                    <span>F</span><AppSwitch className={'mx-1'} color={'primary'} outline label checked />
                </Col>
                <Col className="instrument-switcher">
                    <span>G</span><AppSwitch className={'mx-1'} color={'primary'} outline label checked />
                </Col>
                <Col className="instrument-switcher">
                    <span>A</span><AppSwitch className={'mx-1'} color={'primary'} outline label checked />
                </Col>
                <Col className="instrument-switcher">
                    <span>B</span><AppSwitch className={'mx-1'} color={'primary'} outline label checked />
                </Col>
            </Row>
            <Row  className="floating">
                <Col className="instrument-switcher">
                    <span>F#</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                </Col>
                <Col className="instrument-switcher">
                    <span>Db</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                </Col>
                <Col className="instrument-switcher">
                    <span>Ab</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                </Col>
                <Col className="instrument-switcher">
                    <span>Eb</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                </Col>
                <Col className="instrument-switcher">
                    <span>Bb</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                </Col>
                <Col className="instrument-switcher">
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
                                Triads
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { setActiveTab('2'); }}
                            >
                                6th
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '3' })}
                                onClick={() => { setActiveTab('3'); }}
                            >
                                7th
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '4' })}
                                onClick={() => { setActiveTab('4'); }}
                            >
                                9th
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '5' })}
                                onClick={() => { setActiveTab('5'); }}
                            >
                                11th
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '6' })}
                                onClick={() => { setActiveTab('6'); }}
                            >
                                13th
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Row className="floating">
                                <Col className="instrument-switcher">
                                    <span>Maj</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Min</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Dim</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Aug</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Sus4</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row className="floating">
                                <Col className="instrument-switcher">
                                    <span>Maj6</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Min6</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Maj6/9</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Min6/9</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row className="floating">
                                <Col className="instrument-switcher">
                                    <span>Maj7</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Min7</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Dom7</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Dim7</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Aug7</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Dom7Sus2</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                            </Row>
                            <Row className="floating">
                                <Col className="instrument-switcher">
                                    <span>Dom7Sus4</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Min/Maj7</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Min7b5</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Maj7b5</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Dom7b9</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Dom7#9</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                            </Row>
                            <Row className="floating">
                                <Col className="instrument-switcher">
                                    <span>Dom7b5</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Dom7b9b5</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Dom7b9#5</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Dom7#9b5</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Dom7#9#5</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Aug7b9</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                            </Row>
                            <Row className="floating">
                                <Col className="instrument-switcher">
                                    <span>Dom7#11</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Maj7#11</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row className="floating">
                                <Col className="instrument-switcher">
                                    <span>Maj9</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Min9</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Min/Maj9</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Sus9</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Maj(add9)</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Min(add9)</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Dom9</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="5">
                            <Row className="floating">
                                <Col className="instrument-switcher">
                                    <span>Dom11</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Maj11</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Min11</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Min/Maj11</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="6">
                            <Row className="floating">
                                <Col className="instrument-switcher">
                                    <span>Dom13</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Maj13</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Min13</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
                                </Col>
                                <Col className="instrument-switcher">
                                    <span>Min/Maj13</span><AppSwitch className={'mx-1'} color='primary' outline label checked />
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

export default ChordOption;
