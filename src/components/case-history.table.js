import React, { Component } from "react";
import "./case-history.table.css";
import * as comparers from "../functions/comparers";

class CaseHistoryTable extends Component {
  state = {
    sortBy: "specimenDate",
    comparer: comparers.CompareDates,
    sortDirection: 1,
  };

  renderRows = (rows) =>
    [...rows]
      .sort(
        comparers.CompareRow(
          this.state.sortBy,
          this.state.comparer,
          this.state.sortDirection
        )
      )
      .map((row, idx) => (
        <tr key={`$row_${idx}`}>
          <td>{row.specimenDate}</td>
          <td>{row.previouslyReportedTotalCases}</td>
          <td>{row.totalLabConfirmedCases}</td>
          <td>{row.changeInTotalCases}</td>
        </tr>
      ));

  setSort = (column, comparer) => {
    return () => {
      let direction = this.state.sortDirection;
      
      if (column === this.state.sortBy){
        direction = direction * -1;
      } else{
        direction = 1;
      }
      
      this.setState({
        sortBy: column,
        comparer: comparer,
        sortDirection: direction
      });
    };
  }

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
                <th onClick={this.setSort("specimenDate", comparers.CompareDates)}>Date</th>
                <th onClick={this.setSort("previouslyReportedTotalCases", comparers.CompareNumbers)}>Previously Reported</th>
                <th onClick={this.setSort("totalLabConfirmedCases", comparers.CompareNumbers)}>Total</th>
                <th onClick={this.setSort("changeInTotalCases", comparers.CompareNumbers)}>Change</th>
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
