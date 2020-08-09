import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Select from 'react-select';
import { FilePond } from "react-filepond";
import { addDriverr } from '../../controllers/driver';
import Config from '../../controllers/Config';
import "filepond/dist/filepond.min.css";
import HRSidebar from "../HR/HRSidebar";

export default class driverReg extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name :'',
            empNo : '',
            address : '',
            contactNo : '',
            salary : '',
            licenseNo : '',
            licenseExpireDate : '',
            insuranceCompany : '',
            insuranceRefNo :'',
            insuranceExpireDate : '',
            bankName : '',
            accountNumber : '',
            branch : '',
            selectedOption: null,
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
    
        addDriverr({
            name: this.state.name,
            empNo: this.state.empNo,
            address: this.state.address,
            contactNo: this.state.contactNo,
            salary: this.state.salary,
            LicenseNo: this.state.licenseNo,
            licenseExpireDate: this.state.licenseExpireDate,
            insuranceCompany: this.state.insuranceCompany,
            insuranceRefNo: this.state.insuranceRefNo,
            insuranceExpireDate: this.state.insuranceExpireDate,
            bankName: this.state.bankName,
            accountNumber: this.state.accountNumber,
            branch: this.state.branch,
        
        }).then((result) => {
            Config.setToast(" Supplier Added Successfully");
            // this.props.history.push("/hrstaff/supplierProfile")
          })
          .catch((err) => {
            console.log(err);
            Config.setErrorToast(" Somthing Went Wrong!");
          });
      };

      onChangeName(e) {
        this.setState({
          name: e.target.value,
        });
      }

      onChangeEmpNo(e) {
        this.setState({
            empNo: e.target.value,
        });
      }

      onChangeContact(e) {
        this.setState({
            contactNo: e.target.value,
        });
      }

      onChangesalary(e) {
        this.setState({
            salary: e.target.value,
        });
      }
      onChangeAddress(e) {
        this.setState({
            address: e.target.value,
        });
      }

      onChangebankName(e) {
        this.setState({
            bankName: e.target.value,
        });
      }

      onChangebranch(e) {
        this.setState({
            branch: e.target.value,
        });
      }

      onChangeaccountNumber(e) {
        this.setState({
            accountNumber: e.target.value,
        });
      }
      onChangelicenseNo(e) {
        this.setState({
            licenseNo: e.target.value,
        });
      }

      onChangelicenseExpireDate(e) {
        this.setState({
            licenseExpireDate: e.target.value,
        });
      }

      onChangeinsuranceCompany(e) {
        this.setState({
            insuranceCompany: e.target.value,
        });
      }

      onChangeinsuranceRefNo(e) {
        this.setState({
            insuranceRefNo: e.target.value,
        });
      }
      onChangeinsuranceExpireDate(e) {
        this.setState({
            insuranceExpireDate: e.target.value,
        });
      }

    render() {
        return (
            <div className="bg-light wd-wrapper">
        <HRSidebar />
            <div className="wrapper-wx">
                <div className="container-fluid" >
                        <div class="row">
                            <div className="col-12">
                                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                Driver Registration
                                </h6>
                            </div>
                            
                            <div className="col-12">
            
                                <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-3 mb-5">
                                    
                                    <form className="py-1  px-3" method="POST" onSubmit={(e) => this.onSubmit(e)}>
                                        <div className="row">
                                        <div class="col-sm-8">
                                        <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">
                                            <b>Basic Details of the Driver</b>

                                        <div className="row">

                                             {/*---------customer full Name--------------  */}
                                             <div className="col-12">
                                                <h6 className="form-label py-1">Driver Full Name</h6>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter Driver's Full Name" 
                                                    value={this.state.name}
                                                    onChange={(e) => this.onChangeName(e)}
                                                    className="form-control" ></input>
                                            </div>

                                            {/*---------NIC no--------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Employee Number</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Employee Number" 
                                                    value={this.state.empNo}
                                                    onChange={(e) => this.onChangeEmpNo(e)}
                                                    name="price"
                                                    className="form-control" ></input>
                                            </div>
                                            {/*---------Contact no --------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Contact Number</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Contact Number" 
                                                    name="brand"
                                                    className="form-control"
                                                    value={this.state.contactNo}
                                                    onChange={(e) => this.onChangeContact(e)} ></input>
                                            </div>

                                             {/*---------Salary --------------  */}
                                             <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Salary</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Salary" 
                                                    name="brand"
                                                    className="form-control"
                                                    value={this.state.salary}
                                                    onChange={(e) => this.onChangesalary(e)} ></input>
                                            </div>

                                            {/*---------NIC --------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">NIC</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter NIC Number" 
                                                    name="brand"
                                                    className="form-control"
                                                    // value={this.state.email}
                                                    // onChange={(e) => this.onChangeEmail(e)} 
                                                    ></input>
                                            </div>

                                            {/*---------Address--------------  */}
                                            <div className="col-12">
                                                <h6 className="form-label py-1">Address</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Address" 
                                                    name="brand"
                                                    className="form-control"
                                                    value={this.state.address}
                                                    onChange={(e) => this.onChangeAddress(e)} ></input>
                                            </div>

                                            
                                            </div>
                                            </h6>


                                            <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">
                                     <b>Bank Details of the Driver</b>

                                        <div className="row">
                                            {/*---------Bank name --------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Bank Name</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Bank Name" 
                                                    name="brand"
                                                    className="form-control"
                                                    value={this.state.bankName}
                                                    onChange={(e) => this.onChangebankName(e)} ></input>
                                            </div>

                                            {/*---------Branch Name  --------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Branch Name</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Branch Name" 
                                                    name="brand"
                                                    className="form-control"
                                                    value={this.state.branch}
                                                    onChange={(e) => this.onChangebranch(e)} ></input>
                                            </div>

                                             {/*---------Account number--------------  */}
                                             <div className="col-12">
                                                <h6 className="form-label py-1">Account Number</h6>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter Account Number " 
                                                    value={this.state.accountNumber}
                                                    onChange={(e) => this.onChangeaccountNumber(e)}
                                                    className="form-control" ></input>
                                            </div>

                                              {/* profile image------------------------ */}
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
                                        </div>
                                        </h6>

                                        </div>

                                    <div class="col-sm-4">
                                    <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">
                                            <b>License Details of the Driver</b>

                                          

                                        <div className="row">
                                               {/*---------licenseNo-------------  */}
                                            <div className="col-12">
                                                <h6 className="form-label py-1">License No</h6>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter license Number" 
                                                    value={this.state.licenseNo}
                                                    onChange={(e) => this.onChangelicenseNo(e)}
                                                    className="form-control" ></input>
                                            </div>

                                               {/*---------licenseExpireDate-------------  */}
                                               <div className="col-12">
                                                <h6 className="form-label py-1">License Expire Date</h6>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter license Expiry Date" 
                                                    value={this.state.licenseExpireDate}
                                                    onChange={(e) => this.onChangelicenseExpireDate(e)}
                                                    className="form-control" ></input>
                                            </div>
                                            </div></h6>


                                   <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">
                                    <b>Insurance Details of the Driver</b>

                                        <div className="row">
                                               {/*---------Insurance Company-------------  */}
                                            <div className="col-12">
                                                <h6 className="form-label py-1">Insurance Company</h6>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter Insurance Company" 
                                                    value={this.state.insuranceCompany}
                                                    onChange={(e) => this.onChangeinsuranceCompany(e)}
                                                    className="form-control" ></input>
                                            </div>

                                               {/*---------Insurance Ref No-------------  */}
                                               <div className="col-12">
                                                <h6 className="form-label py-1">Insurance Ref No</h6>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter Insurance Ref No" 
                                                    value={this.state.insuranceRefNo}
                                                    onChange={(e) => this.onChangeinsuranceRefNo(e)}
                                                    className="form-control" ></input>
                                            </div>

                                            {/*---------insuranceExpireDate-------------  */}
                                            <div className="col-12">
                                                <h6 className="form-label py-1">Insurance Expire Date</h6>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter Insurance Expire Date" 
                                                    value={this.state.insuranceExpireDate}
                                                    onChange={(e) => this.onChangeinsuranceExpireDate(e)}
                                                    className="form-control" ></input>
                                            </div>

                                            </div></h6>

                                            <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">

                                            <div className="col-md-12 mt-2">
                                                <div className="d-flex">
                                                    <button className="px-4 btn btn-dark form-control  btn-sm bold-normal" type="submit">
                                                       Submit</button>
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
        )
    }
}
