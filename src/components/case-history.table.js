import React, { Component } from "react";

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
  state = {};

  renderRows = (rows) =>
    rows.map((row) => (
      <tr key={row.specimenDate}>
        <td>{row.specimenDate}</td>
        <td>{row.previouslyReportedTotalCases}</td>
        <td>{row.totalLabConfirmedCases}</td>
        <td>{row.changeInTotalCases}</td>
      </tr>
    ));

  render() {
    return (
      <section className="widget tabular-history">
        <div>
          <h2>
            Total number of lab-confirmed cases in England by specimen date
          </h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Previously Reported</th>
                <th>Total</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>{this.renderRows(this.props.rows)}</tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default CaseHistoryTable;
