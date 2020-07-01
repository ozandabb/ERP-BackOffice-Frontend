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

                        {/* ==================================View New Order Header ========================== */}
                        <div className="col-12">
                            <h5 className="text-success bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                Order ID : #973467
                            </h5>
                        </div>

                        {/*==================================== Order details column start here ===========================================*/}
                        <div class="col">
                                    <div className="row">
                                        <div className="col">
                                                    <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2" style={{padding:"10px", color:"#929b94"}}> 
                                                    <h6 style={{color: "#1E90FF" }}>Ordered Date</h6>
                                                    <h3>June 30, 2020</h3>
                                                    </div>
                                            </div>
                                            <div className="col">
                                                    <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2" style={{padding:"10px", color:"#929b94"}}> 
                                                    <h6 style={{color: "#1E90FF" }}>Due Date</h6>
                                                    <h3>July 02, 2020</h3>
                                                    </div>
                                            </div>
                                    </div>
                                    <div className="row">
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
                        {/*==================================== Order details column ends here ===========================================*/}

                        {/*==================================== Customer details column start here ===========================================*/}
                        <div class="col">
                                <div className="col-12">
                                     <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2" style={{padding:"20px"}}>
                                        <div className="row">
                                            <div class="col-4">
                                                    <center><img src="/images/user2.jpg" className="img-fluid my-auto" style={{width:"120px"}}/></center>
                                            </div>
                                            <div class="col-8">
                                                        <h6>Customer ID : #ED208646d</h6>
                                                        <h6>Customer Name : Thoshan Gallage</h6>
                                                        <h6>Location : 1177/44 , Malabe Rd , Kaduwela </h6>
                                                        <h6>Registered Date : Jan 12 2020 </h6> 
                                            </div>
                                        </div>
                                        <Link to="/backoffice/orders/neworder/customer">
                                        <button type="button" class="btn btn-success form-control">View More Details</button></Link>
                                    </div>
                                </div>
                        </div>
                        {/* ====================================Customer details column ends here =============================================*/}
              <div className="col-12">
                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                  Ordered Items 
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
                         <button type="button" class="btn btn-success form-control">Build Order</button>
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
