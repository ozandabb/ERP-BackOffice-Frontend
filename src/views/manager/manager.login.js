import React, { Component } from "react";

class ManagerLogin extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="breacrumb-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-text">
                  <span>Admin Sign In Area</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="login-form">
                <h4 className="font-weigh-bold mt-3 mb-4 text-dark">
                  <b>Manager Portal</b>
                </h4>
                <form>
                  <div className="group-input">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="uEmail"
                      pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$"
                      placeholder="johndoe@gmail.com"
                    />
                  </div>
                  <div className="group-input">
                    <label>Password *</label>
                    <input type="password" id="pass" required name="uPass" />
                  </div>
                  <div className="group-input gi-check">
                    <div className="gi-more">
                      <label>
                        Save Password
                        <input type="checkbox" name="keepMesignedIn" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="site-btn login-btn">
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManagerLogin;
