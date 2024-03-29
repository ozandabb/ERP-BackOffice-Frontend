import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Select from 'react-select';
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import AccExSidebar from "./AccExSidebar";
import { faPen, faTrash, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                                        <li class="nav-item active">
                                            <a class="nav-link">Fixed Assets <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/finance/AddFixedAssets">Add Fixed Assets</a>
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
                                                <th>Item Code</th>
                                                <th>Category</th>
                                                <th>Name</th>
                                                <th>Fixed Asset Class</th>
                                               
                                                <th>Depreciation Start</th>
                                                <th>Item status:</th>
                                                
                                                <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <td>#1134524</td>
                                                <td>Doha Bank</td>
                                                <td>Cash Account</td>
                                                <td>LKR</td>
                                               
                                                <td>12414346547687989</td>
                                                <td>Matara Super Branch</td>
                                                <td>
                                                     <Link to="/finance/editFixedAssets" >
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


export default withRouter(customerReg);