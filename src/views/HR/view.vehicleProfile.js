
import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import HRSidebar from "../HR/HRSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye
} from "@fortawesome/free-solid-svg-icons";


class viewVehicleProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
        OrderID: "",
        CustomerName: "",
        DueDate:"",
        DeliveredDate: "",
        Amount: "",
        VehiclesDetails: [1],
    };
  }
    render() {
        const { VehiclesDetails } = this.state;
      return (
        <div className="bg-light wd-wrapper">
        <HRSidebar />
            <div className="wrapper-wx">
                <div className="container-fluid" >
                    <div className="row">
                    <div class="col">
                    <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                      Vehicle No : sp BAF 3996
                    </h6>
                    <h3 className="text-dark bold-normal  bg-white shadow-sm mt-3 rounded" style={{padding:"30px"}}>
                             All Vehicle Details
                          <div className="col-12">
                          <br></br>
                              <h6>Customer ID : #ED208646d</h6>
                              <h6>Customer Name : Thoshan Gallage</h6>
                              <h6>Location : 1177/44 , Malabe Rd , Kaduwela </h6>
                              <h6>Registered Date : Jan 12 2020 </h6>
                              <h6>Customer ID : #ED208646d</h6>
                              <h6>Customer Name : Thoshan Gallage</h6>
                              <h6>Location : 1177/44 , Malabe Rd , Kaduwela </h6>
                              <h6>Registered Date : Jan 12 2020 </h6>
                              <h6>Customer ID : #ED208646d</h6>
                              <h6>Customer Name : Thoshan Gallage</h6>
                              <h6>Location : 1177/44 , Malabe Rd , Kaduwela </h6>
                              <h6>Registered Date : Jan 12 2020 </h6>
                         </div>
                    </h3>
                      
                    </div>    
                        <div class="col">
                                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                        <div className="col-12">
                                            <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2">
                                                <center><img src="/images/user2.jpg" className="img-fluid my-auto" /></center>
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
    renderVehicleDetails = (item) => {
        return (
            <tr>
                <td> {item.OrderID}</td>
                <td>{item.CustomerName}</td>
                <td>{item.DueDate}</td>
                <td>{item.DeliveredDate}</td>
                <td>{item.Amount}</td>
                <td>
                     <button className="btn btn-success btn-sm px-2 mr-2">
                         <FontAwesomeIcon icon={faEye} />
                     </button>
                </td>
            </tr>
        );
    }
}

export default withRouter(viewVehicleProfile);