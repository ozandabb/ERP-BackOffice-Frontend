import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authAction';

import classnames from 'classnames';
// import loading
import Loading from '../../components/loading';
// import controller
import C_User from '../../controllers/User';
// import config
import C_Config from '../../controllers/Config';

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loading: false,
      isChecked: false,
      errors: {},
    };
  }

  // componentDidMount(){
  //   if(this.props.auth.isAuthenticated){
  //     this.props.history.push('/backoffice');
  //   }
  // }

  // // email start
  onChangeuEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  // // password  start
  onChangeuPass(e) {
    this.setState({
      password: e.target.value,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      console.log(nextProps.auth.user.user.role);
      if(nextProps.auth.user.user.role == "HR-Manager"){
        this.props.history.push('./hrstaff');
      }
      else if(nextProps.auth.user.user.role == "Back office"){
        this.props.history.push('./backoffice');
      }
      else{
        C_Config.showAlert(
          "Please Check User Login Credential");
        this.props.history.push('./');
      }
    }
  
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  async onLogin(e) {
    e.preventDefault();
    const userDate = {
      email: this.state.email,
      password: this.state.password,
    };

     this.props.loginUser(userDate);

    console.log(userDate);
    
  }

  render() {
    const { errors } = this.state;
    return (
      <div className='wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3' style={{ marginTop: '80px' }}>
              <h4 className='font-weigh-bold mt-3 mb-4 text-dark'>
                <b>Sign In Portal</b>
              </h4>
              <form
                onSubmit={e => {
                  this.onLogin(e);
                }}
              >
                <div className='group-input'>
                  <label>Email *</label>
                  <input
                  // className="form-control"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.email
                  })}
                    name='email'
                    type='email'
                    pattern='^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$'
                    placeholder='example@gmail.com'
                    value={this.state.email}
                    onChange={e => this.onChangeuEmail(e)}
                  />
                  {/* {errors.email && (
                    <div className='invalid-feedback'>{errors.email}</div>
                  )} */}
                </div>
                <div className='group-input'>
                  <label>Password *</label>
                  <input
                    type='password'
                    className="form-control"
                    // className={classnames('form-Control', {
                    //   'is-invalid': errors.password,
                    // })}
                    id='pass'
                    required
                    name='password'
                    value={this.state.password}
                    onChange={e => this.onChangeuPass(e)}
                  />
                  {errors.password && (
                    <div className='invalid-feedback'>{errors.password}</div>
                  )}
                </div>
                <div className='group-input gi-check'>
                  <div className='gi-more'>
                    <label>
                      Save Password
                      <input type='checkbox' name='keepMesignedIn' />
                      <span className='checkmark'></span>
                    </label>
                  </div>
                </div>
                <button type='submit' className='form-control btn btn-primary'>
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
  loginUser: PropType.func.isRequired,
  auth: PropType.object.isRequired,
  errors: PropType.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(login);
