import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class CaseHistoryChart extends Component {
  state = {};

  getLabels = (rows) => rows.map((row) => row.specimenDate);
  getValues = (rows) => rows.map((row) => row.totalLabConfirmedCases);

  getDeathValues = (rows) => rows.map((row) => row.cumulativeDeaths);

  getChartData = () => {
    let rows = this.props.rows.reverse();

    if (!this.props.deaths) return;

    let deaths = this.props.deaths.filter(x => x.areaName == "England").reverse();

    return {
      labels: this.getLabels(rows),
      datasets: [
        {
          label: "Total Cases",
          borderColor: "#48C9B0",
          backgroundColor: "rgba(72, 201, 176,0.2)",
          data: this.getValues(rows),
        },
        {
          label: "Total Deaths",
          borderColor: "#F00",
          data: this.getDeathValues(deaths),
        },
      ],
    };
  };

  render() {
    return (
      <div>
        <Line data={this.getChartData()}></Line>
      </div>
    );
  }
}

export default CaseHistoryChart;
