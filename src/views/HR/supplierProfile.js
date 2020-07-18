import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import HRSidebar from '../HR/HRSidebar';
import Config from '../../controllers/Config';
import { connect } from 'react-redux';
import { getAllSuppliers, deleteSupplier } from '../../controllers/supplier';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import moment from "moment";

class supplierProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      AllSuppliers: [],
    };
  }

  componentDidMount() {
    this.loadSuppliers();
  }

  loadSuppliers = () => {
    getAllSuppliers()
      .then(result => {
        // console.log(result);
        this.setState({ AllSuppliers: result });
      })
      .catch(err => {
        // console.log(err);
      });
  };

  render() {
    const { AllSuppliers } = this.state;
    return (
      <div className='bg-light wd-wrapper'>
        <HRSidebar />
        <div className='wrapper-wx'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
                <h6 className='text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded'>
                  Supplier Profiles
                </h6>
     
                <h6 className='text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded'>
                  <div className='table-responsive '>
                    <table className='table table-stripped'>
                      <thead>
                        <tr style={{ color: '#1E90FF' }}>
                          {/* <th>SupplierID</th> */}
                          <th>Supplier Name</th>
                          <th>Address</th>
                          <th>Phone No</th>
                          <th>Email</th>
                          <th>Join Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {AllSuppliers.map(item =>
                          this.renderAllSuppliers(item)
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

  renderAllSuppliers = item => {
    return (
      <tr key={item._id}>
        {/* <td>{item.customerId}</td> */}
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.phoneNo}</td>
        <td>{item.email}</td>
        <td>{moment(new Date(item.created_on)).format("YYYY MMM DD")}</td>
        {/* <td>{item.DeliveredDate}</td>
                <td>{item.Amount}</td> */}
        <td>
          <Link to='/hrstaff/customerProfile/ViewCustomerProfile'>
            <button className='btn btn-success btn-sm px-2 mr-2'>
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
  };

  onClickDelete = (item) => {
    Config.setDeleteConfirmAlert(
      "",
      "Are you sure you want to delete this Supplier ?",
      () => this.clickDeleteSupplier(item._id),
      () => {}
    );
  };

  clickDeleteSupplier = (id) => {
    console.log(id);
    deleteSupplier(id)
      .then((result) => {
        this.loadSuppliers();
        Config.setToast(" Product Deleted Successfully");
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

export default connect(mapStateToProps)(withRouter(supplierProfile));
