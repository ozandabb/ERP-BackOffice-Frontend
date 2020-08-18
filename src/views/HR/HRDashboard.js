import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import HRSidebar from "../HR/HRSidebar";
import { Line as LineChart, Bar, Doughnut } from 'react-chartjs-2';

import { getAllSuppliers } from '../../controllers/supplier';
import { getAllDrivers } from '../../controllers/driver';
import { getAllCustomers } from '../../controllers/customer';



class HRDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AllSuppliers: [],
      AllDrivers: [],
      AllCustomers: [],
    };
  }

  componentDidMount() {
    this.loadSuppliers();
    this.loadDrivers();
    this.loadCustomers();
  }

  loadCustomers = () => {
    getAllCustomers()
      .then(result => {
        this.setState({ AllCustomers: result });
      })
      .catch(err => {
      });
  };

  loadSuppliers = () => {
    getAllSuppliers()
      .then(result => {
        this.setState({ AllSuppliers: result });
      })
      .catch(err => {
      });
  };

  loadDrivers = () => {
    getAllDrivers()
      .then(result => {
        this.setState({ AllDrivers: result });
      })
      .catch(err => {
      });
  };

  render() {
    const { AllSuppliers, AllDrivers, AllCustomers } = this.state;
    return (
      <div className="bg-light wd-wrapper">
        <HRSidebar />
          <div className="wrapper-wx">
            <div className="container-fluid" >
                <div className="container-fluid" >
                    <div className="row">
                          <div class="col-sm">
                          <Link to='/hrstaff/customerProfile' style={{textDecoration: 'none'}}>
                            <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                <div className="row">
                                            <div className="col">
                                                    <div className="card border-0 shadow-sm rounded mt-1 bg-white pb-2" style={{padding:"10px", color:"#929b94"}}> 
                                                        <div className="row">
                                                            <div className="col-4">
                                                                    <center><img src="/images/customers.png" className="img-fluid my-auto" style={{width:"100px"}}/></center>
                                                            </div>
                                                            <div className="col-8">
                                                                    <h5 style={{color: "green" }}>Customers </h5> 
                                                                    <h6>{AllCustomers.length}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                </div>
                            </h6>  
                            </Link>      
                          </div>

                          <div class="col-sm">
                          <Link to='/hrstaff/supplierProfile' style={{textDecoration: 'none'}}>
                            <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                <div className="row">
                                            <div className="col">
                                                    <div className="card border-0 shadow-sm rounded mt-1 bg-white pb-2" style={{padding:"10px", color:"#929b94"}}> 
                                                        <div className="row">
                                                            <div className="col-4">
                                                                    <center><img src="/images/supplier.png" className="img-fluid my-auto" style={{width:"90px"}}/></center>
                                                            </div>
                                                            <div className="col-8">
                                                                    <h5 style={{color: "green" }}>Suppliers </h5> 
                                                                    <h6>{AllSuppliers.length}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                </div>
                            </h6> 
                            </Link>       
                          </div>

                          <div class="col-sm">
                          <Link to='' style={{textDecoration: 'none'}}>
                            <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                <div className="row">
                                            <div className="col">
                                                    <div className="card border-0 shadow-sm rounded mt-1 bg-white pb-2" style={{padding:"10px", color:"#929b94"}}> 
                                                        <div className="row">
                                                            <div className="col-4">
                                                                    <center><img src="/images/employee.png" className="img-fluid my-auto" style={{width:"90px"}}/></center>
                                                            </div>
                                                            <div className="col-8">
                                                                    <h5 style={{color: "green" }}>Employees </h5> 
                                                                    <h6>45,000 LKR</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                </div>
                            </h6>  
                            </Link>      
                          </div>

                          <div class="col-sm">
                          <Link to='/hrstaff/driverProfile' style={{textDecoration: 'none'}}>
                            <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                <div className="row">
                                            <div className="col">
                                                    <div className="card border-0 shadow-sm rounded mt-1 bg-white pb-2" style={{padding:"10px", color:"#929b94"}}> 
                                                        <div className="row">
                                                            <div className="col-4">
                                                                    <center><img src="/images/driver.png" className="img-fluid my-auto" style={{width:"90px"}}/></center>
                                                            </div>
                                                            <div className="col-8">
                                                                    <h5 style={{color: "green" }}>Drivers </h5> 
                                                                    <h6>{AllDrivers.length}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                </div>
                            </h6> 
                            </Link>       
                          </div>

                          {/* <div class="col-sm">
                            <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                <div className="row">
                                            <div className="col">
                                                    <div className="card border-0 shadow-sm rounded mt-1 bg-white pb-2" style={{padding:"10px", color:"#929b94"}}> 
                                                        <div className="row">
                                                            <div className="col-4">
                                                                    <center><img src="/images/money.png" className="img-fluid my-auto" style={{width:"90px"}}/></center>
                                                            </div>
                                                            <div className="col-8">
                                                                    <h6 style={{color: "green" }}>Customers </h6> 
                                                                    <h6>45,000 LKR</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                </div>
                            </h6>        
                          </div> */}
 
                    </div>
                    <div className="row">
                       {/* <div className="col-md-6 mt-3">
                                            <div className="campaign ct-charts px-3">
                                                <h6 className="mt-2 mb-3">User Registration in past years</h6>
                                                <Bar data={{
                                                    labels: Yyears,
                                                    datasets: [
                                                        {
                                                            label: "Users",
                                                            backgroundColor: 'rgba(220, 231, 117,0.5)',
                                                            borderColor: 'rgba(220, 231, 117,1.0)',
                                                            borderWidth: 1,
                                                            hoverBackgroundColor: 'rgba(220, 231, 117,0.4)',
                                                            hoverBorderColor: 'rgba(220, 231, 117,1)',
                                                            data: Yuser
                                                        }
                                                    ]
                                                }}
                                                    options={options1}
                                                    width="600" height="220" />
                                            </div>

                                        </div> */}
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
