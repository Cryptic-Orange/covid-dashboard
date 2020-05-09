import React, { Component } from "react";

class DailyCases extends Component {
 
  render() {
  
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Area</th>
              <td>{this.props.data.dailyRecords.areaName}</td>
            </tr>
            <tr>
              <th>Daily Lab Confirmed Cases</th>
              <td>{this.props.data.dailyRecords.dailyLabConfirmedCases}</td>
            </tr>
            <tr>
              <th>Total Lab Confirmed Cases</th>
              <td>{this.props.data.dailyRecords.totalLabConfirmedCases}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DailyCases;
