import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import BOSidebar from "../backOffice/BOSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye
} from "@fortawesome/free-solid-svg-icons";

class ViewOrderProgress extends Component {
  render() {
    return (
        <div className="bg-light wd-wrapper">
        <BOSidebar />
            <div className="wrapper-wx">
                <div className="container-fluid" >
                    <div className="row">

                        {/* ==================================Ready to delivery  Order Header ========================== */}
                        <div className="col-12">
                            <h5 className="text-success bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                Order ID : #973467
                            </h5>
                        </div>

                        {/*==================================== Vehicle and CC details column start here ===========================================*/}
                        <div class="col-4">
                                    <div className="row">
                                        <div className="col">
                                                <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2" style={{padding:"10px", color:"#929b94"}}> 
                                                    <div className="row">
                                                        <div className="col-4">
                                                                <center><img src="/images/truck.png" className="img-fluid my-auto" style={{width:"90px"}}/></center>
                                                        </div>
                                                        <div className="col-8">
                                                                Vehicle Type : Long Vehicle
                                                                <h6 style={{color: "#1E90FF" }}>Vehicle No</h6> 
                                                                <h3>sp BAF 2087</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="button" class="btn btn-success form-control">View Vehicle Details</button>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col">
                                                <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2" style={{padding:"10px", color:"#929b94"}}> 
                                                    <div className="row">
                                                        <div className="col-4">
                                                                <center><img src="/images/person.png" className="img-fluid my-auto" style={{width:"80px"}}/></center>
                                                        </div>
                                                        <div className="col-8">
                                                                <h6 style={{color: "#1E90FF" }}>Cash Collector Name</h6> 
                                                                <h3>Sunil Perera</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="button" class="btn btn-success form-control">View CC Details</button>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col">
                                                <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2" style={{padding:"10px", color:"#929b94"}}> 
                                                    <div className="row">
                                                        <div className="col-4">
                                                                <center><img src="/images/location.png" className="img-fluid " style={{width:"80px", marginTop:"20px"}}/></center>
                                                        </div>
                                                        <div className="col-8">
                                                                <h6 style={{color: "#1E90FF" }}>Route ID</h6> 
                                                                <h4>#085378</h4>
                                                                <p>Malabe, Koswatta, Rajagiriya, Borella, Battaramulla, Kollupitiya</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="button" class="btn btn-success form-control">View Route Details</button>
                                        </div>
                                    </div>
                        
                        </div>
                        {/*====================================  Vehicle and CC details column ends here ===========================================*/}

                        {/*==================================== Map details column start here ===========================================*/}
                        <div class="col">
                                <div className="col-12">
                                     <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2" style={{padding:"20px"}}>
                                             <img src="/images/map.png" className="img-fluid"/>
                                    </div>
                                </div>
                        </div>
                        {/* ====================================Map details column ends here =============================================*/}
              <div className="col-12">
                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                  Ordered Items 
                  <div className="col-12">
                            <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2">
                                <div className="table-responsive ">
                                <table className="table table-stripped">
                                    <thead>
                                        <tr style={{color: "#1E90FF"}}>
                                        <th>OrderID</th>
                                        <th>Customer Name</th>
                                        <th>Delivered Date</th>
                                        <th>Vehicle No</th>
                                        <th>CC Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      <td>#10985</td>
                                      <td>Osanda Gamage</td>
                                      <td>June 12 , 2020</td>
                                      <td>sp BEF 2030</td>
                                      <td>Aruna Homage</td>
                                      <td>Rs 15,000.00</td>
                                      <td>
                                        <button className="btn btn-success btn-sm px-2 mr-2">
                                          <FontAwesomeIcon icon={faEye} />
                                        </button>
                                      </td>
                                    </tbody>
                                    <tbody>
                                      <td>#20985</td>
                                      <td>Thisun Silva</td>
                                      <td>June 15 , 2020</td>
                                      <td>wp SAP 1010</td>
                                      <td>Thoshan Gallage</td>
                                      <td>Rs 55,000.00</td>
                                      <td>
                                        <button className="btn btn-success btn-sm px-2 mr-2">
                                          <FontAwesomeIcon icon={faEye} />
                                        </button>
                                      </td>
                                    </tbody>
                                    <tbody>
                                      <td>#34985</td>
                                      <td>Dilain Gunasekara</td>
                                      <td>June 20 , 2020</td>
                                      <td>sp WE - 3243</td>
                                      <td>Dipal Jayakodhi</td>
                                      <td>Rs 75,000.00</td>
                                      <td>
                                        <button className="btn btn-success btn-sm px-2 mr-2">
                                          <FontAwesomeIcon icon={faEye} />
                                        </button>
                                      </td>
                                    </tbody>
                                    <tbody>
                                      <td>#10985</td>
                                      <td>Osanda Gamage</td>
                                      <td>June 12 , 2020</td>
                                      <td>sp BEF 2030</td>
                                      <td>Aruna Homage</td>
                                      <td>Rs 15,000.00</td>
                                      <td>
                                        <button className="btn btn-success btn-sm px-2 mr-2">
                                          <FontAwesomeIcon icon={faEye} />
                                        </button>
                                      </td>
                                    </tbody>
                                    <tbody>
                                      <td>#20985</td>
                                      <td>Thisun Silva</td>
                                      <td>June 15 , 2020</td>
                                      <td>wp SAP 1010</td>
                                      <td>Thoshan Gallage</td>
                                      <td>Rs 55,000.00</td>
                                      <td>
                                        <button className="btn btn-success btn-sm px-2 mr-2">
                                          <FontAwesomeIcon icon={faEye} />
                                        </button>
                                      </td>
                                    </tbody>
                                    <tbody>
                                      <td>#34985</td>
                                      <td>Dilain Gunasekara</td>
                                      <td>June 20 , 2020</td>
                                      <td>sp WE - 3243</td>
                                      <td>Dipal Jayakodhi</td>
                                      <td>Rs 75,000.00</td>
                                      <td>
                                        <button className="btn btn-success btn-sm px-2 mr-2">
                                          <FontAwesomeIcon icon={faEye} />
                                        </button>
                                      </td>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                         </div>
                         {/* <button type="button" class="btn btn-success form-control">Build Order</button> */}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ViewOrderProgress);
