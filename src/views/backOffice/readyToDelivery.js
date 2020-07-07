import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import BOSidebar from "../backOffice/BOSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye
} from "@fortawesome/free-solid-svg-icons";

class readyToDelivery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OrderID: "",
            CustomerName: "",
            DueDate:"",
            DeliveredDate: "",
            Amount: "",
            AllNewOrders: [1],
        };
      }

    render() {
        const { AllNewOrders } = this.state;
      return (
        <div className="bg-light wd-wrapper">
        <BOSidebar />
            <div className="wrapper-wx">
                <div className="container-fluid" >
                    <div className="row">
                    <div className="col-12">
                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                  Ready to Delivery Orders 
                  </h6>

                  <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                <div className="table-responsive ">
                                    <table className="table table-stripped">
                                    <thead>
                                        <tr style={{color: "#1E90FF"}}>
                                        <th>OrderID</th>
                                        <th>Customer Name</th>
                                        <th>Ordered Date</th>
                                        <th>Vehicle No</th>
                                        <th>CC Name</th>
                                        <th>Amount</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {AllNewOrders.map((item) =>
                                            this.renderReadyToDeliveryOrders(item)
                                        )}
                                        </tbody>
                                    </table>
                                </div>
                </h6>
              </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }

    renderReadyToDeliveryOrders = (item) => {
        return (
            <tr>
                <td> {item.OrderID}</td>
                <td>{item.CustomerName}</td>
                <td>{item.DueDate}</td>
                <td>{item.DeliveredDate}</td>
                <td>{item.Amount}</td>
                <td>{item.Amount}</td>
                <td>
                <Link to="/backoffice/orders/orderProgress">
                                        <button className="btn btn-success btn-sm px-2 mr-2">
                                          <FontAwesomeIcon icon={faEye} />
                                        </button>
                                        </Link>
                </td>
            </tr>
        );
    }
}



export default withRouter(readyToDelivery);