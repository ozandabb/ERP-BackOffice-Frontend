import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import AccSidebar from "./AccSidebar";
import { Line as LineChart, Bar, Doughnut } from 'react-chartjs-2';
import Select from 'react-select';
import { faPen, faTrash, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { getAllSuppliers } from '../../controllers/supplier';
// import { getAllDrivers } from '../../controllers/driver';
// import { getAllCustomers } from '../../controllers/customer';

class FiscalYear extends Component {
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
        { value: 'Supplier Invoice', label: 'Supplier Invoice ' },
        { value: 'Purchase Order ', label: 'Purchase Order ' },
      
      ];
      const groupedOptions2 = [
        {
          label: 'Transaction Type',
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
        <AccSidebar />
            <div className="wrapper-wx">
                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-12">
                                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                Fiscal Years
                                </h6>
                        </div>
                    </div>


                      {/* enter supplier payment */}
                      <div className="row">
                    <div className="col-12">
                                <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-3 mb-2">
                                    <form className="py-1  px-3" method="POST" onSubmit={(e) => this.onSubmit(e)}>
                                    <div className="card border-0 py-2 bg-white shadow-sm px-3 mt-3 rounded">
                                            <b>Enter Fiscal Year Details</b>
                                        <div className="row">

                                               {/*---------Account Type--------------  */}
                                               <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">ID</h6>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    // value={name}
                                                    // onChange={(e) => this.formValueChange(e)}
                                                    placeholder="This will generate automatically "
                                                    className="form-control" ></input>
                                                {/* {errors.sizes && errors.sizes.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.sizes}</h4>} */}
                                            </div>

                                             {/*---------Bank Account Name --------------  */}
                                             <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Beginning year</h6>
                                                <Select
                                                    closeMenuOnSelect={false}
                                                    defaultValue={this.state.sizes}
                                                    onChange={this.handleChangeSizes}
                                                    placeholder="Select Beginning year"
                                                    options={groupedOptions2}
                                                />
                                                
                                                {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
                                            </div>

                                          

                                            {/*---------Default currency account--------------  */}
                                            <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Ending year</h6>
                                                <Select
                                                    closeMenuOnSelect={false}
                                                    defaultValue={this.state.sizes}
                                                    onChange={this.handleChangeSizes}
                                                    placeholder="Select Ending year"
                                                    options={groupedOptions2}
                                                />
                                                {/* {errors.sizes && errors.sizes.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.sizes}</h4>} */}
                                            </div>


                                         

                                            <div className="col-md-12 mt-3">
                                            <div className="d-flex">
                                                    <button className="px-4 btn btn-dark  btn-sm bold-normal" type="submit">
                                                         Add Fiscal Year</button>
                                                </div>
                                            </div>


                                        </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                    </div>

                    {/* view All supplier payments */}
                    <div className="row">
                    <div className="col-12">
                                <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-3 mb-5">
                                    <h6 className='text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded'>
                                        <div className='table-responsive '>
                                            <table className='table table-stripped'>
                                            <thead>
                                                <tr style={{ color: '#1E90FF' }}>
                                                <th>ID</th>
                                                <th>Beginning year</th>
                                                <th>Ending year</th>
                           
                                                <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <td>#1134524</td>
                                                <td>2020-01-30</td>
                                                <td>2020-12-30</td>
                                    
               
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

export default withRouter(FiscalYear);
