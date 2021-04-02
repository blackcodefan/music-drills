import React, {useEffect, useState} from 'react';
import { CardHeader, CardBody, Card, CardFooter, Button } from "reactstrap";
import { AppSwitch } from '@coreui/react'
import CustomPiano from '../../component/piano';
import Guitar from '../../component/guitar';
//
// const notes = [
//     {
//         note: 'e3',
//         string: 4,
//         color: 'green'
//     },
//     {
//         note: 'd#3',
//         string: 5
//     },
//     {
//         note: 'g3',
//         string: 4,
//     }
// ];

const Instrument = props =>{

    const [piano, chooseInstrument] = useState(true);

    const playNote = miniNumber =>{
        // if(selectedNotes.includes(miniNumber)){
        //     selectedNotes.splice(selectedNotes.indexOf(miniNumber), 1);
        //     selectNotes(selectedNotes);
        // }else{
        //     selectedNotes.push(miniNumber);
        //     selectedNotes.sort(function(a, b){return a - b});
        //     selectNotes(selectedNotes);
        // }
    };

    return <Card className="border-primary">
        <CardHeader>Instrument
            <div className="card-header-actions instrument-switcher">
                <strong>Piano</strong>
                <AppSwitch className={'mx-1'} color={'success'} label
                           checked dataOn={'P'}
                           dataOff={'G'}
                           onChange={e => chooseInstrument(e.target.checked)}/>
                <strong>Guitar</strong>
            </div>
        </CardHeader>
        <CardBody>
            {
                piano?
                    <CustomPiano
                        playNote={playNote}
                    />:
                    < Guitar notes={[]}/>
            }
        </CardBody>
        {props.isForAnswer?
            <CardFooter className="text-center">
                <Button color="primary">Answer</Button>
            </CardFooter>
            :<div />
        }
    </Card>;
};

export default Instrument;