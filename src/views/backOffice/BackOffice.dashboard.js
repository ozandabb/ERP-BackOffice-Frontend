import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import BOSidebar from "../backOffice/BOSidebar";

class BackOfficeDashboard extends Component {
  render() {
    return (
      <div className="bg-light wd-wrapper">
        <BOSidebar />
        <div className="wrapper-wx">
          <h1>Dashboard</h1>
        </div>
      </div>
    );
  }
}

export default withRouter(BackOfficeDashboard);
