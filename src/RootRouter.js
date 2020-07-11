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
import customerReg from "../src/views/HR/customerReg"
import customerReg2 from "./views/HR/customerReg2"
import supplierReg from "../src/views/HR/supplierReg"
import employeeReg from "../src/views/HR/employeeReg"
import driverProfile from "../src/views/HR/driverProfile"
import vehicleProfile from "../src/views/HR/vehicleProfiles"
import customerProfile from "../src/views/HR/customerProfile"
import viewDriverProfile from "../src/views/HR/view.driverProfile"
import ViewCustomerProfile from "../src/views/HR/view.customerProfile"
import viewVehicleProfile from "../src/views/HR/view.vehicleProfile"
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
        <Route exact path="/hrstaff" component={HRDashboard} />
        <Route exact path="/hrstaff/customer_registration" component={customerReg} />
        <Route exact path="/hrstaff/customer_registration/shopDetails" component={customerReg2} />
        <Route exact path="/hrstaff/supplier_registration" component={supplierReg} />
        <Route exact path="/hrstaff/employee_registration" component={employeeReg} />
        <Route exact path="/hrstaff/driverProfile" component={driverProfile} />
        <Route exact path="/hrstaff/vehicleProfile" component={vehicleProfile} />
        <Route exact path="/hrstaff/customerProfile" component={customerProfile} />
        <Route exact path="/hrstaff/driverProfile/viewDriverProfile" component={viewDriverProfile} />
        <Route exact path="/hrstaff/customerProfile/ViewCustomerProfile" component={ViewCustomerProfile} />
        <Route exact path="/hrstaff/vehicleProfile/viewVehicleProfile" component={viewVehicleProfile} />
        {/* HR routes ends here */}

        {/* Manager Routes start here */}
        <Route exact path="/manager" component={ManagerLogin} />
        {/* Manager routes ends here */}
       
      </Router>
    );
  }
}

export default App;
