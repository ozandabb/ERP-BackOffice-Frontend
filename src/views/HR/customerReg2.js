import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Select from 'react-select';
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import HRSidebar from "../HR/HRSidebar";
import QRCode from "qrcode.react";
import ReactToPrint from 'react-to-print';

class ComponentToPrint extends React.Component {
    render() {
      return (
            <div className="col-md-12 mt-3">
                <QRCode value='https://stackoverflow.com/questions/50694881/how-to-download-file-in-react-js' style={{width:'350px' , height:'350px'}}  />,
            </div>
      );
    }
  }
   
  class customerReg2 extends React.Component {
    render() {
      return (
        <div className='bg-light wd-wrapper'>
         <HRSidebar />
         <div className='wrapper-wx'>
           <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <h6 className='text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded'>
                        Customer Tcode | QRcode
                        </h6>
                            
                    </div>
                    <div className="col-12">
                                <div className="card border-0 shadow-sm rounded mt-3 bg-white py-1  px-3 pb-3 mb-5">
                                    <div className="row">
                                            <div class="col-sm-4">
                                                <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">
                                                    <div className="row">
                                                        {/* QR code ------------------------ */}
                                                            <div>
                                                            <ComponentToPrint ref={el => (this.componentRef = el)}/>
                                                            </div>
                                                            <div className="col-md-6 mt-2">
                                                                <ReactToPrint
                                                                    trigger={() => {
                                                                    return  <button className="px-4 btn btn-success form-control  btn-sm bold-normal" type="submit">
                                                                    Print
                                                                    </button>;
                                                                    }}
                                                                    content={() => this.componentRef}
                                                                />
                                                                   
                                                            </div>
                                                            <div className="col-md-6 mt-2">
                                                                    <button className="px-4 btn btn-success form-control  btn-sm bold-normal" type="submit">
                                                                    Donwload
                                                                    </button>
                                                            </div>
                                                    </div>
                                                </h6>
                                            </div>
                                            <div class="col-sm-8">

                                                <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">
                                                    <h6>Send Confirmation Message to Customer</h6>
                                                    <div className="col-12 py-3">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="Customer Email will display here" />
                                                                    <div class="input-group-append">
                                                                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Send Confirmation</button>
                                                                    </div>
                                                            </div>
                                                    </div>
                                                </h6>

                                            </div>
                                    </div>
                                </div>
                            </div>
                </div>
           </div>
         </div>

        

         </div>
      );
    }
  }

// class customerReg2 extends Component {
//   render() {
//     return (
//         <div className="bg-light wd-wrapper">
//         <HRSidebar />
//             <div className="wrapper-wx">
//                 <div className="container-fluid" >
//                         <div class="row">
//                             <div className="col-12">
//                                 <h6 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
//                                     Customer Tcode | QRcode
//                                 </h6>
//                             </div>
                            // <div className="col-12">
                            //     <div className="card border-0 shadow-sm rounded mt-3 bg-white py-1  px-3 pb-3 mb-5">
                            //         <div className="row">
                            //                 <div class="col-sm-4">
                            //                     <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">
                            //                         <div className="row">
                            //                             {/* QR code ------------------------ */}
                            //                                 <div className="col-md-12 mt-3">
                            //                                     <QRCode value='https://stackoverflow.com/questions/50694881/how-to-download-file-in-react-js' style={{width:'100%', height:'100%'}} />,
                            //                                 </div>
                            //                                 <div className="col-md-6 mt-2">
                            //                                         <button className="px-4 btn btn-success form-control  btn-sm bold-normal" type="submit">
                            //                                         Print
                            //                                         </button>
                            //                                 </div>
                            //                                 <div className="col-md-6 mt-2">
                            //                                         <button className="px-4 btn btn-success form-control  btn-sm bold-normal" type="submit">
                            //                                         Donwload
                            //                                         </button>
                            //                                 </div>
                            //                         </div>
                            //                     </h6>
                            //                 </div>
                            //                 <div class="col-sm-8">

                            //                     <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">
                            //                         <h6>Send Confirmation Message to Customer</h6>
                            //                         <div className="col-12 py-3">
                            //                                 <div class="input-group">
                            //                                     <input type="text" class="form-control" placeholder="Customer Email will display here" />
                            //                                         <div class="input-group-append">
                            //                                             <button class="btn btn-outline-secondary" type="button" id="button-addon2">Send Confirmation</button>
                            //                                         </div>
                            //                                 </div>
                            //                         </div>
                            //                     </h6>

                            //                 </div>
                            //         </div>
                            //     </div>
                            // </div>
                       // </div>              
//                 </div>
//             </div>
//         </div>
//     );
//   }
// }


export default withRouter(customerReg2);