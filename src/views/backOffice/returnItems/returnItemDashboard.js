
import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import BOSidebar from "../BOSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye
} from "@fortawesome/free-solid-svg-icons";

class returnItemDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            OrderID: "",
            CustomerName: "",
            DueDate:"",
            DeliveredDate: "",
            Amount: "",
            AllReturnItems: [1],
        };
      }

    render() {
        const { AllReturnItems } = this.state;
      return (
        <div className="bg-light wd-wrapper">
            <BOSidebar />
                <div className="wrapper-wx">
                    <div className="container-fluid" >
                        <div className="row">
                            <div class="col-8">
                                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                    Item Return Request
                                    <div className="col-12">
                                        <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2">
                                        <div className="table-responsive ">
                                                <table className="table table-stripped">
                                                <thead>
                                                    <tr style={{color: "#1E90FF"}}>
                                                    <th>Customer Name</th>
                                                    <th>Cash Collector Name</th>
                                                    <th>Amount</th>
                                                    <th>Check</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {AllReturnItems.map((item) =>
                                                        this.renderReturnItems(item)
                                                    )}
                                                    </tbody>
                                                </table>
                                        </div>
                                        </div>
                                    </div>
                                </h6>
                            </div>
                            <div class="col-4">
                                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">Older</h6>
                                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">Older4</h6>
                            </div>
                        </div>
                    </div>
                </div>
        </div> 
      );
    }

    renderReturnItems = (item) => {
        return (
            <tr>
                <td> {item.OrderID}</td>
                <td>{item.CustomerName}</td>
                <td>{item.DueDate}</td>
                <td>
                <Link to="/backoffice/returnItems">
                    <button className="btn btn-success btn-sm px-2 mr-2">
                            <FontAwesomeIcon icon={faEye} />
                    </button>
                </Link>
                </td>
            </tr>
        );
    }
}


export default withRouter(returnItemDashboard);