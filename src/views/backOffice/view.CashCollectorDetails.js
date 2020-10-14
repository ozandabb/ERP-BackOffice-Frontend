import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import BOSidebar from "../backOffice/BOSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye
} from "@fortawesome/free-solid-svg-icons";

class viewCashCollectorDetails extends Component {
  render() {
    return (
        <div className="bg-light wd-wrapper">
        <BOSidebar />
            <div className="wrapper-wx">
                <div className="container-fluid" >
                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                     Cash Collector ID : #GG979-6732
                    </h6>
                    <div className="row">
                        <div class="col-4">
                                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                        <div className="col-12">
                                            <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2">
                                                <center><img src="/images/user2.jpg" className="img-fluid my-auto" style={{width:"187px"}}/></center>
                                            </div>
                                        </div>
                                </h6>
                        </div>
                    <div class="col-8">
                                <h3 className="text-dark bold-normal  bg-white shadow-sm mt-3 rounded" style={{padding:"30px"}}>
                                GUNADASA KAPUGE
                                        <div className="col-12">
                                            <br></br>
                                                    <div className="row">
                                                            <div class="col">
                                                                    <h6>Customer ID : #ED208646d</h6>
                                                                    <h6>Customer Name : Thoshan Gallage</h6>
                                                                    <h6>Location : 1177/44 , Malabe Rd , Kaduwela </h6>
                                                                    <h6>Registered Date : Jan 12 2020 </h6>
                                                            </div>
                                                            <div class="col">
                                                                    <h6>Customer ID : #ED208646d</h6>
                                                                    <h6>Customer Name : Thoshan Gallage</h6>
                                                                    <h6>Location : 1177/44 , Malabe Rd , Kaduwela </h6>
                                                                    <h6>Registered Date : Jan 12 2020 </h6>
                                                            </div>
                                                    </div>
                                        </div>
                                </h3>
                    </div>

                    
              <div className="col-12">
                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                  Delivery History 
                  <div className="col-12">
                            <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2">
                                <div className="table-responsive ">
                                <table className="table table-stripped">
                                    <thead>
                                        <tr style={{color: "#1E90FF"}}>
                                        <th>OrderID</th>
                                        <th>Ordered Date</th>
                                        <th>Vehicle No</th>
                                        <th>CC Name</th>
                                        <th>Amount</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      <td>#10985</td>
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
                         
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(viewCashCollectorDetails);
