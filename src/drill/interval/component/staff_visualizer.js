import Vex from "vexflow";
import {useEffect, useState} from "react";
import React from "react";
import { CardBody, CardHeader, Card, CardFooter, Row, Col, Button } from "reactstrap";

const isDragSymbol = Symbol('dragging');
const isOutSymbol = Symbol('isOut');
const windowListeners = Symbol('windowListeners');
const listeners = Symbol('listener');

const getCoords = (e, svg, svgPt) =>{
    if ('changedTouches' in e) {
        const length = e.changedTouches.length;
        const touches = [];
        for (let i = 0; i < length; i++) {
            touches.push(getCoords(e.changedTouches.item(i), svg, svgPt));
        }
        return { x: touches[0].x, y: touches[0].y, touches };
    }

    svgPt.x = e.clientX;
    svgPt.y = e.clientY;
    const svgCoords = svgPt.matrixTransform(svg.getScreenCTM().inverse());
    return { x: svgCoords.x, y: svgCoords.y };
};

class SVGInteraction {
    constructor(svg, svgPt) {
        if (svgPt) this.svgPt = svgPt;
        this.svg = svg;
        this.makeInteractive();
    }

    addEventListener(type, callback) {
        this[listeners].push([type, callback]);
    }

    callListeners(type, e, coords) {
        this[listeners].forEach(([listenerType, callback]) => {
            if (type === listenerType) {
                callback(e, coords);
            }
        });
    }

    touchStart(e, coords) { this.callListeners('touchStart', e, coords); }

    makeInteractive(svg = this.svg) {
        this[listeners] = [];
        svg.style.pointerEvents = 'bounding-box';
        this.svgPt = this.svgPt || svg.createSVGPoint();

        const down = () => { this[isDragSymbol] = true; return true; };

        const isOutside = () => this[isOutSymbol];
        const inside = () => {
            this[isOutSymbol] = false;
            this[windowListeners].forEach(([eventType, listener]) => {
                window.removeEventListener(eventType, listener, false);
            });
            return true;
        };

        this[windowListeners] = [];

        const addListener = ([eventType, callback, ifTrue]) => {
            const listener = (evt) => {
                if (ifTrue()) {
                    const coords = getCoords(evt, svg, this.svgPt, this);
                    callback.call(this, evt, coords);
                }
            };

            svg.addEventListener('click', e =>{console.log(e)})
            // if (svg !== window) svg.addEventListener(eventType, listener);
            // else this[windowListeners].push([eventType, listener]);
        };

        [
            ['mousedown', this.touchStart, down],
        ]
            .forEach(addListener);
    }
}

const StaffVisualizer = props =>{
    const VF = Vex.Flow;

     const [noteData, updateNotes] = useState(props.notes);

    useEffect(() =>{
        const div = document.getElementById("staff");
        const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
        renderer.resize(220, 250);
        const context = renderer.getContext();

        const staveBottom = new VF.Stave(40, 100, 190, {right_bar: false, left_bar: false, num_lines: 3, fill_style: '#E0E0E0'});
        staveBottom.setContext(context).draw();
        const staveTop = new VF.Stave(40, 20, 190, {right_bar: false, left_bar: false, num_lines: 3, fill_style: '#E0E0E0'});
        staveTop.setContext(context).draw();

        const stave = new VF.Stave(10, 50, 220, {right_bar: false, left_bar: false, fill_style: '#000'});
        stave.addClef("treble").setContext(context).draw();

        const notes = notesFormatter(noteData);

        VF.Formatter.FormatAndDraw(context, stave, notes);

        let svg = context.svg;
        let svgPt = svg.createSVGPoint();

        notes.forEach( (note, index) => {
            const noteInteraction = new SVGInteraction(svg, svgPt);
            noteInteraction.addEventListener('touchStart', (e, coords) => console.log(note))
        });

        if(props.isEditable){
            svg.addEventListener('mouseover', e => mouseOverEventHandler(e, svg, svgPt));

            svg.addEventListener('click', e => {
                let element = e.target;
                let fillType = element.getAttribute('fill');// "black" for note, "none" for line, "null" for space
                if(fillType === 'black'){
                    if(element.getAttribute('class')  === 'active-note'){
                        element.removeAttribute('class');
                    }else{
                        let allNotes = document.getElementsByClassName('active-note');
                        for(let s of allNotes){
                            s.removeAttribute('class');
                        }
                        element.setAttribute('class', 'active-note');
                    }
                }
            });
        }


    }, [noteData]);

    const notesFormatter = notesArray =>{
        let formattedStaff = [];
        if(props.isHarmony){
            let formattedNotes = [], accidents = [];
            for(let i = 0; i < notesArray.length; i++){
                let note = notesArray[i];
                formattedNotes.push(`${note.note}/${note.octave}`);
                if(note.accident) accidents.push({index: i, accident: note.accident});
            }

            const temp = new VF.StaveNote({ keys: formattedNotes, duration: "w"});

            for(let accident of accidents){
                temp.addAccidental(accident.index, new VF.Accidental(accident.accident));
            }
            formattedStaff.push(temp);
        }else{
            for(let i = 0; i < notesArray.length; i++){
                let note = notesArray[i];
                const temp = new VF.StaveNote({ keys: [`${note.note}/${note.octave}`], duration: "w"});
                if (note.accident) temp.addAccidental(0, new VF.Accidental(note.accident));
                formattedStaff.push(temp);
            }
        }

        return formattedStaff;
    };

    const noteMouseLeaveEventHandler = event =>{
        event.target.style.fill = 'black';
        event.target.removeEventListener('mouseleave', noteMouseLeaveEventHandler);
    };

    const lineMouseLeaveEventHandler = (event, color) =>{
        event.target.setAttribute('stroke-width', 1);
        event.target.setAttribute('stroke', color);
        event.target.removeEventListener('mouseleave', lineMouseLeaveEventHandler);
    };

    const mouseOverEventHandler = (e, svg, svgPt) =>{
        let element = e.target;
        let fillType = element.getAttribute('fill');// "black" for note, "none" for line, "null" for space
        if(fillType === 'black') {
            element.style.fill = 'red';
            element.addEventListener('mouseleave', noteMouseLeaveEventHandler);
        }else if(fillType === 'none'){
            element.setAttribute('stroke-width', 2);
            element.setAttribute('stroke', '#F00');
            let coords = getCoords(e, svg, svgPt);
            let color;
            if(coords.y > 85 && coords.y < 135) color = '#000';
            else color = '#E0E0E0';
            element.addEventListener('mouseleave', e => lineMouseLeaveEventHandler(e, color));
        }
    };

    return<Card className="border-primary">
        <CardHeader>Staff</CardHeader>
        <CardBody>
            <div id="staff" className="text-center"/>
            {
                props.isEditable?
                    <Row className="align-items-center">
                        <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                            <Button color="success" size="sm"><strong>#</strong></Button>
                        </Col>
                        <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                            <Button color="success" size="sm">b</Button>
                        </Col>
                        <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                            <Button color="info" size="sm">nat</Button>
                        </Col>
                        <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                            <Button color="warning" size="sm">del</Button>
                        </Col>
                        <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                            <Button color="danger" size="sm">clr</Button>
                        </Col>
                </Row>
                    :<div/>
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

export default StaffVisualizer;