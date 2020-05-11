import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class CaseHistoryChart extends Component {
  state = {};

  getLabels = (rows) => rows.map((row) => row.specimenDate);
  getValues = (rows) => rows.map((row) => row.totalLabConfirmedCases);

  getDeathValues = (labels, deathRows) => {
    let earliestDeathDate = deathRows[0].reportingDate;

    let index = labels.indexOf(earliestDeathDate);
    let pad = new Array(index);

    deathRows.unshift(...pad);
    return deathRows.map((row) => (!row ? 0 : row.cumulativeDeaths));
  };

  getChartData = () => {
    let rows = this.props.rows.reverse();

    if (!this.props.deaths) return;

    let deaths = this.props.deaths
      .filter((x) => x.areaName === "England")
      .reverse();

    let labels = this.getLabels(rows);

    return {
      labels: labels,
      datasets: [
        {
          label: "Total Cases",
          borderColor: "#48C9B0",
          backgroundColor: "rgba(72, 201, 176,0.2)",
          yAxisId: "left-axis",
          data: this.getValues(rows),
        },
        {
          label: "Total Deaths",
          borderColor: "#F00",
          backgroundColor: "rgba(255,0,0,0.2)",
          yAxisId: "right-axis",
          data: this.getDeathValues(labels, deaths),
        },
      ],
    };
  };

  render() {
    return (
      <section className="widget case-history">
        <div>
            <h2>Total Cases/Deaths by Date</h2>
          <Line
            data={this.getChartData()}
            options={{
              scales: {
                yAxes: [
                  {
                    id: "left-axis",
                    type: "logarithmic",
                    position: "left",
                    scaleLabel: {
                      display: true,
                      labelString: "Cases",
                    },
                    ticks: {
                      callback: function (value, index, values) {
                        return value.toLocaleString();
                      },
                    },
                  },
                  // {
                  //   id: "right-axis",
                  //   type: "logarithmic",
                  //   position: "right",
                  //   scaleLabel: {
                  //     display: true,
                  //     labelString: "Deaths",
                  //   },
                  //   ticks: {
                  //     callback: function (value, index, values) {
                  //       return value.toLocaleString();
                  //     },
                  //   },
                  // },
                ],
              },
            }}
          ></Line>
        </div>
      </section>
    );
  }
}

export default CaseHistoryChart;
