import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import AccExSidebar from "./AccExSidebar";
import Select from 'react-select';
import { Line as LineChart, Bar, Doughnut } from 'react-chartjs-2';
import { faPen, faTrash, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { getAllSuppliers } from '../../controllers/supplier';
// import { getAllDrivers } from '../../controllers/driver';
// import { getAllCustomers } from '../../controllers/customer';

class SalesInvoicePosting extends Component {
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

    //Account Type
    const ProvinceOptions = [
        { value: 'Savings Accounts ', label: 'Savings Accounts ' },
        { value: 'Chequing Account ', label: 'Chequing Account ' },
        { value: 'Credit Account', label: 'Credit Account' },
        { value: 'Cash Account', label: 'Cash Account' },
      ];
      const groupedOptions = [
        {
          label: 'ACCOUNT TYPE',
          options: ProvinceOptions,
        }
    ]

    //DefaultCurrencyAccount
    const DefaultCurrencyAccount = [
        { value: 'Yes', label: 'Yes ' },
        { value: 'No ', label: 'No ' },
      
      ];
      const groupedOptions2 = [
        {
          label: 'Default currency account',
          options: DefaultCurrencyAccount,
        }
    ]

    //Bank Account Currency:
    const BankAccountCurrency = [
        { value: 'LKR', label: 'LKR ' },
        { value: 'USD ', label: 'USD ' },
      
      ];
      const groupedOptions3 = [
        {
          label: 'Bank Account Currency',
          options: BankAccountCurrency,
        }
    ]
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
                                        <li class="nav-item">
                                            <a class="nav-link" href="/finance/Sales">Sales Orders </a>
                                        </li>
                                        <li class="nav-item active">
                                            <a class="nav-link" href="/finance/SalesInvoicePosting">Invoice Posting<span class="sr-only">(current)</span></a>
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
                                        {/* <form class="form-inline my-2 my-lg-0">
                                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                        </form> */}
                                    </div>
                            
                                    </nav>
                            </div>
                            </div>
                            </h6></div>
                    </div>

                    <div className="row">
                    <div className="col-12">
                                <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-3 mb-2">
                                    <form className="py-1  px-3" method="POST" onSubmit={(e) => this.onSubmit(e)}>
                                    <div className="card border-0 py-2 bg-white shadow-sm px-3 mt-3 rounded">
                                            <b>Enter Invoice Details</b>
                                        <div className="row">

                                             {/*---------Bank Account Name --------------  */}
                                             <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Order ID</h6>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    // value={name}
                                                    // onChange={(e) => this.formValueChange(e)}
                                                    placeholder="Enter Order ID"
                                                    className="form-control" ></input>
                                                {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
                                            </div>

                                             {/*---------Account Type--------------  */}
                                             <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Reference </h6>
                                                <Select
                                                    closeMenuOnSelect={false}
                                                    defaultValue={this.state.sizes}
                                                    onChange={this.handleChangeSizes}
                                                    placeholder="Select Reference"
                                                    options={groupedOptions}
                                                />
                                                {/* {errors.sizes && errors.sizes.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.sizes}</h4>} */}
                                            </div>

                                            {/*---------Default currency account--------------  */}
                                            <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Customer </h6>
                                                <Select
                                                    closeMenuOnSelect={false}
                                                    defaultValue={this.state.sizes}
                                                    onChange={this.handleChangeSizes}
                                                    placeholder="Select Customer"
                                                    options={groupedOptions2}
                                                />
                                                {/* {errors.sizes && errors.sizes.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.sizes}</h4>} */}
                                            </div>


                                            {/*---------Bank Account Currency:-------------  */}
                                            <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Location | Branch</h6>
                                                <Select
                                                    closeMenuOnSelect={false}
                                                    defaultValue={this.state.sizes}
                                                    onChange={this.handleChangeSizes}
                                                    placeholder="Select Location"
                                                    options={groupedOptions3}
                                                />
                                                {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
                                            </div>

                                             {/*---------Bank Account GL Code-------------  */}
                                             <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Order Date</h6>
                                                <Select
                                                    closeMenuOnSelect={false}
                                                    defaultValue={this.state.sizes}
                                                    onChange={this.handleChangeSizes}
                                                    placeholder="Select Order Date"
                                                    options={groupedOptions}
                                                />
                                                {/* {errors.sizes && errors.sizes.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.sizes}</h4>} */}
                                            </div>

                                            {/*---------Bank Charges Account-------------  */}
                                            <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Required Date</h6>
                                                <Select
                                                    closeMenuOnSelect={false}
                                                    defaultValue={this.state.sizes}
                                                    onChange={this.handleChangeSizes}
                                                    placeholder="Select Required Date"
                                                    options={groupedOptions2}
                                                />
                                                {/* {errors.sizes && errors.sizes.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.sizes}</h4>} */}
                                            </div>


                                            {/*---------Product sizes--------------  */}
                                            <div className="col-sm-8 mt-2">
                                                <h6 className="form-label py-1">Delivery to</h6>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    // value={name}
                                                    // onChange={(e) => this.formValueChange(e)}
                                                    placeholder="Enter Delivery Place"
                                                    className="form-control" ></input>
                                                {/* {errors.sizes && errors.sizes.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.sizes}</h4>} */}
                                            </div>

                                            {/*---------Product sizes--------------  */}
                                            <div className="col-sm-4 mt-2">
                                                <h6 className="form-label py-1">Order Total</h6>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    // value={name}
                                                    // onChange={(e) => this.formValueChange(e)}
                                                    placeholder="Enter Order Total"
                                                    className="form-control" ></input>
                                                {/* {errors.sizes && errors.sizes.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.sizes}</h4>} */}
                                            </div>

                                            {/*---------customer full Name--------------  */}
                                            {/* <div className="col-12 mt-2">
                                                <h6 className="form-label py-1">Bank Address</h6>
                                                <input
                                                    type="text"
                                                    name="bankAddress"
                                                    placeholder="Enter Bank Address" 
                                                    value={this.state.name}
                                                    onChange={(e) => this.onChangeName(e)}
                                                    className="form-control" ></input>
                                            </div> */}

                                            <div className="col-md-12 mt-3">
                                            <div className="d-flex">
                                                    <button className="px-4 btn btn-dark  btn-sm bold-normal" type="submit">
                                                         Add Sales Order Details</button>
                                                </div>
                                            </div>


                                        </div>
                                        </div>
                                    </form>
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

export default withRouter(SalesInvoicePosting);
