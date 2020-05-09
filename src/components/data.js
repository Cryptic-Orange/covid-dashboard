import React, { Component } from "react";
import DailyCases from "./daily-cases";
import CaseHistoryTable from "./case-history.table";

class Data extends Component {
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
        console.log(this.state.data);
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
      <React.Fragment>
        <h1>Last updated: {new Date(this.state.data.metadata.lastUpdatedAt).toLocaleDateString()}</h1>
        <section className="daily-cases">
          <DailyCases data={this.state.data}></DailyCases>
        </section>
        <section className="case-history">
          <CaseHistoryTable rows={this.state.data.countries}></CaseHistoryTable>
        </section>
      </React.Fragment>
    );
  }
}

export default Data;