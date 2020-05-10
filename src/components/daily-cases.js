import React, { Component } from "react";

class DailyCases extends Component {
  render() {
    return (
      <div class="data-points">
        <div class="data-point">
          <h2>New Cases</h2>
          <div className="data-point__value">
            {this.props.data.dailyRecords.dailyLabConfirmedCases}
          </div>
        </div>

        <div class="data-point">
          <h2>Total Cases</h2>
          <div class="data-point__value">
            {this.props.data.dailyRecords.totalLabConfirmedCases}
          </div>
        </div>
      </div>
    );
  }
}

export default DailyCases;
