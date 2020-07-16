import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import HRSidebar from '../HR/HRSidebar';
import Config from '../../controllers/Config';
import { connect } from 'react-redux';
import { getAllCustomers } from '../../controllers/customer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

class customerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      AllCustomers: [],
    };
  }

  componentDidMount() {
    this.loadCustomers();
  }

  loadCustomers = () => {
    getAllCustomers()
      .then(result => {
        console.log(result);
        this.setState({ AllCustomers: result });
      })
      .catch(err => {
        // console.log(err);
      });
  };

  render() {
    const { AllCustomers } = this.state;
    return (
      <div className='bg-light wd-wrapper'>
        <HRSidebar />
        <div className='wrapper-wx'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
                <h6 className='text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded'>
                  Customer Profiles
                </h6>

                <h6 className='text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded'>
                  <div className='table-responsive '>
                    <table className='table table-stripped'>
                      <thead>
                        <tr style={{ color: '#1E90FF' }}>
                          <th>CustomerID</th>
                          <th>Customer Name</th>
                          <th>Join Date</th>
                          {/* <th>Delivered</th>
                                        <th>Amount</th> */}
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {AllCustomers.map(item =>
                          this.renderAllNewCustomers(item)
                        )}
                      </tbody>
                    </table>
                  </div>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderAllNewCustomers = item => {
    return (
      <tr key={item._id}>
        <td>{item.customerId}</td>
        <td>{item.customerName}</td>
        <td>{item.address}</td>
        {/* <td>{item.DeliveredDate}</td>
                <td>{item.Amount}</td> */}
        <td>
          <Link to='/hrstaff/customerProfile/ViewCustomerProfile'>
            <button className='btn btn-success btn-sm px-2 mr-2'>
              <FontAwesomeIcon icon={faEye} />
            </button>
          </Link>
        </td>
      </tr>
    );
  };
}
const mapStateToProps = state => ({
  auth: state.auth || {},
});

export default connect(mapStateToProps)(withRouter(customerProfile));
