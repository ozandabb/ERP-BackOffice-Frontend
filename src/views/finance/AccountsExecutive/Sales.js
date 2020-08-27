import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import AccExSidebar from "./AccExSidebar";
import { Line as LineChart, Bar, Doughnut } from 'react-chartjs-2';
import { faPen, faTrash, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { getAllSuppliers } from '../../controllers/supplier';
// import { getAllDrivers } from '../../controllers/driver';
// import { getAllCustomers } from '../../controllers/customer';

class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AllSuppliers: [],
      AllDrivers: [],
      AllCustomers: [],
    };
  }

//   componentDidMount() {
//     this.loadSuppliers();
//     this.loadDrivers();
//     this.loadCustomers();
//   }

//   loadCustomers = () => {
//     getAllCustomers()
//       .then(result => {
//         this.setState({ AllCustomers: result });
//       })
//       .catch(err => {
//       });
//   };

//   loadSuppliers = () => {
//     getAllSuppliers()
//       .then(result => {
//         this.setState({ AllSuppliers: result });
//       })
//       .catch(err => {
//       });
//   };

//   loadDrivers = () => {
//     getAllDrivers()
//       .then(result => {
//         this.setState({ AllDrivers: result });
//       })
//       .catch(err => {
//       });
//   };

  render() {
    // const { AllSuppliers, AllDrivers, AllCustomers } = this.state;
    return (
        <div className="bg-light wd-wrapper">
        <AccExSidebar />
            <div className="wrapper-wx">
                <div className="container-fluid" >
                    <div className="row">
                    <div className="col-12">
                                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">


                        <div className="nav-item" >
                            <div className="container">
                                <nav class="navbar navbar-expand-lg navbar-light bg-white">
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                                        {/* <a class="navbar-brand" href="#">Hidden brand</a> */}
                                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                        <li class="nav-item active">
                                            <a class="nav-link">Sales Orders <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/finance/SalesInvoicePosting">Invoice Posting</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href=""> </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href=""></a>
                                        </li>
                                        {/* <li class="nav-item">
                                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                        </li> */}
                                        </ul>
                                        <form class="form-inline my-2 my-lg-0">
                                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                        </form>
                                    </div>
                            
                                    </nav>
                            </div>
                            </div>
                            </h6></div>
                    </div>

                    <div className="row">
                    <div className="col-12">
                                <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-3 mb-5">
                                    <h6 className='text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded'>
                                        <div className='table-responsive '>
                                            <table className='table table-stripped'>
                                            <thead>
                                                <tr style={{ color: '#1E90FF' }}>
                                                <th>Order ID</th>
                                                <th>Reference</th>
                                                <th>Customer</th>
                                                <th>Branch</th>
                                               
                                                <th>Order Date</th>
                                                <th>Required Date</th>
                                                <th>Delivery Date</th>
                                                <th>Order Total</th>
                                                <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <td>#1134524</td>
                                                <td>Doha Bank</td>
                                                <td>Cash Account</td>
                                                <td>LKR</td>
                                                <td>010203 CJ Banking</td>
                                                <td>BOC</td>
                                                <td>12414346547687989</td>
                                                <td>Matara Super Branch</td>
                                                <td>
                                                     <Link >
                                                        <button className='btn btn-success btn-sm px-2 mr-2'>
                                                        <FontAwesomeIcon icon={faPen} />
                                                        </button>
                                                    </Link>
                                                    <button className='btn btn-danger btn-sm px-2 mr-2'>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                        </button>
                                                </td>
                                                {/* {AllSuppliers.map(item =>
                                                this.renderAllSuppliers(item)
                                                )} */}
                                            </tbody>
                                            </table>
                                        </div>
                                    </h6>
                                </div>
                            </div>
                    </div>

                    </div>
            </div>
        </div>
    );
  }
}

const cardstyle = "card border-0 shadow-sm rounded mt-3 bg-white py-3 d-flex flex-row"

export default withRouter(Sales);
