import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import AdminSidear from "../admin/Admin_Sidebar";

class adminDashboard extends Component {
  render() {
    return (
      <div className="bg-light wd-wrapper">
        <AdminSidear />
          <div className="wrapper-wx">
            <div className="container-fluid" >
                <div className="container-fluid" >
                    <div className="row">
                      <div className="col-md-2 mt-2">
                        <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-3 mb-5">
                          <h1>Admin eka yako</h1>
                        </div>
                      </div>
                     
                      
                    </div>

               
              </div>
          </div>
      </div>
      </div>
    );
  }
}

const cardstyle = "card border-0 shadow-sm rounded mt-3 bg-white py-3 d-flex flex-row"

export default withRouter(adminDashboard);
