import React, { Component } from "react";
import "./daily-cases.css";

class DailyCases extends Component {
  render() {
    return (
      <section className="daily-cases">
        <div className="data-points">
          <div className="data-point">
            <h2>New Cases</h2>
            <div className="data-point__value">
              {this.props.data.dailyRecords.dailyLabConfirmedCases}
            </div>
          </div>

          <div className="data-point">
            <h2>Total Cases</h2>
            <div className="data-point__value">
              {this.props.data.dailyRecords.totalLabConfirmedCases}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DailyCases;
