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
import returnItem from "../src/views/backOffice/returnItems/returnItem"
// Back office ends here

//HR routes start here
import HRDashboard from "../src/views/HR/HRDashboard"
//HR routes ENDS here

//Warehouse Management start here
import warehouseDashboard from "../src/views/Warehouse/warehouseDashboard"

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/admin" component={Adminlogin} />

        {/* back office route */}
        <Route exact path="/backoffice/viewNeworder" component={newOrder} />
        <Route exact path="/backoffice/readyToDelivery" component={readyToDelivery} />
        <Route exact path="/backoffice/completeOrders" component={completeOrders} />
        <Route exact path="/backoffice/orders/neworder" component={ViewNewOrders} />
        <Route exact path="/backoffice/orders/neworder/customer" component={ViewCustomerDetails} />
        <Route exact path="/backoffice/viewCashCollectorDetails" component={viewCashCollectorDetails} />
        <Route exact path="/backoffice/orders/orderProgress" component={ViewOrderProgress} />
        <Route exact path="/backoffice/orders/viewVehicleDetails" component={viewVehicleDetails} />
        <Route exact path="/backoffice" component={BackOfficeDashboard} />
        <Route exact path="/backoffice/returnItemDashboard" component={returnItemDashboard} />
        <Route exact path="/backoffice/returnItems" component={returnItem} />
        {/* back office route ends here*/}

        {/* Warehouse management start here */}
        <Route exact path="/warehouse" component={warehouseDashboard} />
        {/* warehouse management ends here */}

        {/* HR routes starts here */}
        <Route exact path="/hr" component={HRDashboard} />
        {/* HR routes ends here */}

        {/* Manager Routes start here */}
        <Route exact path="/manager" component={ManagerLogin} />
        {/* Manager routes ends here */}
       
      </Router>
    );
  }
}

export default App;
