
import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import BOSidebar from "../BOSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye
} from "@fortawesome/free-solid-svg-icons";

class returnItemDashboard extends Component {
    render() {
      return (
        <div className="bg-light wd-wrapper">
            <BOSidebar />
                <div className="wrapper-wx">
                    <div className="container-fluid" >
                        <div className="row">
                            <div class="col-8">
ffff
                            </div>
                            <div class="col-4">
                                ffff
                            </div>
                        </div>
                    </div>
                </div>
        </div> 
      );
    }
}

export default withRouter(returnItemDashboard);