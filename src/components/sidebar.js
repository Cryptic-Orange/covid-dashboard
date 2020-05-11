import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
    state = {  }
    render() { 
        return ( <div className="sidebar">
            <div className="sidebar__header">
            <img src="/images/diagram.svg"></img>
            <h1>COVID-19 Dashboard</h1>
            </div>

            <div className="sidebar__footer">
                <a href="https://github.com/Cryptic-Orange/covid-dashboard" target="_blank">
                    <img src="/images/github.svg"></img>
                </a>
                <a href="https://linkedin.com">
                    <img src="/images/linkedin.svg"></img>
                </a>
            </div>
        </div> );
    }
}
 
export default Sidebar;