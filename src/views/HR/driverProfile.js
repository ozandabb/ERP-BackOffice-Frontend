import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import HRSidebar from "../HR/HRSidebar";
import { getAllDrivers, deleteDriver } from '../../controllers/driver';
import Config from '../../controllers/Config';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye, faTrash
} from "@fortawesome/free-solid-svg-icons";

class driverProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            AllDrivers: [],
        };
      }

      componentDidMount() {
        this.loadDrivers();
      }
    
      loadDrivers = () => {
        getAllDrivers()
          .then(result => {
            console.log(result);
            this.setState({ AllDrivers: result });
          })
          .catch(err => {
            // console.log(err);
          });
      };


    render() {
        const { AllDrivers } = this.state;
      return (
        <div className="bg-light wd-wrapper">
        <HRSidebar />
            <div className="wrapper-wx">
                <div className="container-fluid" >
                    <div className="row">
                    <div className="col-12">
                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                  Driver Profiles 
                  </h6>

                  <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                <div className="table-responsive ">
                                    <table className="table table-stripped">
                                    <thead>
                                        <tr style={{color: "#1E90FF"}}>
                                        <th>DriverId</th>
                                        <th>Employee No</th>
                                        <th>Address</th>
                                        <th>Contact No</th>
                                        <th>Salary</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {AllDrivers.map((item) =>
                                            this.renderAllDrivers(item)
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

    renderAllDrivers = (item) => {
        return (
          <tr key={item._id}>
                <td> {item.name}</td>
                <td>{item.empNo}</td>
                <td>{item.address}</td>
                <td>{item.contactNo}</td>
                <td>{item.salary}</td>
                <td>
                <Link to="/hrstaff/driverProfile/viewDriverProfile">
                    <button className="btn btn-success btn-sm px-2 mr-2">
                            <FontAwesomeIcon icon={faEye} />
                    </button>
                </Link>

                <button
            className="btn btn-danger btn-sm px-2 mr-2"
            onClick={() => this.onClickDelete(item)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
                </td>
            </tr>
        );
    }

    onClickDelete = (item) => {
      Config.setDeleteConfirmAlert(
        "",
        "Are you sure you want to delete this Driver ?",
        () => this.clickDeleteDriver(item._id),
        () => {}
      );
    };
  
    clickDeleteDriver = (id) => {
      console.log(id);
      deleteDriver(id)
        .then((result) => {
          this.loadDrivers();
          Config.setToast(" Driver Deleted Successfully");
        })
        .catch((err) => {
          console.log(err);
          Config.setErrorToast(" Somthing Went Wrong!");
        });
    };


}

const mapStateToProps = state => ({
  auth: state.auth || {},
});

export default connect(mapStateToProps)(withRouter(driverProfile));