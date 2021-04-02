import React from 'react';
import { Card, CardBody } from 'reactstrap';
import staff from '../assets/images/staff.png';

const Home = props =>{
    return <Card>
        <CardBody>
            <div className="home text-center">
                <p className="title">Music Drills</p>
                <div className="img-container">
                    <img src={staff} alt="staff alt"/>
                </div>
                <a href="/">Go to the shop</a>
            </div>
        </CardBody>
    </Card>;
};

export default Home;