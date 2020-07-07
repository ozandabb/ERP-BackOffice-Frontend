import React from "react";
import ManagerLogin from "../src/views/manager/manager.login";
import Adminlogin from "../src/views/admin/admin.login";

// Back office start here
import BackOfficeDashboard from "../src/views/backOffice/BackOffice.dashboard";
import BackOffice from "../src/views/backOffice/backOffice.login";
import newOrder from "../src/views/backOffice/newOrder";
import ViewNewOrders from "../src/views/backOffice/view.newOrders";
import readyToDelivery from "../src/views/backOffice/readyToDelivery";
import completeOrders from "../src/views/backOffice/completeOrders";
import viewVehicleDetails from "../src/views/backOffice/view.VehicleDetails";
import ViewCustomerDetails from "../src/views/backOffice/view.customerDetails";
import viewCashCollectorDetails from "../src/views/backOffice/view.CashCollectorDetails";
import ViewOrderProgress from "../src/views/backOffice/view.OrderProgress";

import returnItemDashboard from "../src/views/backOffice/returnItems/returnItemDashboard"
// Back office ends here


import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/admin" component={Adminlogin} />

        {/* back office route */}
        <Route exact path="/backoffice" component={BackOffice} />
        <Route exact path="/backoffice/viewNeworder" component={newOrder} />
        <Route exact path="/backoffice/readyToDelivery" component={readyToDelivery} />
        <Route exact path="/backoffice/completeOrders" component={completeOrders} />
        <Route exact path="/backoffice/orders/neworder" component={ViewNewOrders} />
        <Route exact path="/backoffice/orders/neworder/customer" component={ViewCustomerDetails} />
        <Route exact path="/backoffice/viewCashCollectorDetails" component={viewCashCollectorDetails} />
        <Route exact path="/backoffice/orders/orderProgress" component={ViewOrderProgress} />
        <Route exact path="/backoffice/orders/viewVehicleDetails" component={viewVehicleDetails} />
        <Route exact path="/" component={BackOfficeDashboard} />

        <Route exact path="/backoffice/returnItemDashboard" component={returnItemDashboard} />
        {/* back office route ends here*/}

        <Route exact path="/manager" component={ManagerLogin} />
       
      </Router>
    );
  }
}

export default App;
