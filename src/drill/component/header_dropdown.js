import React, { Component } from 'react';
import { Badge, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

class NotificationDropDown extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    render() {
        const itemsCount = 5;
        return (
            <Dropdown nav className="d-md-down-none" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav>
                    <i className="icon-bell"/><Badge pill color="danger">{itemsCount}</Badge>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem header tag="div" className="text-center"><strong>You have {itemsCount} notifications</strong></DropdownItem>
                    <DropdownItem><i className="icon-user-follow text-success"/> New user registered</DropdownItem>
                    <DropdownItem><i className="icon-user-unfollow text-danger"/> User deleted</DropdownItem>
                    <DropdownItem><i className="icon-chart text-info"/> Sales report is ready</DropdownItem>
                    <DropdownItem><i className="icon-basket-loaded text-primary"/> New client</DropdownItem>
                    <DropdownItem><i className="icon-speedometer text-warning"/> Server overloaded</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

class ProfileDropDown extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    render() {

        return (
            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav>
                    <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin" />
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
                    <DropdownItem><i className="fa fa-user"/> Profile</DropdownItem>
                    <DropdownItem><i className="fa fa-wrench"/> Settings</DropdownItem>
                    <DropdownItem><i className="fa fa-usd"/> Payments<Badge color="secondary">42</Badge></DropdownItem>
                    <DropdownItem><i className="fa fa-file"/> Projects<Badge color="primary">42</Badge></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.props.logout}><i className="fa fa-lock"/> Logout</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export { NotificationDropDown, ProfileDropDown };
