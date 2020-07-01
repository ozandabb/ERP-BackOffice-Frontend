import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import BOSidebar from "../backOffice/BOSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye
} from "@fortawesome/free-solid-svg-icons";

class ViewOrders extends Component {
  render() {
    return (
      <div className="bg-light wd-wrapper">
        <BOSidebar />
        <div className="wrapper-wx">
          <div className="container-fluid" >
            <div className="row">
              <div class="col">
                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                  New Orders
                  <div className="col-12">
                            <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2">
                                <div className="table-responsive ">
                                    <table className="table table-stripped">
                                    <thead>
                                        <tr style={{color: "#1E90FF"}}>
                                        <th>OrderID</th>
                                        <th>Customer Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      <td>#10985</td>
                                      <td>Osanda Gamage</td>
                                      <td>Rs 15,000.00</td>
                                      <td>
                                      <Link to="/backoffice/orders/neworder">
                                        <button className="btn btn-success btn-sm px-2 mr-2">
                                          <FontAwesomeIcon icon={faEye} />
                                        </button>
                                        </Link>
                                      </td>
                                    </tbody>
                                    <tbody>
                                      <td>#20985</td>
                                      <td>Thisun Silva</td>
                                      <td>Rs 55,000.00</td>
                                      <td>
                                      <Link to="/backoffice/orders/neworder">
                                        <button className="btn btn-success btn-sm px-2 mr-2">
                                          <FontAwesomeIcon icon={faEye} />
                                        </button>
                                        </Link>
                                      </td>
                                    </tbody>
                                    <tbody>
                                      <td>#34985</td>
                                      <td>Dilain Gunasekara</td>
                                      <td>Rs 75,000.00</td>
                                      <td>
                                      <Link to="/backoffice/orders/neworder">
                                        <button className="btn btn-success btn-sm px-2 mr-2">
                                          <FontAwesomeIcon icon={faEye} />
                                        </button>
                                        </Link>
                                      </td>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                         </div>
                </h6>
              </div>
              <div class="col">
                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                  Ready to Delivery
                  <div className="col-12">
                            <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2">
                                <div className="table-responsive ">
                                    <table className="table table-stripped">
                                    <thead>
                                        <tr style={{color: "#1E90FF"}}>
                                        <th>OrderID</th>
                                        <th>CC Name</th>
                                        <th>Vehicle No</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      <td>#10985</td>
                                      <td>Osanda Gamage</td>
                                      <td>Pending</td>
                                      <td>
                                      <Link to="/backoffice/orders/orderProgress">
                                        <button className="btn btn-success btn-sm px-2 mr-2">
                                          <FontAwesomeIcon icon={faEye} />
                                        </button>
                                        </Link>
                                      </td>
                                    </tbody>
                                    <tbody>
                                      <td>#20985</td>
                                      <td>Thisun Silva</td>
                                      <td>Rs 55,000.00</td>
                                      <td>
                                      <Link to="/backoffice/orders/orderProgress">
                                        <button className="btn btn-success btn-sm px-2 mr-2">
                                          <FontAwesomeIcon icon={faEye} />
                                        </button>
                                        </Link>
                                      </td>
                                    </tbody>
                                   
                                    </table>
                                </div>
                            </div>
                         </div>
                </h6>
              </div>
              <div className="col-12">
                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                  Complete Orders 
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
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ViewOrders);
