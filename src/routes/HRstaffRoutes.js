//HR routes start here
import HRDashboard from "../views/HR/HRDashboard";
import customerReg from "../views/HR/customerReg";
import customerReg2 from "../views/HR/customerReg2";
import SingleCustomerProfile from "../views/HR/SingleCustomerProfile";
import supplierReg from "../views/HR/supplierReg";
import driverReg from '../views/HR/driverReg';
import employeeReg from "../views/HR/employeeReg";
import driverProfile from "../views/HR/driverProfile";
import vehicleProfile from "../views/HR/vehicleProfiles";
import vehicleReg from "../views/HR/vehicleReg";
import customerProfile from "../views/HR/customerProfile";
import supplierProfile from "../views/HR/supplierProfile";
import employeeProfile from "../views/HR/employeeProfile";
import viewDriverProfile from "../views/HR/view.driverProfile";
import ViewCustomerProfile from "../views/HR/view.customerProfile";
import viewVehicleProfile from "../views/HR/view.vehicleProfile";
//HR routes ENDS here


let HRstaffRoutes = [

    //=====================================HR routes STARTS here==============================================
     {
       path: "/hrstaff",
       name: "HR_Dashboard",
       component: HRDashboard,
       exact: true,
     },
     {
       path: "/hrstaff/customer_registration",
       name: "customerReg",
       component: customerReg,
       exact: true,
     },
     {
       path: "/hrstaff/customer_registration/QRcode",
       name: "customerReg2",
       component: customerReg2,
       exact: true,
     },
     {
      path: "/hrstaff/customer_registration/SingleCustomerProfile",
      name: "customerReg2",
      component: SingleCustomerProfile,
      exact: true,
    },
     {
       path: "/hrstaff/supplier_registration",
       name: "supplierReg",
       component: supplierReg,
       exact: true,
     },
     {
       path: "/hrstaff/employee_registration",
       name: "employeeReg",
       component: employeeReg,
       exact: true,
     },
     {
      path: "/hrstaff/driver_registration",
      name: "driverReg",
      component: driverReg,
      exact: true,
    },
     {
       path: "/hrstaff/driverProfile",
       name: "driverProfile",
       component: driverProfile,
       exact: true,
     },
     {
      path: "/hrstaff/vehicle_Registration",
      name: "vehicle REgistration",
      component: vehicleReg,
      exact: true,
    },
     {
       path: "/hrstaff/vehicleProfile",
       name: "vehicleProfile",
       component: vehicleProfile,
       exact: true,
     },
     {
       path: "/hrstaff/customerProfile",
       name: "customerProfile",
       component: customerProfile,
       exact: true,
     },
     {
      path: "/hrstaff/supplierProfile",
      name: "supplierProfile",
      component: supplierProfile,
      exact: true,
    },
    {
      path: "/hrstaff/employeeProfile",
      name: "employeeProfile",
      component: employeeProfile,
      exact: true,
    },
     {
       path: "/hrstaff/driverProfile/viewDriverProfile",
       name: "viewDriverProfile",
       component: viewDriverProfile,
       exact: true,
     },
     {
       path: "/hrstaff/customerProfile/ViewCustomerProfile",
       name: "ViewCustomerProfile",
       component: ViewCustomerProfile,
       exact: true,
     },
     {
       path: "/hrstaff/vehicleProfile/viewVehicleProfile",
       name: "viewVehicleProfile",
       component: viewVehicleProfile,
       exact: true,
     },
   //=====================================HR routes ends here==============================================

];

export default HRstaffRoutes;