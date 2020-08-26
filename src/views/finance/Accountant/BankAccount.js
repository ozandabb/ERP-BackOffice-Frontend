import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Select from 'react-select';
import { FilePond } from "react-filepond";
import Config from '../../../controllers/Config';
import "filepond/dist/filepond.min.css";
import { faPen, faTrash, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccSidebar from "./AccSidebar";

class BankAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name :'',
            address : '',
            phoneNo : '',
            email : '',
            selectedOption: null,
        };
    }

    // onSubmit = (e) => {
    //     e.preventDefault();
    
    //     addSupplier({
    //         name: this.state.name,
    //         address: this.state.address,
    //         phoneNo: this.state.phoneNo,
    //         email: this.state.email,
    //     //   token : this.props.auth.user.token
        
    //     }).then((result) => {
    //         Config.setToast(" Supplier Added Successfully");
    //         this.props.history.push("/hrstaff/supplierProfile")
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         Config.setErrorToast(" Somthing Went Wrong!");
    //       });
    //   };

    //   onChangeName(e) {
    //     this.setState({
    //       name: e.target.value,
    //     });
    //   }

    //   onChangeAddress(e) {
    //     this.setState({
    //       address: e.target.value,
    //     });
    //   }

    //   onChangeContact(e) {
    //     this.setState({
    //       phoneNo: e.target.value,
    //     });
    //   }

    //   onChangeEmail(e) {
    //     this.setState({
    //       email: e.target.value,
    //     });
    //   }

    //   handleChange = selectedOption => {
    //     this.setState({ selectedOption });
    //     console.log(`Option selected:`, selectedOption);
    //   };
    
  render() {

    // const { selectedOption } = this.state;

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
        <AccSidebar />
            <div className="wrapper-wx">
                <div className="container-fluid" >
                        <div class="row">
                            <div className="col-12">
                                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                Bank Accounts
                                </h6>
                            </div>
                            
                            <div className="col-12">
                                <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-3 mb-2">
                                    <form className="py-1  px-3" method="POST" onSubmit={(e) => this.onSubmit(e)}>
                                    <div className="card border-0 py-2 bg-white shadow-sm px-3 mt-3 rounded">
                                            <b>Enter New Bank Account Details</b>
                                        <div className="row">

                                             {/*---------Bank Account Name --------------  */}
                                             <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Bank Account Name</h6>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    // value={name}
                                                    // onChange={(e) => this.formValueChange(e)}
                                                    placeholder="Enter Bank Account Name"
                                                    className="form-control" ></input>
                                                {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
                                            </div>

                                             {/*---------Account Type--------------  */}
                                             <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Account Type</h6>
                                                <Select
                                                    closeMenuOnSelect={false}
                                                    defaultValue={this.state.sizes}
                                                    onChange={this.handleChangeSizes}
                                                    placeholder="Select Account Type"
                                                    options={groupedOptions}
                                                />
                                                {/* {errors.sizes && errors.sizes.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.sizes}</h4>} */}
                                            </div>

                                            {/*---------Default currency account--------------  */}
                                            <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Default currency account</h6>
                                                <Select
                                                    closeMenuOnSelect={false}
                                                    defaultValue={this.state.sizes}
                                                    onChange={this.handleChangeSizes}
                                                    placeholder="Select Default currency account"
                                                    options={groupedOptions2}
                                                />
                                                {/* {errors.sizes && errors.sizes.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.sizes}</h4>} */}
                                            </div>


                                            {/*---------Bank Account Currency:-------------  */}
                                            <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Bank Account Currency</h6>
                                                <Select
                                                    closeMenuOnSelect={false}
                                                    defaultValue={this.state.sizes}
                                                    onChange={this.handleChangeSizes}
                                                    placeholder="Select Bank Account Currency"
                                                    options={groupedOptions3}
                                                />
                                                {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
                                            </div>

                                             {/*---------Bank Account GL Code-------------  */}
                                             <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Bank Account GL Code</h6>
                                                <Select
                                                    closeMenuOnSelect={false}
                                                    defaultValue={this.state.sizes}
                                                    onChange={this.handleChangeSizes}
                                                    placeholder="Select Bank Account GL Code"
                                                    options={groupedOptions}
                                                />
                                                {/* {errors.sizes && errors.sizes.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.sizes}</h4>} */}
                                            </div>

                                            {/*---------Bank Charges Account-------------  */}
                                            <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Bank Charges Account</h6>
                                                <Select
                                                    closeMenuOnSelect={false}
                                                    defaultValue={this.state.sizes}
                                                    onChange={this.handleChangeSizes}
                                                    placeholder="Select Bank Charges Account"
                                                    options={groupedOptions2}
                                                />
                                                {/* {errors.sizes && errors.sizes.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.sizes}</h4>} */}
                                            </div>


                                            {/*---------Product sizes--------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Bank Name</h6>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    // value={name}
                                                    // onChange={(e) => this.formValueChange(e)}
                                                    placeholder="Enter Bank Name"
                                                    className="form-control" ></input>
                                                {/* {errors.sizes && errors.sizes.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.sizes}</h4>} */}
                                            </div>

                                            {/*---------Product sizes--------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Account Number</h6>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    // value={name}
                                                    // onChange={(e) => this.formValueChange(e)}
                                                    placeholder="Enter Account Number"
                                                    className="form-control" ></input>
                                                {/* {errors.sizes && errors.sizes.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.sizes}</h4>} */}
                                            </div>

                                            {/*---------customer full Name--------------  */}
                                            <div className="col-12 mt-2">
                                                <h6 className="form-label py-1">Bank Address</h6>
                                                <input
                                                    type="text"
                                                    name="bankAddress"
                                                    placeholder="Enter Bank Address" 
                                                    // value={this.state.name}
                                                    // onChange={(e) => this.onChangeName(e)}
                                                    className="form-control" ></input>
                                            </div>

                                            <div className="col-md-12 mt-3">
                                            <div className="d-flex">
                                                    <button className="px-4 btn btn-dark  btn-sm bold-normal" type="submit">
                                                         Add New</button>
                                                </div>
                                            </div>


                                        </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* starttable */}
                            <div className="col-12">
                                <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-3 mb-5">
                                    <h6 className='text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded'>
                                        <div className='table-responsive '>
                                            <table className='table table-stripped'>
                                            <thead>
                                                <tr style={{ color: '#1E90FF' }}>
                                                <th>Account Name</th>
                                                <th>Type</th>
                                                <th>Currency</th>
                                                <th>GL Account</th>
                                                <th>Bank</th>
                                                <th>Number</th>
                                                <th>Bank Address</th>
                                                <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <td>Doha Bank</td>
                                                <td>Cash Account</td>
                                                <td>LKR</td>
                                                <td>010203 CJ Banking</td>
                                                <td>BOC</td>
                                                <td>12414346547687989</td>
                                                <td>Matara Super Branch</td>
                                                <td>
                                                     <Link to='/finance/EditBankAccount'>
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

//   renderAllSuppliers = item => {
//     return (
//       <tr key={item._id}>
//         <td>{item.name}</td>
//         <td>{item.address}</td>
//         <td>{item.phoneNo}</td>
//         <td>{item.email}</td>
//         <td>{moment(new Date(item.created_on)).format("YYYY MMM DD")}</td>

//         <td>
//             <button className='btn btn-success btn-sm px-2 mr-2' onClick={() => this.showViewUser(item._id)}>
//               <FontAwesomeIcon icon={faEye} />
//             </button>

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

}


export default withRouter(BankAccount);