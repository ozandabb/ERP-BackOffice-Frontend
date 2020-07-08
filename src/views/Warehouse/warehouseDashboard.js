import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import WH_Sidebar from "../Warehouse/WH_Sidebar";

class warehouseDashboard extends Component {
  render() {
    const data = [
      {									
          color: "steelblue", 
          points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 5, y: 3}, {x: 7, y: 3}, {x: 8, y: 3}, {x: 10, y: 8}, {x: 13, y: 4}, {x: 14, y: 5}] 
      }
  ];
    return (
      <div className="bg-light wd-wrapper">
        <WH_Sidebar />
          <div className="wrapper-wx">
            <div className="container-fluid" >
                <div className="container-fluid" >
                    <div class="row">
                      <div class="col">
                          <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                            <div class="row">
                              <div class="col-4">
                                  <img src="/images/admin.Users.png" className="rounded-circle sidebar-image my-auto"></img>
                              </div>
                              <div class="col-8">
                                  <h6 style={{color: "#1E90FF" }}>Customers</h6> 
                                  <h6>364</h6>
                              </div>
                            </div>
                          </h6>
                      </div>

                      <div class="col">
                          <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                            <div class="row">
                              <div class="col-4">
                                  <img src="/images/admin.Users.png" className="rounded-circle sidebar-image my-auto"></img>
                              </div>
                              <div class="col-8">
                                  <h6 style={{color: "#1E90FF" }}>Cash Collectors</h6> 
                                  <h6>12</h6>
                              </div>
                            </div>
                          </h6>
                      </div>

                      <div class="col">
                          <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                            <div class="row">
                              <div class="col-4">
                                  <img src="/images/admin.Users.png" className="rounded-circle sidebar-image my-auto"></img>
                              </div>
                              <div class="col-8">
                                  <h6 style={{color: "#1E90FF" }}>Sales Reps</h6> 
                                  <h6>24</h6>
                              </div>
                            </div>
                          </h6>
                      </div>

                      <div class="col">
                          <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                            <div class="row">
                              <div class="col-4">
                                  <img src="/images/admin.Users.png" className="rounded-circle sidebar-image my-auto"></img>
                              </div>
                              <div class="col-8">
                                  <h6 style={{color: "#1E90FF" }}>Employees</h6> 
                                  <h6>35</h6>
                              </div>
                            </div>
                          </h6>
                      </div>

                      <div class="col">
                          <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                            <div class="row">
                              <div class="col-4">
                                  <img src="/images/admin.Users.png" className="rounded-circle sidebar-image my-auto"></img>
                              </div>
                              <div class="col-8">
                                  <h6 style={{color: "#1E90FF" }}>Drivers</h6> 
                                  <h6>5</h6>
                              </div>
                            </div>
                          </h6>
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

export default withRouter(warehouseDashboard);
