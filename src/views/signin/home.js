import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";

export default class home extends Component {
    render() {
        return (
            <div>
                <Link to="/">
                <button type='submit' className='form-control btn btn-primary'>
                  Sign In
                </button>
                </Link>
            </div>
        )
    }
}
