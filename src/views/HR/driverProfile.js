import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import HRSidebar from "../HR/HRSidebar";
import { getAllDrivers, deleteDriver } from '../../controllers/driver';
import Config from '../../controllers/Config';
import { Modal } from 'react-bootstrap';
import moment from "moment";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye, faTrash, faEnvelope, faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import PDFViewer from 'pdf-viewer-reactjs'



import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

class driverProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            AllDrivers: [],
            viewUser: '',
            showUserModal: false,
        };
      }
      componentDidMount() {
        this.loadDrivers();
      }
    
      loadDrivers = () => {
        getAllDrivers()
          .then(result => {
            // console.log(result);
            this.setState({ AllDrivers: result });
          })
          .catch(err => {
            // console.log(err);
          });
      };


        // view user modal
  async showViewUser() {
    await this.setState({
        showUserModal: true,
    })
}


    render() {
        const { AllDrivers, viewUser } = this.state;

        let sumSalary = [0];
        let totalSal = 0;

        AllDrivers.forEach((item) => {
          for(var j = 0; j < AllDrivers.length; j++){
            sumSalary[j] = AllDrivers[j].salary;       
          }
        });

        for(var i=0; i < AllDrivers.length; i++){
          totalSal = totalSal + sumSalary[i];
        }

      


      return (
        <div className="bg-light wd-wrapper">
        <HRSidebar />
            <div className="wrapper-wx">
                <div className="container-fluid" >
                    <div className="row">
                    <div className="col-12">
                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                  Driver Profiles 
                  </h6>
                  </div>
                  <div className="col-sm-8">
                  <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                <div className="table-responsive ">
                                    <table className="table table-stripped">
                                  
                                    <tbody>
                                        {AllDrivers.map((item) =>
                                            this.renderAllDrivers(item)
                                        )}
                                        </tbody>
                                    </table>
                                </div>
                </h6>
                </div>
                <div class="col-sm-4">
                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                          <div className="row">
                                        <div className="col">
                                                <div className="card border-0 shadow-sm rounded mt-1 bg-white pb-2" style={{padding:"10px", color:"#929b94"}}> 
                                                    <div className="row">
                                                        <div className="col-4">
                                                                <center><img src="/images/person.png" className="img-fluid my-auto" style={{width:"90px"}}/></center>
                                                        </div>
                                                        <div className="col-8">
                                                                Total No of Drivers
                                                                <h6 style={{color: "green" }}>Permanent</h6> 
                                                                <h3>{AllDrivers.length}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                            </div>
                </h6>
                <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                            <div className="row">
                                        <div className="col">
                                                <div className="card border-0 shadow-sm rounded mt-1 bg-white pb-2" style={{padding:"10px", color:"#929b94"}}> 
                                                    <div className="row">
                                                        <div className="col-4">
                                                                <center><img src="/images/money.png" className="img-fluid my-auto" style={{width:"90px"}}/></center>
                                                        </div>
                                                        <div className="col-8">
                                                                Total Amount of Salary
                                                                <h6 style={{color: "green" }}>All Drivers</h6> 
                                                                <h3>{Config.numberWithCommas(totalSal)} LKR</h3>
                                                                
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                            </div>
                  </h6>                          
                </div>
            
                    </div>
                </div>
            </div>

            <Modal size="lg"  show={this.state.showUserModal}  centered  onHide={() => this.setState({ showUserModal: false })} >
                    <Modal.Header closeButton>
                        <Modal.Title>View Driver</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <PDFViewer
                          document={{
                              url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
                          }}
                      />
                    </Modal.Body>
                </Modal>

        </div>
      );
    }

    renderAllDrivers = (item) => {
     
        return (

        <ul key={item._id} class="list-group">
          <li class="list-group-item">

            <div class="row">
              <div class="col-12">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <tr>
                        <td>
                          <button
                            className="btn btn-danger btn-sm px-2 mr-2"
                            onClick={() => this.onClickDelete(item)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button></td>
                         <td>{item.empNo}</td> 
                         <td> {item.name}</td>
                         <td> {item.address}</td>
                      <td>
                        <button className="btn  btn-sm px-3 mr-3">
                                <FontAwesomeIcon icon={faCaretDown} />
                        </button>
                        </td>
                        </tr>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="card border-0 shadow-sm rounded py-3 bg-white shadow-sm px-3 mt-1">
                    <div class="row">

                      <div class="col-sm">
                        <p style={{ color: '#1E90FF' }}>Basic Details</p>
                        <p>
                          <text style={{color:'#666362'}}>NIC -</text> {item.contactNo}
                        </p>
                        <p><text style={{color:'#666362'}}>Contact No -</text> {item.contactNo}</p>
                        <p><text style={{color:'#666362'}}>Salary - </text>{item.salary}</p>
                      </div>
                      <div class="col-sm">
                        <p style={{ color: '#1E90FF' }}>Insurance Details </p>
                        <p><text style={{color:'#666362'}}>Company -</text> {item.insuranceDetails.insuranceCompany}</p>
                        <p><text style={{color:'#666362'}}>Ref No -</text> {item.insuranceDetails.insuranceRefNo}</p>
                        <p><text style={{color:'#666362'}}>Expiry Date-</text> {moment(new Date(item.insuranceDetails.insuranceExpireDate)).format("YYYY MMM DD")}</p>
                      </div>
                      <div class="col-sm">
                        <p style={{ color: '#1E90FF' }}>Bank Details</p>
                        <p><text style={{color:'#666362'}}>Bank Name - </text>{item.bankDetalis.bankName}</p>
                        <p><text style={{color:'#666362'}}>Account No -</text> {item.bankDetalis.accountNumber}</p>
                        <p><text style={{color:'#666362'}}>Branch - </text>{item.bankDetalis.branch}</p>
                      </div>

                    </div>
                    <div class="row">
                      <div className="col-6 col-md-4">
                          <p style={{ color: '#1E90FF' }}>License Details </p>
                          <p><text style={{color:'#666362'}}>License No -</text> {item.licenseDetails.licenseNo}</p>
                          <p><text style={{color:'#666362'}}>Expire Date -</text> {moment(new Date(item.licenseDetails.licenseExpireDate)).format("YYYY MMM DD")}</p>
                      </div>
                      <div className="col-md-8">
                         <p style={{ color: '#1E90FF' }}>Attachments </p>
                        <img src="/images/files/pdff.pdf" onClick={() => this.showViewUser()} className="img-fluid my-auto" style={{width:"50px"}}/>
                      </div>
                    </div>
                </div>
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion>
            </div>
            </div>

          </li>
        </ul>

        );
    }

    onClickDelete = (item) => {
      Config.setDeleteConfirmAlert(
        "",
        "Are you sure you want to delete this Driver ?",
        () => this.clickDeleteDriver(item._id),
        () => {}
      );
    };
  
    clickDeleteDriver = (id) => {
      console.log(id);
      deleteDriver(id)
        .then((result) => {
          this.loadDrivers();
          Config.setToast(" Driver Deleted Successfully");
        })
        .catch((err) => {
          console.log(err);
          Config.setErrorToast(" Somthing Went Wrong!");
        });
    };


}

const mapStateToProps = state => ({
  auth: state.auth || {},
});

export default connect(mapStateToProps)(withRouter(driverProfile));