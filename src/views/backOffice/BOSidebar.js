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

class BOSidebar extends React.Component {
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
        <nav
          class="navbar  py-0 shadow-sm  fixed-top"
          style={{ background: "#1E90FF" }}
        >
          <span className="navbar-brand mb-0 h6 text-light ml-2">
            Back Office Management System
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
                                    className={`text-white mb-0 mt-1`}>Back Office </h6>
                                <span className="small text-light ">@silvaJTS</span>
                            </div>
              
            </div>
          </div>
          <ul className="sidebar">
            <Link to="/">
              <li
                className="listitem"
                className={`listitem ${
                  active == "dashboard" && "active_category"
                }`}
              >
                <h6
                  className={`categorylink px-2 ${
                    active == "dashboard" && "active_category"
                  }`}
                >
                  Dashboard
                </h6>
              </li>
            </Link>

            
              <li className="listitem" className={`listitem`}>
                <h6 className={`categorylink px-2`}>Orders</h6>
                <ul className="sidebar">
                <Link to="/backoffice/viewNeworder"><li className="listitem2" className={`listitem2`}><p className={`categorylink px-2`}>New Orders</p></li> </Link>
                <Link to="/backoffice/readyToDelivery"><li className="listitem2" className={`listitem2`}><p className={`categorylink px-2`}>Ready to Delivery</p></li></Link>
                <Link to="/backoffice/completeOrders"> <li className="listitem2" className={`listitem2`}><p className={`categorylink px-2`}>Complete Orders</p></li></Link>
                </ul>
              </li>
           

            <Link to="/backoffice/returnItemDashboard">
              <li
                className={`listitem ${
                  active == "add_products" && "active_category"
                }`}
              >
                <h6
                  className={`categorylink px-2 ${
                    active == "add_products" && "active_category"
                  }`}
                >
                 Return Items
                </h6>
              </li>
            </Link>

            <Link to="/admin/products">
              <li
                className={`listitem ${
                  active == "products" && "active_category"
                }`}
              >
                <h6
                  className={`categorylink px-2 ${
                    active == "products" && "active_category"
                  }`}
                >
                  Products
                </h6>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(BOSidebar);
