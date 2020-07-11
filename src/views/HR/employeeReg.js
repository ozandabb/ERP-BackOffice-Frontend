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
                                    
                                    <form className="py-1  px-3" method="POST">
                                        <div className="row">

                                            {/* profile image------------------------ */}
                                            <div className="col-md-12 mt-3">
                                                <h6 className="form-label py-1">Add a Profile Image</h6>
                                                <FilePond
                                                    ref={ref => (this.pond = ref)}
                                                    files={this.state.files}
                                                    allowMultiple={false}
                                                    onupdatefiles={fileItems => {
                                                        this.setState({
                                                            files: fileItems.map(fileItem => fileItem.file)
                                                        });
                                                    }}>
                                                </FilePond>
                                            </div>
                                        
                                             {/*---------customer full Name--------------  */}
                                             <div className="col-md-7 mt-2">
                                                <h6 className="form-label py-1">Employee Full Name</h6>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    style={{fontWeight: "bold"}}
                                                    // value={name}
                                                    // onChange={(e) => this.formValueChange(e)}
                                                    placeholder="Enter Customer Full Name"
                                                    className="form-control" ></input>
                                                {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
                                            </div>

                                            {/*---------NIC no--------------  */}
                                            <div className="col-md-5 mt-2">
                                                <h6 className="form-label py-1">NIC No</h6>
                                                <input
                                                    type="text"
                                                    style={{fontWeight: "bold"}}
                                                    name="price"
                                                    placeholder="Enter NIC Number"
                                                    className="form-control" ></input>
                                            </div>

                                            {/*---------Street Line 1--------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Street Address Line 1</h6>
                                                <input
                                                    type="text"
                                                    style={{fontWeight: "bold"}}
                                                    name="brand"
                                                    placeholder="Enter Street Address Line 1"
                                                    className="form-control" ></input>
                                            </div>

                                            {/*---------street line 2--------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Street Address Line 2</h6>
                                                <input
                                                    type="text"
                                                    style={{fontWeight: "bold"}}
                                                    name="brand"
                                                    placeholder="Enter Street Address Line 2"
                                                    className="form-control" ></input>
                                            </div>

                                            {/*--------District-------------  */}
                                            <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">District</h6>
                                                <input
                                                    type="text"
                                                    style={{fontWeight: "bold"}}
                                                    name="brand"
                                                    placeholder="Enter District Brand"
                                                    className="form-control" ></input>
                                            </div>

                                            {/*---------Province --------------  */}
                                            <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">State / Province</h6>
                                                <Select
                                                    options={groupedOptions}
                                                    placeholder="Select a State / Province"
                                                    styles={false}
                                                />
                                            </div>

                                            {/*---------Zip/Postal code --------------  */}
                                            <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Zip/Postal code</h6>
                                                <input
                                                    type="text"
                                                    style={{fontWeight: "bold"}}
                                                    name="brand"
                                                    placeholder="Enter Zip/Postal code "
                                                    className="form-control" ></input>
                                            </div> 

                                            {/*---------Contact no --------------  */}
                                            <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Contact Number</h6>
                                                <input
                                                    type="text"
                                                    style={{fontWeight: "bold"}}
                                                    name="brand"
                                                    placeholder="Enter Land Number"
                                                    className="form-control" ></input>
                                            </div>

                                            {/*---------Mobile Number --------------  */}
                                             <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Mobile Number</h6>
                                                <input
                                                    type="text"
                                                    style={{fontWeight: "bold"}}
                                                    name="brand"
                                                    placeholder="Enter Mobile Number"
                                                    className="form-control" ></input>
                                            </div>

                                            <div className="col-md-12 mt-2">
                                                <div className="d-flex">
                                                    <Link to="/hrstaff/customer_registration/shopDetails">
                                                    <button className="px-4 btn btn-dark  btn-sm bold-normal" type="submit">
                                                       Next</button>
                                                       </Link>
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


export default withRouter(employeeReg);