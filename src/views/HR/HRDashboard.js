import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import HRSidebar from "../HR/HRSidebar";

class HRDashboard extends Component {
  render() {
    return (
      <div className="bg-light wd-wrapper">
        <HRSidebar />
          <div className="wrapper-wx">
            <div className="container-fluid" >
                <div className="container-fluid" >
                    <div className="row">
                     {/*---------Contact no --------------  */}
                      <div className="col-md-2 mt-2">
                        <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-3 mb-5">
                          osanda
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

export default withRouter(HRDashboard);
