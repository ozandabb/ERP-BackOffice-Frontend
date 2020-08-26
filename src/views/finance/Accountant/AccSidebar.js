/*  eslint-disable */
import React from "react";
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authAction';
import "../../../asserts/commoncss/sidebar.css";
// import "../../asserts/commoncss/bootstrap.min.css";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelopeSquare,
  faBars,
  faTags,
  faBarcode,
  faClipboardCheck,
  faGift,
  faPlusSquare,
  faTachometerAlt,
  faComment,
  faHome,
  faUserSecret,
  faUsers,
  faSuitcase,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

class AccSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      side_bar_toggle: false,
    };
  }

  onLogoutClick(e){
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { side_bar_toggle } = this.state;
    const { active } = this.props;
    return (
      <div>
        <nav className="navbar  py-0 shadow-sm  fixed-top" style={{ background: "#1E90FF" }} >
          <span className="navbar-brand mb-0 h6 text-light ml-2">
            Accountant
            <FontAwesomeIcon onClick={() => this.setState({ side_bar_toggle: !this.state.side_bar_toggle, }) }
              icon={faBars}
              className="ml-4 click show-icon"
            ></FontAwesomeIcon>
          </span>
        </nav>

        <div className={`sidebar_wrap sidebar-top ${ side_bar_toggle ? "sidebar_active" : "" }`} >

          <div className="sidebar-header pb-4 pt-2">
            <div className="d-flex px-4">
              <img src="/images/user2.jpg" className="rounded-circle sidebar-image my-auto"></img>
                    <div className="my-auto">
                                <h6 style={{lineHeight: '12px', fontWeight: 600}}
                                    className={`text-white mb-0 mt-1`}>Accountant </h6>
                                <span className="small text-light ">@GamageUYT</span>
                    </div>
            </div>
          </div>

          <ul className="sidebar">
            <Link to="/finance/AccDashboard">
              <li className="listitem" className={`listitem ${ active == "dashboard" && "active_category" }`} >
                <h6 className={`categorylink px-2 ${ active == "dashboard" && "active_category" }`} >
                  Dashboard
                </h6>
              </li>
            </Link>

            
            <Link to="/finance/BankAccount">
              <li className={`listitem ${ active == "add_products" && "active_category" }`}>
                <h6  className={`categorylink px-2 ${ active == "add_products" && "active_category" }`} >
                 Bank Accounts
                </h6>
              </li>
            </Link>
           

            {/* <Link to="/hrstaff/supplier_registration">
              <li className={`listitem ${ active == "add_products" && "active_category" }`}>
                <h6  className={`categorylink px-2 ${ active == "add_products" && "active_category" }`} >
                 Supplier Registration
                </h6>
              </li>
            </Link>

            <Link to="/hrstaff/driver_registration">
              <li className={`listitem ${ active == "add_products" && "active_category" }`}>
                <h6  className={`categorylink px-2 ${ active == "add_products" && "active_category" }`} >
                 Driver Registration
                </h6>
              </li>
            </Link>

            <Link to="/hrstaff/employee_registration">
              <li className={`listitem ${ active == "add_products" && "active_category" }`}>
                <h6  className={`categorylink px-2 ${ active == "add_products" && "active_category" }`} >
                 Employee Registration
                </h6>
              </li>
            </Link>

            <Link to="/hrstaff/vehicle_Registration">
              <li className={`listitem ${ active == "add_products" && "active_category" }`}>
                <h6  className={`categorylink px-2 ${ active == "add_products" && "active_category" }`} >
                 Vehicle Registration
                </h6>
              </li>
            </Link>

            <Link to="/hrstaff/driverProfile">
              <li className={`listitem ${ active == "add_products" && "active_category" }`}>
                <h6  className={`categorylink px-2 ${ active == "add_products" && "active_category" }`} >
                 Driver Profile
                </h6>
              </li>
            </Link>

            <Link to="/hrstaff/vehicleProfile">
              <li className={`listitem ${ active == "add_products" && "active_category" }`}>
                <h6  className={`categorylink px-2 ${ active == "add_products" && "active_category" }`} >
                 Vehicle Profile
                </h6>
              </li>
            </Link>

            <Link to="/hrstaff/customerProfile">
              <li className={`listitem ${  active == "products" && "active_category" }`} >
                <h6 className={`categorylink px-2 ${ active == "products" && "active_category"}`} >
                  Customer Profile
                </h6>
              </li>
            </Link>

            <Link to="/hrstaff/employeeProfile">
              <li className={`listitem ${  active == "products" && "active_category" }`} >
                <h6 className={`categorylink px-2 ${ active == "products" && "active_category"}`} >
                  Employee Profile
                </h6>
              </li>
            </Link>

            <Link to="/hrstaff/supplierProfile">
              <li className={`listitem ${  active == "products" && "active_category" }`} >
                <h6 className={`categorylink px-2 ${ active == "products" && "active_category"}`} >
                  Supplier Profile
                </h6>
              </li>
            </Link> */}

           
            <li onClick={this.onLogoutClick.bind(this)} className={`listitem ${  active == "products" && "active_category"}`}>
            <Link to="/">
                <h6 className={`categorylink px-2 ${ active == "products" && "active_category" }`} >
                  Logout
                </h6>
                </Link>
              </li>
             

          </ul>
        </div>
      </div>
    );
  }
}

AccSidebar.PropType = {
  logoutUser: PropType.func.isRequired,
  auth: PropType.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser }) (AccSidebar);
