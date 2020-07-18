import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import HRSidebar from "../HR/HRSidebar";
import { getAllVehicles, deleteVehicle } from '../../controllers/vehicle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Config from '../../controllers/Config';
import {
  faEye, faTrash
} from "@fortawesome/free-solid-svg-icons";

class vehicleProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            AllVehicles: [],
        };
      }

      
      componentDidMount() {
        this.loadVehicles();
      }
    
      loadVehicles = () => {
        getAllVehicles()
          .then(result => {
            console.log(result);
            this.setState({ AllVehicles: result });
          })
          .catch(err => {
            // console.log(err);
          });
      };


    render() {
        const { AllVehicles } = this.state;
      return (
        <div className="bg-light wd-wrapper">
        <HRSidebar />
            <div className="wrapper-wx">
                <div className="container-fluid" >
                    <div className="row">
                    <div className="col-12">
                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                  Vehicles Profiles 
                  </h6>

                  <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                <div className="table-responsive ">
                                    <table className="table table-stripped">
                                    <thead>
                                        <tr style={{color: "#1E90FF"}}>
                                        <th>VehicleID</th>
                                        <th>Vehicle Number</th>
                                        <th>Join Date</th>
                                        <th>Owner Name</th>
                                        <th>Amount</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {AllVehicles.map((item) =>
                                            this.renderAllVehicles(item)
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

    renderAllVehicles = (item) => {
        return (
            <tr>
                <td> {item.vehicleNumber}</td>
                <td>{item.licenseDetails.licenseNo}</td>
                <td>{item.vehicleType}</td>
                <td>{item.weight}</td>
                <td>{item.volume}</td>
                <td>
                <Link to="/hrstaff/vehicleProfile/viewVehicleProfile">
                    <button className="btn btn-success btn-sm px-2 mr-2">
                            <FontAwesomeIcon icon={faEye} />
                    </button>
                </Link>

                <button
                    className="btn btn-danger btn-sm px-2 mr-2"
                    onClick={() => this.onClickDelete(item)} >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                </td>
            </tr>
        );
    }

    onClickDelete = (item) => {
        Config.setDeleteConfirmAlert(
          "",
          "Are you sure you want to delete this Vehicle ?",
          () => this.clickDeleteVehicle(item._id),
          () => {}
        );
      };
    
      clickDeleteVehicle = (id) => {
        console.log(id);
        deleteVehicle(id)
          .then((result) => {
            this.loadVehicles();
            Config.setToast(" Vehicle Deleted Successfully");
          })
          .catch((err) => {
            console.log(err);
            Config.setErrorToast(" Somthing Went Wrong!");
          });
      };
  


}



export default withRouter(vehicleProfile);