import React from 'react'
import { Route , Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropType from 'prop-types'

const PrivateRoute = ({component: component, auth, ...rest}) => (
    <Route 
    {...rest}
    render = {props => 
    auth.isAuthenticated === true ? (
        <Component {...props}/>
    ) : (
        <Redirect to = "/"/>
    )
}
    />
);

PrivateRoute.PropType = {
    auth: PropType.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
