import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Select from 'react-select';
import { FilePond } from "react-filepond";
import { addCustomer } from '../../controllers/customer';
import "filepond/dist/filepond.min.css";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import HRSidebar from "../HR/HRSidebar";

class customerReg extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customerId :'',
            customerName : '',
            address : '',
            phoneNo : '',
            creditLimit : '',
            credit : '',
            selectedOption: null,
        };

    }

    onSubmit = (e) => {
        e.preventDefault();
    
        addCustomer({
            customerId: this.state.customerId,
            customerName: this.state.customerName,
            address: this.state.address,
            phoneNo: this.state.phoneNo,
            creditLimit: this.state.creditLimit,
            credit : this. state.credit
        //   token : this.props.auth.user.token
        
        })
    };

    OnChangeCustomerID(e) {
        this.setState({
            customerId: e.target.value,
        });
      }

      OnChangeName(e) {
        this.setState({
            customerName: e.target.value,
        });
      }

      OnChangeAddress(e) {
        this.setState({
            address: e.target.value,
        });
      }

      OnChangeContact(e) {
        this.setState({
            phoneNo: e.target.value,
        });
      }

      OnChangeCreditLimit(e) {
        this.setState({
            creditLimit: e.target.value,
        });
      }

      OnChangeCredit(e) {
        this.setState({
            credit: e.target.value,
        });
      }

    // state = {
    //     selectedOption: null,
    //   };



    //   handleChange = selectedOption => {
    //     this.setState({ selectedOption });
    //     console.log(`Option selected:`, selectedOption);
    //   };
    
  render() {

    const { selectedOption } = this.state;

    const ProvinceOptions = [
        { value: 'Central Province ', label: 'Central Province ' },
        { value: 'Eastern Province ', label: 'Eastern Province ' },
        { value: 'Northern Province', label: 'Northern Province' },
        { value: 'Southern Province', label: 'Southern Province' },
        { value: 'Western Province ', label: 'Western Province ' },
        { value: 'North Western Province', label: 'North Western Province' },
        { value: 'North Central Province', label: 'North Central Province' },
        { value: 'Uva Province', label: 'Uva Province' },
        { value: 'Sabaragamuwa Province', label: 'Sabaragamuwa Province' },
      ];

      const groupedOptions = [
        {
          label: 'province',
          options: ProvinceOptions,
        }
    ]
    return (
        <div className="bg-light wd-wrapper">
        <HRSidebar />
            <div className="wrapper-wx">
                <div className="container-fluid" >
                        <div class="row">
                            <div className="col-12">
                                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                Customer Registration
                                </h6>
                            </div>
                            
                            <div className="col-12">
            
                                <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-3 mb-5">
                                    
                                    <form className="py-1  px-3" method="POST" onSubmit={(e) => this.onSubmit(e)}>
                                        <div className="row">
                                        <div class="col-sm-8">
                                        <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">
                                            <b>Basic Details of the Customer</b>

                                        <div className="row">

                                             {/*---------customer full Name--------------  */}
                                             <div className="col-12">
                                                <h6 className="form-label py-1">Customer Full Name</h6>
                                                <input
                                                    type="text"
                                                    name="Customer name"
                                                    placeholder="Enter Customer's Full Name" 
                                                    // value={this.state.name}
                                                    // onChange={(e) => this.onChangeName(e)}
                                                    className="form-control" ></input>
                                            </div>

                                            {/*---------NIC no--------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Customer ID </h6>
                                                <input
                                                    type="text" 
                                                    // value={this.state.empNo}
                                                    // onChange={(e) => this.onChangeEmpNo(e)}
                                                    name="Customer ID"
                                                    className="form-control" ></input>
                                            </div>

                                             {/*---------NIC --------------  */}
                                             <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">NIC</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter NIC Number" 
                                                    name="NIC"
                                                    className="form-control"
                                                    // value={this.state.email}
                                                    // onChange={(e) => this.onChangeEmail(e)} 
                                                    ></input>
                                            </div>

                                            {/*---------Contact no --------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Contact Number</h6>
                                                <input
                                                    type="tel"
                                                    placeholder="Enter Contact Number" 
                                                    name="contact number"
                                                    className="form-control"
                                                    // value={this.state.contactNo}
                                                    // onChange={(e) => this.onChangeContact(e)} 
                                                    ></input>
                                            </div>

                                             {/*---------Salary --------------  */}
                                             <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Email</h6>
                                                <input
                                                    type="email"
                                                    placeholder="Enter Email Address" 
                                                    name="email"
                                                    className="form-control"
                                                    // value={this.state.salary}
                                                    // onChange={(e) => this.onChangesalary(e)}
                                                     ></input>
                                            </div>

                                           

                                            {/*---------Address--------------  */}
                                            <div className="col-12">
                                                <h6 className="form-label py-1">Address</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Valid Address" 
                                                    name="brand"
                                                    className="form-control"
                                                    // value={this.state.address}
                                                    // onChange={(e) => this.onChangeAddress(e)} 
                                                    ></input>
                                            </div>

                                            
                                            </div>
                                            </h6>


                                            <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">
                                     <b>Shop Details of the Customer</b>

                                        <div className="row">
                                            {/*---------Bank name --------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Shop Name</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Shop Name" 
                                                    name="shop name"
                                                    className="form-control"
                                                    // value={this.state.bankName}
                                                    // onChange={(e) => this.onChangebankName(e)} 
                                                    ></input>
                                            </div>

                                            {/*---------Branch Name  --------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Contact No</h6>
                                                <input
                                                    type="tel"
                                                    placeholder="Enter Contact No" 
                                                    name="shop contact no"
                                                    className="form-control"
                                                    // value={this.state.branch}
                                                    // onChange={(e) => this.onChangebranch(e)} 
                                                    ></input>
                                            </div>

                                             {/*---------Account number--------------  */}
                                             <div className="col-12">
                                                <h6 className="form-label py-1">Shop Address</h6>
                                                <input
                                                    type="text"
                                                    name="shop address"
                                                    placeholder="Enter Shop Address" 
                                                    // value={this.state.accountNumber}
                                                    // onChange={(e) => this.onChangeaccountNumber(e)}
                                                    className="form-control" ></input>
                                            </div>
                                            <div className="col-12 py-3">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="Customer Tcode" />
                                                                    <div class="input-group-append">
                                                                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Generate Customer Tcode</button>
                                                                    </div>
                                                            </div>
                                                    </div>

                                        </div>
                                        </h6>

                                        </div>

                                    <div class="col-sm-4">
                                    <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">
        
                                        <div className="row">
                                             
                                              {/* Attachments ------------------------ */}
                                              <div className="col-md-12 mt-3">
                                                <h6 className="form-label py-1"><b>Add Attachment</b></h6>
                                                <FilePond
                                                    ref={ref => (this.pond = ref)}
                                                    files={this.state.files}
                                                    allowMultiple={true}
                                                    onupdatefiles={fileItems => {
                                                        this.setState({
                                                            files: fileItems.map(fileItem => fileItem.file)
                                                        });
                                                    }}>
                                                </FilePond>
                                            </div>
                                            </div></h6>


                                   <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">
                                    <b>Add Geopoint Of Customers Shop</b>

                                        <div className="row">
                                               {/*---------Google map url -------------  */}
                                            <div className="col-12">
                                                <h6 className="form-label py-1">Google Map URL </h6>
                                                <input
                                                    type="text"
                                                    name="google map url"
                                                    placeholder="Enter Google Map URL" 
                                                    // value={this.state.insuranceCompany}
                                                    // onChange={(e) => this.onChangeinsuranceCompany(e)}
                                                    className="form-control" ></input>
                                            </div>

                                               {/*---------Latitude No-------------  */}
                                               <div className="col-12">
                                                <h6 className="form-label py-1">Enter Latitude (Optional)</h6>
                                                <input
                                                    type="lat"
                                                    name="Latitude"
                                                    placeholder="Latitude" 
                                                    // value={this.state.insuranceRefNo}
                                                    // onChange={(e) => this.onChangeinsuranceRefNo(e)}
                                                    className="form-control" ></input>
                                            </div>

                                            {/*---------longitude-------------  */}
                                            <div className="col-12">
                                                <h6 className="form-label py-1">Enter Longitude (Optional)</h6>
                                                <input
                                                    type="lng"
                                                    name="Longitude"
                                                    placeholder="Longitude" 
                                                    // value={this.state.insuranceExpireDate}
                                                    // onChange={(e) => this.onChangeinsuranceExpireDate(e)}
                                                    className="form-control" ></input>
                                            </div>

                                            </div></h6>

                                            <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">

                                            <div className="col-md-12 mt-2">
                                                <div className="d-flex">
                                                    <Link to="/hrstaff/customer_registration/QRcode">
                                                    <button className="px-4 btn btn-dark form-control  btn-sm bold-normal" type="submit">
                                                       Next</button>
                                                        </Link>
                                                </div>
                                            </div>
                                            </h6>

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


export default withRouter(customerReg);