import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import HRSidebar from '../HR/HRSidebar';
import Config from '../../controllers/Config';
import { connect } from 'react-redux';
import { getAllCustomers, deleteCustomer } from '../../controllers/customer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,  faTrash, faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import Item from 'antd/lib/list/Item';

class customerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      AllCustomers: [],
      viewUser: '',
      showUserModal: false,
    };
  }

  componentDidMount() {
    this.loadCustomers();
  }

  loadCustomers = () => {
    getAllCustomers()
      .then(result => {
        // console.log(result);
        this.setState({ AllCustomers: result });
      })
      .catch(err => {
        // console.log(err);
      });
  };

   // view user modal
   async showViewUser(i) {
    var singleUser = this.state.AllCustomers.filter(user => user._id == i);
    await this.setState({
        showUserModal: true,
        viewUser: singleUser[0]
    })
    // console.log(this.state.viewUser);

}

  render() {
    const { AllCustomers, viewUser } = this.state;
    return (
      <div className='bg-light wd-wrapper'>
        <HRSidebar />
        <div className='wrapper-wx'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
                <h6 className='text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded'>
                  Customer Profiles
                </h6>
     
                <h6 className='text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded'>
                  <div className='table-responsive '>
                    <table className='table table-stripped'>
                      <thead>
                        <tr style={{ color: '#1E90FF' }}>
                          <th>CustomerID</th>
                          <th>Customer Name</th>
                          <th>Address</th>
                          <th>Phone No</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {AllCustomers.map(item =>
                          this.renderAllNewCustomers(item)
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
                        <Modal.Title>View Customer</Modal.Title>
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
                                        <p><b>Name  : </b> {viewUser.customerName} </p>
                                    </div>

                                    <div className="col-md-7"> <p><b>Email : </b>   {viewUser.email}</p></div>

                                    <div className="col-md-12">
                                        <p><b>Contact No : </b> {viewUser.phoneNo} </p>
                                    </div>
                                    <div className="col-md-12">
                                        <p><b>Address  : </b> {viewUser.address} </p>
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

  renderAllNewCustomers = item => {
    return (
      <tr key={item._id}>
        <td>{item.customerId}</td>
        <td>{item.customerName}</td>
        <td>{item.address}</td>
        <td>{item.phoneNo}</td>
        {/* <td>{item.DeliveredDate}</td>
                <td>{item.Amount}</td> */}
        <td>
          <Link to='/hrstaff/customer_registration/SingleCustomerProfile'>
            <button className='btn btn-success btn-sm px-2 mr-2' 
            // onClick={() => this.showViewUser(item._id)}
            >
              <FontAwesomeIcon icon={faEye} />
            </button>
          </Link>
          <button className="btn btn-danger btn-sm px-2 mr-2" onClick={() => this.onClickDelete(item)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </td>
      </tr>
    );
  };

  onClickDelete = (item) => {
    Config.setDeleteConfirmAlert(
      "",
      "Are you sure you want to delete this Customer ?",
      () => this.clickDeleteSupplier(item._id),
      () => {}
    );
  };

  clickDeleteSupplier = (id) => {
    console.log(id);
    deleteCustomer(id)
      .then((result) => {
        this.loadCustomers();
        Config.setToast(" Customer Deleted Successfully");
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

export default connect(mapStateToProps)(withRouter(customerProfile));
