import React, { Component } from "react";
import DailyCases from "./daily-cases";
import CaseHistoryTable from "./case-history.table";
import CaseHistoryChart from "./case-history.chart";
import Sidebar from "./sidebar";
import Footer from "./footer";
import "./dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //"https://c19downloads.azureedge.net/downloads/json/coronavirus-cases_latest.json"
  componentDidMount() {
    Promise.all([
      fetch("/data/coronavirus-cases_latest.json"),
      fetch("/data/coronavirus-deaths_latest.json"),
    ]).then((responses) => {
      Promise.all([responses[0].json(), responses[1].json()]).then((values) => {
        this.setState({ data: values[0] });
        this.setState({ deathsData: values[1] });
        this.setState({ loaded: true });
      });
    });
  }

  render() {
    if (!this.state.loaded)
      return (
        <div>
          <p> No Data! </p>
        </div>
      );

    return (
      <div className="dashboard">
        <Sidebar></Sidebar>
        <DailyCases data={this.state.data}></DailyCases>
        <CaseHistoryTable rows={this.state.data.countries}></CaseHistoryTable>
        <CaseHistoryChart
          rows={this.state.data.countries}
          deaths={this.state.deathsData.countries}
          className={"case-history"}
          title="Total Cases/Deaths by Date"
          datasetOptions={{
            labels: ["Total Cases", "Total Deaths" ],
            fields: ["totalLabConfirmedCases", "cumulativeDeaths"]
          }}
        ></CaseHistoryChart>
        <CaseHistoryChart
          rows={this.state.data.countries}
          deaths={this.state.deathsData.countries}
          className={"daily-rate"}
          title="Daily Cases/Deaths by Date"
          chartType="bar"
          datasetOptions={{
            labels: ["Cases", "Deaths" ],
            fields: ["dailyLabConfirmedCases", "dailyChangeInDeaths"]
          }}
        ></CaseHistoryChart>
        <Footer data={this.state.data}></Footer>
      </div>
    );
  }
}

export default Dashboard;
