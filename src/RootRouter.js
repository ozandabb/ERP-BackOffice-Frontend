import React from "react";
import { connect} from 'react-redux'
import login from "../src/views/signin/login"
import indexRoutes from "../src/routes/indexRoute"
import loginUserRoutes from "../src/routes/loginUserRoutes"
import backOfficeRoutes from "../src/routes/backOfficeRoutes"
import HRstaffRoutes from "../src/routes/HRstaffRoutes"

import { BrowserRouter as Router, Route, Switch, useHistory, withRouter } from 'react-router-dom';

class App extends React.Component {

  router = () => {
    let routes = indexRoutes;

    let checkSignedIn =  this.props.auth.isAuthenticated;
    let role = (checkSignedIn) ? this.props.auth.user.user.role : "";

    if(checkSignedIn == null && role == null ){
      routes = [login ];
      console.log("mekatath eno bn");
    }

    if(checkSignedIn == true && role == "Back office"){
     routes = [ ...backOfficeRoutes ];
    }


    if( checkSignedIn == true && role == "HR-Manager" ){
      routes = [ ...HRstaffRoutes  ];
    }

    return routes;
  }


  render() {
    return (
      <Router>    
          <Route exact path="/" component={login} />
        <Switch>
            { this.router().map((prop, key) => {
                return (
                <Route
                    path={prop.path}
                    key={key}
                    component={(props) => <prop.component    {...props} />}
                    exact={prop.exact ? true : false}
                />
                );
            })}
            </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  auth : state.auth || {} ,
});

export default connect(mapStateToProps)(App);
