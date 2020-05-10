import React, { Component } from "react";
import DailyCases from "./daily-cases";
import CaseHistoryTable from "./case-history.table";
import CaseHistoryChart from "./case-history.chart";
import Sidebar from "./sidebar";
import Footer from "./footer";

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
      <div class="dashboard">
        <Sidebar></Sidebar>

        <section className="daily-cases">
          <DailyCases data={this.state.data}></DailyCases>
        </section>
        <section className="tabular-history">
          <CaseHistoryTable rows={this.state.data.countries}></CaseHistoryTable>
        </section>
        <section className="case-history">
          <CaseHistoryChart
            rows={this.state.data.countries}
            deaths={this.state.deathsData.countries}
          ></CaseHistoryChart>
        </section>
        <Footer data={this.state.data}></Footer>  
      </div>
    );
  }
}

export default Dashboard;
