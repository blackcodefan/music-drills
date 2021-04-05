import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <span><a href="/drills">Music Drills</a> &copy; 2021 Music Drills</span>
                <span className="ml-auto">Powered by <a href="/drills">Music Drills</a></span>
            </React.Fragment>
        );
    }
}

export default Footer;