import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import HRSidebar from '../HR/HRSidebar';
import Config from '../../controllers/Config';
import { connect } from 'react-redux';
import { getAllSuppliers, deleteSupplier } from '../../controllers/supplier';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import moment from "moment";
import { Modal } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';

// class ComponentToPrint extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true,
//       showUserModal: false,
//       AllSuppliers: [],
//       viewUser: '',
//     };
//   }

//   componentDidMount() {
//     this.loadSuppliers();
//   }

//   loadSuppliers = () => {
//     getAllSuppliers()
//       .then(result => {
//         this.setState({ AllSuppliers: result });
//       })
//       .catch(err => {
//       });
//   };

//    // view user modal
//     async showViewUser(i) {
//       var singleUser = this.state.AllSuppliers.filter(user => user._id == i);
//       await this.setState({
//           showUserModal: true,
//           viewUser: singleUser[0]
//       })
//     }

//   render() {
//     const { AllSuppliers, viewUser } = this.state;
//     return (
//       <h6 className='text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded'>

//       <div className='table-responsive '>
//       <table className='table table-stripped'>
//         <thead>
//           <tr style={{ color: '#1E90FF' }}>
//             <th>Supplier Name</th>
//             <th>Address</th>
//             <th>Phone No</th>
//             <th>Email</th>
//             <th>Join Date</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//         {AllSuppliers.map(item =>
//                           this.renderAllSuppliers(item)
//                         )}
//         </tbody>
//       </table>
//     </div>
//     <Modal size="lg"  show={this.state.showUserModal}  centered  onHide={() => this.setState({ showUserModal: false })} >
//                     <Modal.Header closeButton>
//                         <Modal.Title>View Supplier</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <div className="row">
                            
//                         <div className="col-md-8">
//                                  <div className="row">
//                                      <div className="col-md-12"><h5 className="card-title"> < b>Details </b></h5></div>
//                                      <div className="col-md-12">
//                                          <p><b>Name  : </b> {viewUser.name} </p>
//                                      </div>

//                                      <div className="col-md-7"> <p><b>Email : </b>   {viewUser.email}</p></div>

//                                     <div className="col-md-12">
//                                          <p><b>Created At  : </b> {viewUser.created_on} </p>
//                                      </div>
//                                      <div className="col-md-12">
//                                          <p><b>Address  : </b> {viewUser.address} </p>
//                                      </div>
//                                  </div>
//                              </div>
//                              <div className="col-md-12">
//                                 <center>
//                                     {/* <button className="btn btn-danger btn-sm px-2 mr-2 mt-1">
//                                         <FontAwesomeIcon icon={faBan} /> Block
//                                       </button> */}
//                                      <a className="btn btn-info btn-sm px-2 mr-2 mt-1" href={`mailto:${viewUser.email}`} >
//                                          <FontAwesomeIcon icon={faEnvelope} /> Send Email
//                                 </a>
//                                  </center>
//                              </div>
//                          </div>

//                      </Modal.Body>
//                  </Modal>
//     </h6>

//     );
//   }

  
//   renderAllSuppliers = item => {
//     return (
//       <tr key={item._id}>
//         {/* <td>{item.customerId}</td> */}
//         <td>{item.name}</td>
//         <td>{item.address}</td>
//         <td>{item.phoneNo}</td>
//         <td>{item.email}</td>
//         <td>{moment(new Date(item.created_on)).format("YYYY MMM DD")}</td>
//         {/* <td>{item.DeliveredDate}</td>
//                 <td>{item.Amount}</td> */}
//         <td>
//           {/* <Link to='/hrstaff/customerProfile/ViewCustomerProfile'> */}
//             <button className='btn btn-success btn-sm px-2 mr-2' onClick={() => this.showViewUser(item._id)}>
//               <FontAwesomeIcon icon={faEye} />
//             </button>
//           {/* </Link> */}

//           <button
//             className="btn btn-danger btn-sm px-2 mr-2"
//             onClick={() => this.onClickDelete(item)}
//           >
//             <FontAwesomeIcon icon={faTrash} />
//           </button>
//         </td>
//       </tr>
//     );
//   };

//   onClickDelete = (item) => {
//     Config.setDeleteConfirmAlert(
//       "",
//       "Are you sure you want to delete this Supplier ?",
//       () => this.clickDeleteSupplier(item._id),
//       () => {}
//     );
//   };

//   clickDeleteSupplier = (id) => {
//     console.log(id);
//     deleteSupplier(id)
//       .then((result) => {
//         this.loadSuppliers();
//         Config.setToast(" Product Deleted Successfully");
//       })
//       .catch((err) => {
//         console.log(err);
//         Config.setErrorToast(" Somthing Went Wrong!");
//       });
//   };
// }
 
// class supplierProfile extends React.Component {
 
   
//   render() {

//     return (
//          <div className='bg-light wd-wrapper'>
//          <HRSidebar />
//          <div className='wrapper-wx'>
//            <div className='container-fluid'>
//              <div className='row'>
//                <div className='col-12'>
//                  <h6 className='text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded'>
//                    Supplier Profiles
//                  </h6>
//                  <ReactToPrint
//                     trigger={() => {
//                       return <a href="#">Print this out!</a>;
//                     }}
//                     content={() => this.componentRef}
//                   />
//                   <ComponentToPrint ref={el => (this.componentRef = el)} />
      
               
 
//                </div>
//              </div>
//            </div>
//          </div>

        

//          </div>
//     );
//   }
// }

class supplierProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      loading: true,
      showUserModal: false,
      AllSuppliers: [],
      viewUser: '',
    };
  }

  componentDidMount() {
    this.loadSuppliers();
  }

  loadSuppliers = () => {
    getAllSuppliers()
      .then(result => {
        this.setState({ AllSuppliers: result });
      })
      .catch(err => {
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

onChange = e =>{
  this.setState({search : e.target.value });
}

  render() {
    const { AllSuppliers, viewUser } = this.state;
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

                <div className="col-12">
                    {/* <h6 className="form-label py-1">Supplier Full Name</h6> */}
                      <input
                                        type="text"
                                                    name="Supplier name"
                                                    placeholder="Search by name" 
                                                    // value={this.state.name}
                                                    onChange={ this.onChange}
                                                    className="form-control" ></input>
                                            </div>
     
                <h6 className='text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded'>
                  <div className='table-responsive '>
                    <table className='table table-stripped'>
                      <thead>
                        <tr style={{ color: '#1E90FF' }}>
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
                                        <p><b>Name  : </b> {viewUser.name} </p>
                                    </div>

                                    <div className="col-md-7"> <p><b>Email : </b>   {viewUser.email}</p></div>

                                    <div className="col-md-12">
                                        <p><b>Created At  : </b> {viewUser.created_on} </p>
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

  renderAllSuppliers = item => {
    const { search } = this.state;

    if( search !== "" && item.name.toLowerCase().indexOf(search.toLowerCase()) === -1){
      return null;
    }

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
          {/* <Link to='/hrstaff/customerProfile/ViewCustomerProfile'> */}
            <button className='btn btn-success btn-sm px-2 mr-2' onClick={() => this.showViewUser(item._id)}>
              <FontAwesomeIcon icon={faEye} />
            </button>
          {/* </Link> */}

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
