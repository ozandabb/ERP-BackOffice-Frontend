/*  eslint-disable */
import React from "react";
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';
import { ProSidebar, Menu, MenuItem, SubMenu , SidebarHeader , SidebarContent , SidebarFooter } from 'react-pro-sidebar';
import { faTable, faBars , faPlusSquare  , faAddressBook, faAtom, faTachometerAlt, faGlobe, faHome, faChalkboard, faAd, faChartBar, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import "../../asserts/commoncss/sidebar.css";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class HRSidebar extends React.Component {
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
        <nav className="navbar  py-0 shadow-sm  fixed-top" style={{ background: "#1d1d1d" }} >
          <span className="navbar-brand mb-0 h6 text-light ml-2">
            HR Management System
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
                                    className={`text-white mb-0 mt-1`}>HR Staff </h6>
                                <span className="small text-light ">@GamageUYT</span>
                    </div>
            </div>
          </div>

          <ProSidebar>
            <Menu iconShape="square">
              <MenuItem Link to="/hrstaff" icon={<FontAwesomeIcon icon={faTachometerAlt} />}>Dashboard</MenuItem>
              {/* <SidebarHeader>Registration</SidebarHeader> */}
              <SubMenu title="Registration" icon={<FontAwesomeIcon icon={faTachometerAlt} />}>
                <MenuItem >Customer Registration<Link to="/hrstaff/customer_registration"/></MenuItem>
                <MenuItem>Supplier Registration<Link to="/hrstaff/supplier_registration"></Link></MenuItem>
                <MenuItem >Employee Registration<Link to="/hrstaff/employee_registration"/></MenuItem>
                <MenuItem>Driver Registration<Link to="/hrstaff/driver_registration"/></MenuItem>
                <MenuItem >Vehicle Registration<Link to="/hrstaff/vehicle_Registration"/></MenuItem>
              </SubMenu>
            </Menu>
          </ProSidebar>

          {/* <ul className="sidebar">
            <Link to="/hrstaff">
              <li className="listitem" className={`listitem ${ active == "dashboard" && "active_category" }`} >
                <h6 className={`categorylink px-2 ${ active == "dashboard" && "active_category" }`} >
                  Dashboard
                </h6>
              </li>
            </Link>

            
            <Link to="/hrstaff/customer_registration">
              <li className={`listitem ${ active == "add_products" && "active_category" }`}>
                <h6  className={`categorylink px-2 ${ active == "add_products" && "active_category" }`} >
                <FontAwesomeIcon icon={faTags} className="mx-3 sidebar-icon"></FontAwesomeIcon>Customer Registration
                </h6>
              </li>
            </Link>
           

            <Link to="/hrstaff/supplier_registration">
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
            </Link>

           
            <li onClick={this.onLogoutClick.bind(this)} className={`listitem ${  active == "products" && "active_category"}`}>
            <Link to="/">
                <h6 className={`categorylink px-2 ${ active == "products" && "active_category" }`} >
                  Logout
                </h6>
                </Link>
              </li>




              <li className={`listitem ${  active == "products" && "active_category"}`}>
            <Link to="/finance/AccDashboard">
                <h6 className={`categorylink px-2 ${ active == "products" && "active_category" }`} >
                AccDashboard
                </h6>
                </Link>
              </li>

              <li className={`listitem ${  active == "products" && "active_category"}`}>
            <Link to="/finance/AccExDashboard">
                <h6 className={`categorylink px-2 ${ active == "products" && "active_category" }`} >
                AccExDashboard
                </h6>
                </Link>
              </li>

              <li className={`listitem ${  active == "products" && "active_category"}`}>
            <Link to="/finance/AssAccDashboard">
                <h6 className={`categorylink px-2 ${ active == "products" && "active_category" }`} >
                AssAccDashboard
                </h6>
                </Link>
              </li>
             

          </ul> */}
        </div>
      </div>
    );
  }
}

HRSidebar.PropType = {
  logoutUser: PropType.func.isRequired,
  auth: PropType.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser }) (HRSidebar);
