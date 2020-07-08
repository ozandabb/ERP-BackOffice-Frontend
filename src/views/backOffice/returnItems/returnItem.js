import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import BOSidebar from "../BOSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye
} from "@fortawesome/free-solid-svg-icons";

class returnItem extends Component {
  render() {
    return (
        <div className="bg-light wd-wrapper">
        <BOSidebar />
            <div className="wrapper-wx">
                <div className="container-fluid" >
                    <div className="row">


                        {/* ==================================View New Order Header ========================== */}
                        <div className="col-12">
                            <h5 className="text-success bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                Customer Name : Osanda Gamage
                            </h5>
                        </div>

                        {/*==================================== Order details column start here ===========================================*/}
                        <div class="col">
                                    <div className="row">
                                        <div className="col">
                                                    <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2" style={{padding:"10px", color:"#929b94"}}> 
                                                    <h6 style={{color: "#1E90FF" }}>Cash Collector Name</h6>
                                                    <h3>Thisun Silva</h3>
                                                    </div>
                                            </div>
                                            <div className="col">
                                                    <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2" style={{padding:"10px", color:"#929b94"}}> 
                                                    <h6 style={{color: "#1E90FF" }}>Return Item Amount </h6>
                                                    <h3>4355.90 LKR</h3>
                                                    </div>
                                            </div>
                                            <div className="col">
                                                    <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2" style={{padding:"10px" , color:"#929b94"}}> 
                                                    <h6 style={{color: "#1E90FF" }}>Amount</h6>
                                                    <h3>16,000 LKR</h3>
                                                    </div>
                                            </div>
                                            <div className="col">
                                                    <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2" style={{padding:"10px", color:"#929b94"}}> 
                                                    <h6 style={{color: "#1E90FF" }}>Customer Name</h6>
                                                    <h3>Thoshan Gallage</h3>
                                                    </div>
                                            </div>
                                    </div>
                        
                        </div>
                        

                        
              <div className="col-12">
                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                   Return Request Items
                  <div className="col-12">
                            <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2">
                                <div className="table-responsive ">
                                    <table className="table table-stripped">
                                    <thead>
                                        <tr style={{color: "#1E90FF"}}>
                                        <th>ItemID</th>
                                        <th>Item Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      <td>#10985</td>
                                      <td>Sunlight</td>
                                      <td>05 Family Pack</td>
                                      <td>572.00 LKR</td>
                                    </tbody>
                                    <tbody>
                                      <td>#20985</td>
                                      <td>Mr POP</td>
                                      <td>6 Boxes</td>
                                      <td>1,000.00 LKR</td>
                                    </tbody>
                                    <tbody>
                                      <td>#34985</td>
                                      <td>Samba Rice </td>
                                      <td>5 Bags ( 1kg )</td>
                                      <td>2,000.00 LKR </td>
                                    </tbody>
                                    <tbody>
                                      <td>#10985</td>
                                      <td>Powder with beauty</td>
                                      <td>3 Boxes</td>
                                      <td>5,000.00 LKR </td>
                                    </tbody>
                                    <tbody>
                                      <td>#10985</td>
                                      <td>Sunlight</td>
                                      <td>05 Family Pack</td>
                                      <td>572.00 LKR</td>
                                    </tbody>
                                    <tbody>
                                      <td>#10985</td>
                                      <td>Sunlight</td>
                                      <td>05 Family Pack</td>
                                      <td>572.00 LKR</td>
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

export default withRouter(returnItem);
