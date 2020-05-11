import React, { Component } from "react";
import "./case-history.table.css";

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
