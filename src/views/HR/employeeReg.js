import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Select from 'react-select';
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import HRSidebar from "../HR/HRSidebar";

class employeeReg extends Component {

    state = {
        selectedOption: null,
      };

      handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };
    
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
                                Employee Registration
                                </h6>
                            </div>
                            
                            <div className="col-12">
            
                                <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-3 mb-5">
                                    
                                    <form className="py-1  px-3" method="POST" onSubmit={(e) => this.onSubmit(e)}>
                                        <div className="row">
                                        <div class="col-sm-8">
                                        <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">
                                            <b>Basic Details of the Employee</b>

                                        <div className="row">

                                             {/*---------customer full Name--------------  */}
                                             <div className="col-12">
                                                <h6 className="form-label py-1">Employee Full Name</h6>
                                                <input
                                                    type="text"
                                                    name="Employee name"
                                                    placeholder="Enter Employee's Full Name" 
                                                    value={this.state.name}
                                                    onChange={(e) => this.onChangeName(e)}
                                                    className="form-control" ></input>
                                            </div>

                                            {/*---------NIC no--------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Employee ID</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Employee Number" 
                                                    value={this.state.empNo}
                                                    onChange={(e) => this.onChangeEmpNo(e)}
                                                    name="Employee id"
                                                    className="form-control" ></input>
                                            </div>
                                            {/*---------Contact no --------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Contact Number</h6>
                                                <input
                                                    type="tel"
                                                    placeholder="Enter Contact Number" 
                                                    name="Contact no"
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
                                                    name="Salary"
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
                                                    name="NIC"
                                                    className="form-control"
                                                    // value={this.state.email}
                                                    // onChange={(e) => this.onChangeEmail(e)} 
                                                    ></input>
                                            </div>

                                            {/*---------Address--------------  */}
                                            <div className="col-12  mt-2">
                                                <h6 className="form-label py-1">Address</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Address" 
                                                    name="Address"
                                                    className="form-control"
                                                    value={this.state.address}
                                                    onChange={(e) => this.onChangeAddress(e)} ></input>
                                            </div>

                                            
                                            </div>
                                            </h6>


                                            <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">
                                     <b>Bank Details of the Employee</b>

                                        <div className="row">
                                            {/*---------Bank name --------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Bank Name</h6>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Bank Name" 
                                                    name="Employee bank name"
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
                                                    name="brancj name"
                                                    className="form-control"
                                                    value={this.state.branch}
                                                    onChange={(e) => this.onChangebranch(e)} ></input>
                                            </div>

                                             {/*---------Account number--------------  */}
                                             <div className="col-12  mt-2">
                                                <h6 className="form-label py-1">Account Number</h6>
                                                <input
                                                    type="number"
                                                    name="account nu"
                                                    placeholder="Enter Account Number " 
                                                    value={this.state.accountNumber}
                                                    onChange={(e) => this.onChangeaccountNumber(e)}
                                                    className="form-control" ></input>
                                            </div>

                                             
                                        </div>
                                        </h6>

                                        </div>

                                    <div class="col-sm-4">
                                    <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">

                                        <div className="row">
                                                {/*  Attachment------------------------ */}
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
    );
  }
}


export default withRouter(employeeReg);