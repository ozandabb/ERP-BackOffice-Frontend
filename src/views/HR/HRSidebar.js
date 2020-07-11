/*  eslint-disable */
import React from "react";
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

class HRSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      side_bar_toggle: false,
    };
  }

  render() {
    const { side_bar_toggle } = this.state;
    const { active } = this.props;
    return (
      <div>
        <nav class="navbar  py-0 shadow-sm  fixed-top" style={{ background: "#1E90FF" }} >
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

          <ul className="sidebar">
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
                 Customer Registration
                </h6>
              </li>
            </Link>
           

            <Link to="">
              <li className={`listitem ${ active == "add_products" && "active_category" }`}>
                <h6  className={`categorylink px-2 ${ active == "add_products" && "active_category" }`} >
                 Supplier Registration
                </h6>
              </li>
            </Link>

            <Link to="">
              <li className={`listitem ${ active == "add_products" && "active_category" }`}>
                <h6  className={`categorylink px-2 ${ active == "add_products" && "active_category" }`} >
                 Employee Registration
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

            <Link to="">
              <li className={`listitem ${  active == "products" && "active_category" }`} >
                <h6 className={`categorylink px-2 ${ active == "products" && "active_category"}`} >
                  Logout
                </h6>
              </li>
            </Link>

          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(HRSidebar);
