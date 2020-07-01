import React from "react";
import Adminlogin from "../src/views/admin/admin.login";
import ViewOrders from "../src/views/backOffice/view.orders";
import BackOfficeDashboard from "../src/views/backOffice/BackOffice.dashboard";
import BackOffice from "../src/views/backOffice/backOffice.login";
import ManagerLogin from "../src/views/manager/manager.login";
import ViewNewOrders from "../src/views/backOffice/view.newOrders"
import ViewCustomerDetails from "../src/views/backOffice/view.customerDetails"
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/admin" component={Adminlogin} />
        <Route exact path="/backoffice" component={BackOffice} />
        <Route exact path="/backoffice/orders" component={ViewOrders} />
        <Route exact path="/backoffice/orders/neworder" component={ViewNewOrders} />
        <Route exact path="/backoffice/orders/neworder/customer" component={ViewCustomerDetails} />
        <Route exact path="/" component={BackOfficeDashboard} />
        <Route exact path="/manager" component={ManagerLogin} />
       
      </Router>
    );
  }
}

export default App;
