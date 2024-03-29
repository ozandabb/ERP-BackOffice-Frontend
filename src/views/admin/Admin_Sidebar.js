/*  eslint-disable */
import React from "react";
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';
import "../../asserts/commoncss/sidebar.css";
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

class Admin_Sidebar extends React.Component {
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
        <nav
          class="navbar  py-0 shadow-sm  fixed-top"
          style={{ background: "#1E90FF" }}
        >
          <span className="navbar-brand mb-0 h6 text-light ml-2">
            Admin Portal
            <FontAwesomeIcon
              onClick={() =>
                this.setState({
                  side_bar_toggle: !this.state.side_bar_toggle,
                })
              }
              icon={faBars}
              className="ml-4 click show-icon"
            ></FontAwesomeIcon>
          </span>
        </nav>

        <div
          className={`sidebar_wrap sidebar-top ${
            side_bar_toggle ? "sidebar_active" : ""
          }`}
        >
          <div className="sidebar-header pb-4 pt-2">
            <div className="d-flex px-4">
              <img src="/images/user2.jpg" className="rounded-circle sidebar-image my-auto"></img>
              <div className="my-auto">
                                <h6 style={{lineHeight: '12px', fontWeight: 600}}
                                    className={`text-white mb-0 mt-1`}>Admin </h6>
                                <span className="small text-light ">@silvaJTS</span>
                            </div>
              
            </div>
          </div>
          <ul className="sidebar">
            <Link to="/admin">
              <li className="listitem" className={`listitem ${  active == "dashboard" && "active_category"}`} >
                <h6 className={`categorylink px-2 ${ active == "dashboard" && "active_category" }`} >
                  Dashboard
                </h6>
              </li>
            </Link>
           

            <Link to="/admin/BackOfficeStaffAdd">
              <li className={`listitem ${  active == "add_products" && "active_category"}`}>
                <h6 className={`categorylink px-2 ${ active == "add_products" && "active_category" }`} >
                BackOffice Staff
                </h6>
              </li>
            </Link>

            <Link to="/admin/HR_Staff">
              <li className={`listitem ${  active == "add_products" && "active_category"}`}>
                <h6 className={`categorylink px-2 ${ active == "add_products" && "active_category" }`} >
                HR Staff
                </h6>
              </li>
            </Link>

            <Link to="/admin/BackOfficeStaffAdd">
              <li className={`listitem ${  active == "add_products" && "active_category"}`}>
                <h6 className={`categorylink px-2 ${ active == "add_products" && "active_category" }`} >
                BackOffice Staff
                </h6>
              </li>
            </Link>

            <Link to="/admin/BackOfficeStaffAdd">
              <li className={`listitem ${  active == "add_products" && "active_category"}`}>
                <h6 className={`categorylink px-2 ${ active == "add_products" && "active_category" }`} >
                BackOffice Staff
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
             
         
          </ul>
        </div>
      </div>
    );
  }
}

Admin_Sidebar.PropType = {
  logoutUser: PropType.func.isRequired,
  auth: PropType.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser }) (Admin_Sidebar);
