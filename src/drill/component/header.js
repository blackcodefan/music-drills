import React, {useState} from 'react';
import {Nav, NavItem, DropdownToggle, DropdownMenu, Dropdown} from 'reactstrap';
import { AppNavbarBrand } from '@coreui/react';
import { NotificationDropDown, ProfileDropDown } from './header_dropdown';
import logo from '../logo.svg'

const Header = props => {

    const [isNoteMenuOpen, toggleNoteMenu] = useState(false);
    const [isIntervalMenuOpen, toggleIntervalMenu] = useState(false);
    const [isChordMenuOpen, toggleChordMenu] = useState(false);
    const [isScaleMenuOpen, toggleScaleMenu] = useState(false);
    const [isOptionMenuOpen, toggleOptionMenu] = useState(false);

    const navigate = ( toggle ,route) =>{
        toggle(false);
        props.history.push(`/drills${route}`);
    };

    return (
        <React.Fragment>
            <AppNavbarBrand
                full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
                minimized={{ src: logo, width: 30, height: 30, alt: 'CoreUI Logo' }}
            />
            <Nav className="d-md-down-none" navbar>
                <NavItem>
                    <Dropdown  isOpen={isNoteMenuOpen} toggle={() => toggleNoteMenu(!isNoteMenuOpen)}>
                        <DropdownToggle tag='span' data-toggle='dropdown'>Note</DropdownToggle>
                        <DropdownMenu>
                            <div className="dropdown-item" onClick={() => navigate(toggleNoteMenu, '/note-staff')}>Name Note on Staff</div>
                            <div className="dropdown-item" onClick={() => navigate(toggleNoteMenu, '/note-instrument')}>Name Note on Instrument</div>
                        </DropdownMenu>
                    </Dropdown>
                </NavItem>
                <NavItem className="px-3">
                    <Dropdown  isOpen={isIntervalMenuOpen} toggle={() => toggleIntervalMenu(!isIntervalMenuOpen)}>
                        <DropdownToggle tag='span' data-toggle='dropdown'>Interval</DropdownToggle>
                        <DropdownMenu>
                            <div className="dropdown-item" onClick={() => navigate(toggleIntervalMenu, '/interval-staff')}>Place Interval Note on Staff</div>
                            <div className="dropdown-item" onClick={() => navigate(toggleIntervalMenu, '/interval-instrument')}>Place Interval Note on Instrument</div>
                            <div className="dropdown-item" onClick={() => navigate(toggleIntervalMenu, '/interval-name')}>Name the Interval</div>
                        </DropdownMenu>
                    </Dropdown>
                </NavItem>
                <NavItem className="px-3">
                    <Dropdown  isOpen={isChordMenuOpen} toggle={() => toggleChordMenu(!isChordMenuOpen)}>
                        <DropdownToggle tag='span' data-toggle='dropdown'>Chord</DropdownToggle>
                        <DropdownMenu>
                            <div className="dropdown-item" onClick={() => navigate(toggleChordMenu, '/chord-option')}>Chord Option</div>
                            <div className="dropdown-item" onClick={() => navigate(toggleChordMenu, '/chord-to-spell')}>Spell Chord</div>
                            <div className="dropdown-item" onClick={() => navigate(toggleChordMenu, '/chord-name-staff')}>Name Chord on Staff</div>
                            <div className="dropdown-item" onClick={() => navigate(toggleChordMenu, '/chord-spell-staff')}>Spell Chord on Staff</div>
                            <div className="dropdown-item" onClick={() => navigate(toggleChordMenu, '/chord-notes-instrument')}>Select All Chord Notes on Instrument</div>
                        </DropdownMenu>
                    </Dropdown>
                </NavItem>
                <NavItem className="px-3">
                    <Dropdown  isOpen={isScaleMenuOpen} toggle={() => toggleScaleMenu(!isScaleMenuOpen)}>
                        <DropdownToggle tag='span' data-toggle='dropdown'>Scale</DropdownToggle>
                        <DropdownMenu>
                            <div className="dropdown-item" onClick={() => navigate(toggleScaleMenu, '/scale-option')}>Scale Options</div>
                            <div className="dropdown-item" onClick={() => navigate(toggleScaleMenu, '/scale-spell')}>Spell Scale</div>
                            <div className="dropdown-item" onClick={() => navigate(toggleScaleMenu, '/scale-spell-staff')}>Spell Scale on Stuff</div>
                            <div className="dropdown-item" onClick={() => navigate(toggleScaleMenu, '/scale-spell-instrument')}>Spell Scale on Instrument</div>
                            <div className="dropdown-item" onClick={() => navigate(toggleScaleMenu, '/scale-notes-instrument')}>Select All Scale Notes on Instrument</div>
                        </DropdownMenu>
                    </Dropdown>
                </NavItem>
                <NavItem className="px-3">
                    <Dropdown  isOpen={isOptionMenuOpen} toggle={() => toggleOptionMenu(!isOptionMenuOpen)}>
                        <DropdownToggle tag='span' data-toggle='dropdown'>Options</DropdownToggle>
                        <DropdownMenu>
                            <div className="dropdown-item" onClick={() => navigate(toggleOptionMenu, '/chord-option')}>Chord Options</div>
                            <div className="dropdown-item" onClick={() => navigate(toggleOptionMenu, '/scale-option')}>Scale Option</div>
                        </DropdownMenu>
                    </Dropdown>
                </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
                <NotificationDropDown/>
                <ProfileDropDown logout={() => console.log('logout')}/>
            </Nav>
        </React.Fragment>
    );
};

export default Header;