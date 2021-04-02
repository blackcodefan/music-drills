import Vex from "vexflow";
import {useEffect} from "react";
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

            // svg.addEventListener('click', e =>{console.log(e)})
            // if (svg !== window) svg.addEventListener(eventType, listener);
            // else this[windowListeners].push([eventType, listener]);
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

        let noteData = getNotes(props.notes);

        const div = document.getElementById("staff");
        div.innerHTML = '';

        const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
        renderer.resize(220, 250);
        const context = renderer.getContext();
        let svg = context.svg;
        let svgPt = svg.createSVGPoint();

        const staveBottom = new VF.Stave(40, 100, 190, {right_bar: false, left_bar: false, num_lines: 3, fill_style: '#E0E0E0'});
        staveBottom.setContext(context).draw();
        const staveTop = new VF.Stave(40, 20, 190, {right_bar: false, left_bar: false, num_lines: 3, fill_style: '#E0E0E0'});
        staveTop.setContext(context).draw();

        const stave = new VF.Stave(10, 50, 220, {right_bar: false, left_bar: false, fill_style: '#000'});
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
            for(let i = 0; i < notesArray.length; i++){
                let note = notesArray[i];
                formattedNotes.push(`${note.note}/${note.octave}`);
                if(note.accident) accidents.push({index: i, accident: note.accident});
                if(note.color) colors.push({index: i, color: note.color});
            }
            const temp = new VF.StaveNote({ keys: formattedNotes, duration: "w"});

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

    const clickEventHandler = (event, svg, svgPt) =>{
        let element = event.target;
        let coords = getCoords(event, svg, svgPt);
        let fillType = element.getAttribute('fill');// "black" for note, "none" for line, "null" for space
        if(fillType === 'black') noteMouseClickEventHandler(element);
        else if (fillType === 'none') lineMouseClickEventHandler(coords.y);
        else spaceMouseClickEventHandler(coords.y);
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

    const lineMouseClickEventHandler = (y) =>{
        let rounded = Math.round(y / 10) * 10;
        let index = StaffNoteArrangement[rounded];
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
    };

    const spaceMouseClickEventHandler = (y) =>{
        let rounded = Math.floor(y /10) * 10 + 5;
        if(rounded > 165 || rounded < 60) return;
        let index = StaffNoteArrangement[rounded];
        let note = Notes[index];

        !!props.onStaffTap?
            props.onStaffTap({
                index: index,
                color: 'black',
                noteIndex: 0,
                string: note.guitar[note.guitar.length - 1],
                readOnly: false
            })
            :console.log('');
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