import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
    state = {  }
    render() { 
        return ( <div className="sidebar">
            <div className="sidebar__header">
            <img src="/images/diagram.svg" alt="logo"></img>
            <h1>COVID-19 Dashboard</h1>
            <p>
                Showing data from the <a href="https://coronavirus.data.gov.uk/"  target="_blank" rel="noopener noreferrer">NHS for England</a>
            </p>
            </div>

            <div className="sidebar__footer">
                <a href="https://github.com/Cryptic-Orange/covid-dashboard" target="_blank" rel="noopener noreferrer" >
                    <img src="/images/github.svg" alt="GitHub Link"></img>
                </a>
                <a href="https://www.linkedin.com/in/james-harris-3b933723"  target="_blank" rel="noopener noreferrer">
                    <img src="/images/linkedin.svg" alt="LinkedIn Profile Link"></img>
                </a>
            </div>
        </div> );
    }
}
 
export default Sidebar;