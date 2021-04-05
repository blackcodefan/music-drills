import Vex from "vexflow";
import {useEffect, useState} from "react";
import React from "react";
import { CardBody, CardHeader, Card, CardFooter, Row, Col, Button } from "reactstrap";
import {Notes, StaffNoteArrangement} from "../../logic/source";

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
        this[windowListeners] = [];

        const addListener = ([eventType, callback, ifTrue]) => {
        };

        [
            ['mousedown', this.touchStart, down],
        ]
            .forEach(addListener);
    }
}

const getNotes = notesInfo => {
    let notes = [];
    notesInfo.forEach(info =>{
        let note = Notes[info.index];
        let newNote = {...note,
            note: note.note[info.noteIndex],
            accident: note.accident[info.noteIndex] || null,
            color: info.color || 'default',
            readOnly: info.readOnly || false
        };
        notes.push(newNote);
    });
    return notes;
};

const StaffVisualizer = props =>{

    const VF = Vex.Flow;

    useEffect(() =>{

        const width = document.getElementById('staff').offsetWidth;

        let noteData = getNotes(props.notes);

        const div = document.getElementById("staff");
        div.innerHTML = '';

        const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
        renderer.resize(width, 250);
        const context = renderer.getContext();
        let svg = context.svg;
        let svgPt = svg.createSVGPoint();

        const staveBottom = new VF.Stave(40, 100, width - 70,
            {
                right_bar: false,
                left_bar: false,
                num_lines: 3,
                fill_style: '#E0E0E0',
                spacing_between_lines_px: 20
            });

        staveBottom.setContext(context).draw();

        const staveTop = new VF.Stave(40, -60, width - 70,
            {
                right_bar: false,
                left_bar: false,
                num_lines: 3,
                fill_style: '#E0E0E0',
                spacing_between_lines_px: 20
            });
        staveTop.setContext(context).draw();

        const stave = new VF.Stave(10, 20, width - 40,
            {
                right_bar: false,
                left_bar: false,
                fill_style: '#000',
                spacing_between_lines_px: 20,
                num_lines: 5,
                space_above_staff_ln: 3,
                space_below_staff_ln: 3,
            });
        stave.addClef("treble").setContext(context).draw();

        if(noteData.length > 0) {

            const notes = notesFormatter(noteData);

            VF.Formatter.FormatAndDraw(context, stave, notes);

            if(props.onAnswer)
                notes.forEach((note, index) => {
                    const noteInteraction = new SVGInteraction(svg, svgPt);
                    noteInteraction.addEventListener('touchStart', (e, coords) => console.log(note))
                });
        }

        if(props.onAnswer){
            svg.addEventListener('mouseover', e => mouseOverEventHandler(e, svg, svgPt));

            svg.addEventListener('click', e =>clickEventHandler(e, svg, svgPt));
        }

    }, [props.notes]);

    const notesFormatter = notesArray =>{
        let formattedStaff = [];
        if(props.isHarmony){
            let formattedNotes = [], accidents = [], colors = [];

            notesArray.sort((a,b) => (a.index > b.index) ? 1 : ((b.index > a.index) ? -1 : 0));

            for(let i = 0; i < notesArray.length; i++){
                let note = notesArray[i];
                formattedNotes.push(`${note.note}/${note.octave}`);
                if(note.accident) accidents.push({index: i, accident: note.accident});
                if(note.color) colors.push({index: i, color: note.color});
            }
            const temp = new VF.StaveNote({ keys: formattedNotes, duration: "w", align_center: true});

            for(let accident of accidents){
                temp.addAccidental(accident.index, new VF.Accidental(accident.accident));
            }
            for(let color of colors){
                temp.setKeyStyle(color.index, {fillStyle: color.color});
            }
            formattedStaff.push(temp);
        }else{
            for(let i = 0; i < notesArray.length; i++){
                let note = notesArray[i];
                const temp = new VF.StaveNote({ keys: [`${note.note}/${note.octave}`], duration: "w"});
                if (note.accident) temp.addAccidental(0, new VF.Accidental(note.accident));
                if(note.color) temp.setKeyStyle(0, {fillStyle: note.color});
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
            element.setAttribute('stroke', '#F00');
            let coords = getCoords(e, svg, svgPt);
            let color;
            if(coords.y > 77 && coords.y < 161) color = '#000';
            else color = '#E0E0E0';
            element.addEventListener('mouseleave', e => lineMouseLeaveEventHandler(e, color));
        }
    };

    const clickEventHandler = (event, svg, svgPt) =>{
        let fillType = event.target.getAttribute('fill');
        if(fillType === 'black') noteMouseClickEventHandler(event.target);
        else{
            let coords = getCoords(event, svg, svgPt);
            if(coords.y < 16 || coords.y > 240) return;
            let stringfied = coords.y.toString();
            if (stringfied.length < 2) stringfied = '0' + stringfied;
            const lastNumber = parseInt(stringfied.charAt(stringfied.length - 1));
            const targetNumber = parseInt(stringfied.slice(0, -1));
            let score;
            if (lastNumber > 5) score = targetNumber;
            else score = targetNumber - 1;

            let index = StaffNoteArrangement[score];
            let note = Notes[index];

            !!props.onStaffTap?
                props.onStaffTap({
                    index: index,
                    noteIndex: 0,
                    color: 'black',
                    string: note.guitar[note.guitar.length - 1],
                    readOnly: false
                })
                :console.log('');
        }

    };

    const noteMouseClickEventHandler = (element) =>{
        if(element.getAttribute('class')  === 'active-note'){
            element.removeAttribute('class');
        }else{
            let allNotes = document.getElementsByClassName('active-note');
            for(let s of allNotes){
                s.removeAttribute('class');
            }
            element.setAttribute('class', 'active-note');
        }
    };

    return<Card className="border-primary">
        <CardHeader>Staff</CardHeader>
        <CardBody>
            <div id="staff" className="text-center"/>
            {
                props.onAnswer?
                    <Row className="align-items-center">
                        <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                            <Button color="success" size="sm" onClick={props.onSharp}><strong>#</strong></Button>
                        </Col>
                        <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                            <Button color="success" size="sm" onClick={props.onFlat}>b</Button>
                        </Col>
                        <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                            <Button color="info" size="sm" onClick={props.onNatural}>nat</Button>
                        </Col>
                        <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                            <Button color="warning" size="sm" onClick={props.onDel}>del</Button>
                        </Col>
                        <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                            <Button color="danger" size="sm" onClick={props.onClear}>clr</Button>
                        </Col>
                </Row>
                    :<div/>
            }
        </CardBody>
        {props.onAnswer?
            <CardFooter className="text-center">
                <Button color={
                    props.answerStatus === 0?
                        "primary":props.answerStatus === 1?
                        "success":"danger"} onClick={props.onAnswer}>
                    {
                        props.answerStatus === 0?'Answer':'Next'
                    }
                </Button>
            </CardFooter>
            :<div />
        }
    </Card>;
};

export default StaffVisualizer;