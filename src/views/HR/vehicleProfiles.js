import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import HRSidebar from "../HR/HRSidebar";
import { getAllVehicles, deleteVehicle } from '../../controllers/vehicle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Config from '../../controllers/Config';
import { Modal } from 'react-bootstrap';
import {
  faEye, faTrash, faEnvelope 
} from "@fortawesome/free-solid-svg-icons";

class vehicleProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            AllVehicles: [],
            viewUser: '',
            showUserModal: false,
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

      // view user modal
  async showViewUser(i) {
    var singleUser = this.state.AllSuppliers.filter(user => user._id == i);
    await this.setState({
        showUserModal: true,
        viewUser: singleUser[0]
    })

}


    render() {
        const { AllVehicles, viewUser } = this.state;
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
            <Modal size="lg"  show={this.state.showUserModal}  centered  onHide={() => this.setState({ showUserModal: false })} >
                    <Modal.Header closeButton>
                        <Modal.Title>View Supplier</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-4">

                                {/* <div className="IS_UI_profilePic" >
                                    <div className="profilePicture" >
                                        <img src={viewUser.profilepic == undefined || viewUser.profilepic == null ? image : `${C_Config.host}${C_Config.port}/${viewUser.profilepic}`} alt="lucidex user" />

                                    </div>
                                </div> */}

                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-12"><h5 className="card-title"> < b>Details </b></h5></div>
                                    <div className="col-md-12">
                                        <p><b>Vehicle No  : </b> {viewUser.vehicleNumber} </p>
                                    </div>

                                    <div className="col-md-7"> <p><b>Vehicle Type : </b>   {viewUser.vehicleType}</p></div>

                                    <div className="col-md-12">
                                        <p><b>Weight  : </b> {viewUser.weight} </p>
                                    </div>
                                    <div className="col-md-12">
                                        <p><b>Volume  : </b> {viewUser.volume} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <center>
                                    {/* <button className="btn btn-danger btn-sm px-2 mr-2 mt-1">
                                        <FontAwesomeIcon icon={faBan} /> Block
                                      </button> */}
                                    <a className="btn btn-info btn-sm px-2 mr-2 mt-1" href={`mailto:${viewUser.email}`} >
                                        <FontAwesomeIcon icon={faEnvelope} /> Send Email
                               </a>
                                </center>
                            </div>
                        </div>

                    </Modal.Body>
                </Modal>
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
                {/* <Link to="/hrstaff/vehicleProfile/viewVehicleProfile"> */}
                    <button className="btn btn-success btn-sm px-2 mr-2" onClick={() => this.showViewUser(item._id)}>
                            <FontAwesomeIcon icon={faEye} />
                    </button>
                {/* </Link> */}

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