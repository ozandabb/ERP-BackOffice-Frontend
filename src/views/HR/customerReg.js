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

                                            {/* profile image------------------------ */}
                                            {/* <div className="col-md-12 mt-3">
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
                                            </div> */}

                                             {/*---------Customer ID--------------  */}
                                             <div className="col-md-5 mt-2">
                                                <h6 className="form-label py-1">Customer ID</h6>
                                                <input
                                                    type="text"
                                                    style={{fontWeight: "bold"}}
                                                    name="price"
                                                    placeholder="Enter Customer ID"
                                                    onChange={(e) => this.OnChangeCustomerID(e)}
                                                    value={this.state.customerId}
                                                    className="form-control" ></input>
                                            </div>
                                        
                                             {/*---------customer full Name--------------  */}
                                             <div className="col-md-7 mt-2">
                                                <h6 className="form-label py-1">Customer Full Name</h6>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    style={{fontWeight: "bold"}}
                                                    onChange={(e) => this.OnChangeName(e)}
                                                    value={this.state.customerName}
                                                    placeholder="Enter Customer Full Name"
                                                    className="form-control" ></input>
                                                {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
                                            </div>

                                            {/*---------NIC no--------------  */}
                                            {/* <div className="col-md-5 mt-2">
                                                <h6 className="form-label py-1">NIC No</h6>
                                                <input
                                                    type="text"
                                                    style={{fontWeight: "bold"}}
                                                    name="price"
                                                    placeholder="Enter NIC Number"
                                                    className="form-control" ></input>
                                            </div> */}

                                            {/*---------Street Line 1--------------  */}
                                            <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Street Address Line 1</h6>
                                                <input
                                                    type="text"
                                                    style={{fontWeight: "bold"}}
                                                    name="brand"
                                                    onChange={(e) => this.OnChangeAddress(e)}
                                                    value={this.state.address}
                                                    placeholder="Enter Street Address Line 1"
                                                    className="form-control" ></input>
                                            </div>

                                            {/*---------street line 2--------------  */}
                                            {/* <div className="col-md-6 mt-2">
                                                <h6 className="form-label py-1">Street Address Line 2</h6>
                                                <input
                                                    type="text"
                                                    style={{fontWeight: "bold"}}
                                                    name="brand"
                                                    placeholder="Enter Street Address Line 2"
                                                    className="form-control" ></input>
                                            </div> */}

                                            {/*--------District-------------  */}
                                            {/* <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">District</h6>
                                                <input
                                                    type="text"
                                                    style={{fontWeight: "bold"}}
                                                    name="brand"
                                                    placeholder="Enter District Brand"
                                                    className="form-control" ></input>
                                            </div> */}

                                            {/*---------Province --------------  */}
                                            {/* <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">State / Province</h6>
                                                <Select
                                                    options={groupedOptions}
                                                    placeholder="Select a State / Province"
                                                    styles={false}
                                                />
                                            </div> */}

                                            {/*---------Zip/Postal code --------------  */}
                                            {/* <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Zip/Postal code</h6>
                                                <input
                                                    type="text"
                                                    style={{fontWeight: "bold"}}
                                                    name="brand"
                                                    placeholder="Enter Zip/Postal code "
                                                    className="form-control" ></input>
                                            </div>  */}

                                            {/*---------Contact no --------------  */}
                                            <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Contact Number</h6>
                                                <input
                                                    type="text"
                                                    style={{fontWeight: "bold"}}
                                                    name="brand"
                                                    onChange={(e) => this.OnChangeContact(e)}
                                                    value={this.state.phoneNo}
                                                    placeholder="Enter Land Number"
                                                    className="form-control" ></input>
                                            </div>

                                            {/*---------Credit Limit --------------  */}
                                             <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Credit Limit</h6>
                                                <input
                                                    type="text"
                                                    style={{fontWeight: "bold"}}
                                                    name="brand"
                                                    onChange={(e) => this.OnChangeCreditLimit(e)}
                                                    value={this.state.creditLimit}
                                                    placeholder="Enter Credit Limit"
                                                    className="form-control" ></input>
                                            </div>

                                            {/*---------Credits --------------  */}
                                            <div className="col-md-4 mt-2">
                                                <h6 className="form-label py-1">Credit</h6>
                                                <input
                                                    type="text"
                                                    style={{fontWeight: "bold"}}
                                                    name="brand"
                                                    onChange={(e) => this.OnChangeCredit(e)}
                                                    value={this.state.credit}
                                                    placeholder="Enter Credit"
                                                    className="form-control" ></input>
                                            </div>



                                         


                                            <div className="col-md-12 mt-2">
                                                <div className="d-flex">
                                                    {/* <Link to="/hrstaff/customer_registration/shopDetails"> */}
                                                    <button className="px-4 btn btn-dark  btn-sm bold-normal" type="submit">
                                                       Next</button>
                                                       {/* </Link> */}
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


export default withRouter(customerReg);