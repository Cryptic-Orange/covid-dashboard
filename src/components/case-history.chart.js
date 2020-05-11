import React, { Component } from "react";
import { Line, Bar } from "react-chartjs-2";
import "./case-history.chart.css";

class CaseHistoryChart extends Component {
  state = {};

  getLabels = (rows) => rows.map((row) => row.specimenDate);
  getValues = (rows) =>
    rows.map((row) => row[this.props.datasetOptions.fields[0]]);

  getDeathValues = (labels, deathRows) => {
    let earliestDeathDate = deathRows[0].reportingDate;

    let index = labels.indexOf(earliestDeathDate);
    let pad = new Array(index);

    deathRows.unshift(...pad);
    return deathRows.map((row) =>
      !row ? 0 : row[this.props.datasetOptions.fields[1]]
    );
  };

  getChartData = () => {
    let rows = this.props.rows;

    if (!this.props.deaths) return;

    let deaths = this.props.deaths.filter((x) => x.areaName === "England");

    let labels = this.getLabels(rows);

    let result = {
      labels: labels,
      datasets: [
        {
          label: this.props.datasetOptions.labels[0],
          yAxisId: "left-axis",
          data: this.getValues(rows),
        },
        {
          label: this.props.datasetOptions.labels[1],
          yAxisId: "right-axis",
          data: this.getDeathValues(labels, deaths),
        },
      ],
    };

    switch (this.props.chartType) {
      case "bar":
        result.datasets[0].backgroundColor = "#48C9B0";
        result.datasets[1].backgroundColor = "#F00";
        break;
      default:
        result.datasets[0].borderColor = "#48C9B0";
        result.datasets[0].backgroundColor = "rgba(72, 201, 176,0.2)";
        result.datasets[1].borderColor = "#F00";
        result.datasets[1].backgroundColor = "rgba(255,0,0,0.2)";
        break;
    }

    return result;
  };

  defaultLineOptions = {
    maintainAspectRatio: false,
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
            beginAtZero: true,
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
  };

  defaultBarOptions = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          id: "left-axis",
          type: "linear",
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
      ],
    },
  };

  render() {
    let Chart;
    let options;

    switch (this.props.chartType) {
      case "bar":
        Chart = Bar;
        options = this.defaultBarOptions;
        break;
      default:
        Chart = Line;
        options = this.defaultLineOptions;
    }

    return (
      <section className={`widget chart ${this.props.className}`}>
        <div>
          <h2 onClick={this.toggleChart}>{this.props.title}</h2>
          <div className="chart-wrapper">
            <Chart data={this.getChartData()} options={options}></Chart>
          </div>
        </div>
      </section>
    );
  }
}

export default CaseHistoryChart;
