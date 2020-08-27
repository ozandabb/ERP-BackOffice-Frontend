import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Select from 'react-select';
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import AccExSidebar from "./AccExSidebar";

class editFixedAssets extends Component {

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

    // onSubmit = (e) => {
    //     e.preventDefault();
    
    //     addCustomer({
    //         customerId: this.state.customerId,
    //         customerName: this.state.customerName,
    //         address: this.state.address,
    //         phoneNo: this.state.phoneNo,
    //         creditLimit: this.state.creditLimit,
    //         credit : this. state.credit
        
    //     })
    // };

    // OnChangeCustomerID(e) {
    //     this.setState({
    //         customerId: e.target.value,
    //     });
    //   }

    //   OnChangeName(e) {
    //     this.setState({
    //         customerName: e.target.value,
    //     });
    //   }

    //   OnChangeAddress(e) {
    //     this.setState({
    //         address: e.target.value,
    //     });
    //   }

    //   OnChangeContact(e) {
    //     this.setState({
    //         phoneNo: e.target.value,
    //     });
    //   }

    //   OnChangeCreditLimit(e) {
    //     this.setState({
    //         creditLimit: e.target.value,
    //     });
    //   }

    //   OnChangeCredit(e) {
    //     this.setState({
    //         credit: e.target.value,
    //     });
    //   }

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
                                        <li class="nav-item ">
                                            <a class="nav-link" href="/finance/FixedAssets">Fixed Assets </a>
                                        </li>
                                        <li class="nav-item active">
                                            <a class="nav-link" href="/finance/AddFixedAssets">Edit Fixed Assets <span class="sr-only">(current)</span></a>
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
                                <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-3 mb-5">
                                <form className="py-1  px-3" method="POST" onSubmit={(e) => this.onSubmit(e)}>
                                        <div className="row">
                                        <div class="col-sm-8">
                                        <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">
                                            <b>General Settings</b>

                                        <div className="row">

                                             {/*---------customer full Name--------------  */}
                                             <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Item Code</h6>
                                                <input
                                                    type="text"
                                                    name="Customer name"
                                                    placeholder="Enter Item Code" 
                                                    // value={this.state.name}
                                                    // onChange={(e) => this.onChangeName(e)}
                                                    className="form-control" ></input>
                                            </div>

                                             {/*---------customer full Name--------------  */}
                                             <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Category</h6>
                                                <input
                                                    type="text"
                                                    name="Customer name"
                                                    placeholder="Enter Category " 
                                                    // value={this.state.name}
                                                    // onChange={(e) => this.onChangeName(e)}
                                                    className="form-control" ></input>
                                            </div>

                                            {/*---------NIC no--------------  */}
                                            <div className="col-md-12 mt-2">
                                                <h6 className="form-label py-1">Name </h6>
                                                <input
                                                    type="text" 
                                                    placeholder="Enter Item Name" 
                                                    // value={this.state.empNo}
                                                    // onChange={(e) => this.onChangeEmpNo(e)}
                                                    name="Customer ID"
                                                    className="form-control" ></input>
                                            </div>

                                             {/*---------NIC --------------  */}
                                             <div className="col-md-12 mt-2">
                                                <h6 className="form-label py-1">Description</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Description" 
                                                    name="NIC"
                                                    className="form-control"
                                                    // value={this.state.email}
                                                    // onChange={(e) => this.onChangeEmail(e)} 
                                                    ></input>
                                            </div>

                                            {/*---------Contact no --------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Item Tax Type</h6>
                                                <input
                                                    type="tel"
                                                    placeholder="Select Item Tax Type" 
                                                    name="contact number"
                                                    className="form-control"
                                                    // value={this.state.contactNo}
                                                    // onChange={(e) => this.onChangeContact(e)} 
                                                    ></input>
                                            </div>

                                             {/*---------Salary --------------  */}
                                             <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Units of Measure</h6>
                                                <input
                                                    type="email"
                                                    placeholder="Select Units of Measure" 
                                                    name="email"
                                                    className="form-control"
                                                    // value={this.state.salary}
                                                    // onChange={(e) => this.onChangesalary(e)}
                                                     ></input>
                                            </div>
                                            
                                            </div>
                                            </h6>


                                            <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">
                                     <b>Depreciation Details</b>

                                        <div className="row">
                                            {/*---------Bank name --------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Fixed Asset Class</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Fixed Asset Class" 
                                                    name="shop name"
                                                    className="form-control"
                                                    // value={this.state.bankName}
                                                    // onChange={(e) => this.onChangebankName(e)} 
                                                    ></input>
                                            </div>

                                            {/*---------Branch Name  --------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Depreciation Method</h6>
                                                <input
                                                    type="tel"
                                                    placeholder="Select Depreciation Method" 
                                                    name="shop contact no"
                                                    className="form-control"
                                                    // value={this.state.branch}
                                                    // onChange={(e) => this.onChangebranch(e)} 
                                                    ></input>
                                            </div>

                                             {/*---------Bank name --------------  */}
                                             <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Base Rate</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Base Rate" 
                                                    name="shop name"
                                                    className="form-control"
                                                    // value={this.state.bankName}
                                                    // onChange={(e) => this.onChangebankName(e)} 
                                                    ></input>
                                            </div>

                                            {/*---------Branch Name  --------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1"> Rate multiplier</h6>
                                                <input
                                                    type="tel"
                                                    placeholder="Select Rate multiplier" 
                                                    name="shop contact no"
                                                    className="form-control"
                                                    // value={this.state.branch}
                                                    // onChange={(e) => this.onChangebranch(e)} 
                                                    ></input>
                                            </div>

                                             {/*---------Branch Name  --------------  */}
                                             <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1"> Depreciation Start</h6>
                                                <input
                                                    type="tel"
                                                    placeholder="Select Depreciation Start Date" 
                                                    name="shop contact no"
                                                    className="form-control"
                                                    // value={this.state.branch}
                                                    // onChange={(e) => this.onChangebranch(e)} 
                                                    ></input>
                                            </div>

                                            {/*---------Branch Name  --------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1"> Item status:</h6>
                                                <input
                                                    type="tel"
                                                    placeholder="Select Item status:" 
                                                    name="shop contact no"
                                                    className="form-control"
                                                    // value={this.state.branch}
                                                    // onChange={(e) => this.onChangebranch(e)} 
                                                    ></input>
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
                                    <b>GL Accounts</b>

                                        <div className="row">
                                               {/*---------Google map url -------------  */}
                                            <div className="col-12 mt-2">
                                                <h6 className="form-label py-1">Sales Account </h6>
                                                <input
                                                    type="text"
                                                    name="google map url"
                                                    placeholder="Enter Sales Account" 
                                                    // value={this.state.insuranceCompany}
                                                    // onChange={(e) => this.onChangeinsuranceCompany(e)}
                                                    className="form-control" ></input>
                                            </div>

                                               {/*---------Latitude No-------------  */}
                                               <div className="col-12 mt-2">
                                                <h6 className="form-label py-1">Asset account</h6>
                                                <input
                                                    type="lat"
                                                    name="Latitude"
                                                    placeholder="Asset account" 
                                                    // value={this.state.insuranceRefNo}
                                                    // onChange={(e) => this.onChangeinsuranceRefNo(e)}
                                                    className="form-control" ></input>
                                            </div>

                                            {/*---------longitude-------------  */}
                                            <div className="col-12 mt-2">
                                                <h6 className="form-label py-1">Depreciation cost account</h6>
                                                <input
                                                    type="lng"
                                                    name="Longitude"
                                                    placeholder="Depreciation cost account" 
                                                    // value={this.state.insuranceExpireDate}
                                                    // onChange={(e) => this.onChangeinsuranceExpireDate(e)}
                                                    className="form-control" ></input>
                                            </div>

                                             {/*---------longitude-------------  */}
                                             <div className="col-12 mt-2">
                                                <h6 className="form-label py-1">Depreciation/Disposal account</h6>
                                                <input
                                                    type="lng"
                                                    name="Longitude"
                                                    placeholder="Depreciation/Disposal account" 
                                                    // value={this.state.insuranceExpireDate}
                                                    // onChange={(e) => this.onChangeinsuranceExpireDate(e)}
                                                    className="form-control" ></input>
                                            </div>

                                            </div></h6>

                                            <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">

                                            <div className="col-md-12 mt-2">
                                                <div className="d-flex">
                                              
                                                    <button className="px-4 btn btn-dark form-control  btn-sm bold-normal" type="submit">
                                                       Next</button>
                                                   
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


export default withRouter(editFixedAssets);