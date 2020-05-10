import React, { Component } from 'react';

/*
areaCode: "E92000001"
areaName: "England"
areaType: "Nation"
changeInDailyCases: 63
changeInTotalCases: 1349
dailyLabConfirmedCases: 63
previouslyReportedDailyCases: 0
previouslyReportedTotalCases: 133626
specimenDate: "2020-05-08"
totalLabConfirmedCases: 134975
*/


class CaseHistoryTable extends Component {
    state = {  }

    renderRows = (rows) => rows.map(row => <tr key={row.specimenDate}><td>{ row.specimenDate }</td><td>{row.totalLabConfirmedCases}</td></tr>);

    render() { 
        
        return ( 
            <div>

        <table>
            <thead>
                <tr>
                    <th>Date</th>    
                    <th>Cases</th>
                </tr>                
            </thead>
            <tbody>
               { this.renderRows(this.props.rows) }
            </tbody>
        </table> 
            </div>
        );
    }
}
 
export default CaseHistoryTable;