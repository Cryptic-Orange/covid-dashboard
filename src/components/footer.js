import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
          {/* <div>{this.props.data.metadata.disclaimer}</div> */}
        <span>
          Last updated:{" "}
          {new Date(
            this.props.data.metadata.lastUpdatedAt
          ).toLocaleDateString()}
        </span>
      </footer>
    );
  }
}

export default Footer;
