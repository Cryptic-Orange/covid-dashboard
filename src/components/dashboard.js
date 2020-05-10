import React, { Component } from "react";
import DailyCases from "./daily-cases";
import CaseHistoryTable from "./case-history.table";
import CaseHistoryChart from "./case-history.chart";
import Sidebar from "./sidebar";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(
      //"https://c19downloads.azureedge.net/downloads/json/coronavirus-cases_latest.json"
      "/data/coronavirus-cases_latest.json"
    ).then((response) => {
      response.json().then((value) => {
        this.setState({ data: value });
      });
    });

    fetch(
      //"https://c19downloads.azureedge.net/downloads/json/coronavirus-cases_latest.json"
      "/data/coronavirus-deaths_latest.json"
    ).then((response) => {
      response.json().then((value) => {
        this.setState({ deathsData: value });        
      });
    });
  }

  render() {
    if (!this.state.data)
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
          <CaseHistoryChart rows={this.state.data.countries} deaths={this.state.deathsData.countries}></CaseHistoryChart> 
        </section>
        <footer>
          <span>Last updated: {new Date(this.state.data.metadata.lastUpdatedAt).toLocaleDateString()}</span>
        </footer>
      </div>
    );
  }
}

export default Dashboard;
