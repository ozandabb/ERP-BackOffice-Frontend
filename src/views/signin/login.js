import React, { Component } from "react";
import PropType from 'prop-types';
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authAction'

import classnames from "classnames"
// import loading
import Loading from "../../components/loading";
// import controller
import C_User from "../../controllers/User";
// import config
import C_Config from "../../controllers/Config";


class login extends Component {
    constructor() {
        super();
        this.state = {
          uEmail: '',
          uPass: '',
          loading: false,
          isChecked: false,
          errors:{}
        };
      }

  // email start  
  onChangeuEmail(e) {
    this.setState({
      uEmail: e.target.value,
    });
  }

  // password  start 
  onChangeuPass(e) {
    this.setState({
      uPass: e.target.value,
    });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated){
      this.props.history.push('/backoffice');
    }
    if(nextProps.errors){
      this.setState({errors : nextProps.errors});
    }
  }

  async onLogin(e) {
    e.preventDefault();
    const userDate = {
     uEmail : this.state.uEmail,
     uPass : this.state.uPass
    };

    this.props.loginUser(userDate);

    console.log(userDate);
    
  }

  render() {

    const { errors } = this.state;
    return (
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3" style={{ marginTop:"80px"}}>
                <h4 className="font-weigh-bold mt-3 mb-4 text-dark">
                  <b>Sign In Portal</b>
                </h4>
                <form onSubmit={(e) => { this.onLogin(e); }}>
                  <div className="group-input">
                    <label>Email *</label>
                    <input
                        className={classnames('form-Control', {
                            'is-invalid' : errors.uEmail
                        })}
                      name="uEmail"
                      type="email"
                      pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$"
                      placeholder="example@gmail.com"
                      value={this.state.uEmail}
                      onChange={(e) => this.onChangeuEmail(e)}
                    />
                    {errors.uEmail && (<div className="invalid-feedback">{errors.uEmail}</div>)}
                  </div>
                  <div className="group-input">
                    <label>Password *</label>
                    <input 
                        type="password" className={classnames('form-Control', {
                            'is-invalid' : errors.uPass
                        })} 
                        id="pass" required name="uPass" value={this.state.uPass} onChange={(e) => this.onChangeuPass(e)} />
                        {errors.uPass && (<div className="invalid-feedback">{errors.uPass}</div>)}
                  </div>
                  <div className="group-input gi-check">
                    <div className="gi-more">
                      <label>
                        Save Password
                        <input type="checkbox"  name="keepMesignedIn" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="form-control btn btn-primary">
                    Sign In
                  </button>
                </form>
        
            </div>
          </div>
        </div>
      </div>
    );
  }
}

login.PropType = {
  loginUser : PropType.func.isRequired,
  auth : PropType.object.isRequired,
  errors : PropType.object.isRequired
}

const mapStateToProps = (state) => ({
  auth : state.auth,
  errors : state.errors
})

export default connect(mapStateToProps, {loginUser}) (login);
