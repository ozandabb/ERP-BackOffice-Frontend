// Back office start here
import BackOfficeDashboard from "../views/backOffice/BackOffice.dashboard";
import newOrder from "../views/backOffice/newOrder";
import ViewNewOrders from "../views/backOffice/view.newOrders";
import readyToDelivery from "../views/backOffice/readyToDelivery";
import completeOrders from "../views/backOffice/completeOrders";
import viewVehicleDetails from "../views/backOffice/view.VehicleDetails";
import ViewCustomerDetails from "../views/backOffice/view.customerDetails";
import viewCashCollectorDetails from "../views/backOffice/view.CashCollectorDetails";
import ViewOrderProgress from "../views/backOffice/view.OrderProgress";
import returnItemDashboard from "../views/backOffice/returnItems/returnItemDashboard"
import returnItem from "../views/backOffice/returnItems/returnItem"
// Back office ends here

let backOfficeRoutes = [

  //============================backOffice routes start here=====================================
  {
    path: "/backoffice",
    name: "Back_Office",
    component: BackOfficeDashboard,
    exact: true,
},
{
    path: "/backoffice/viewNeworder",
    name: "newOrder",
    component: newOrder,
    exact: true,
  },
  {
    path: "/backoffice/readyToDelivery",
    name: "readyToDelivery",
    component: readyToDelivery,
    exact: true,
  },
 {
    path: "/backoffice/completeOrders",
    name: "completeOrders",
    component: completeOrders,
    exact: true,
  },
  {
    path: "/backoffice/orders/neworder",
    name: "ViewNewOrders",
    component: ViewNewOrders,
    exact: true,
  },
  {
    path: "/backoffice/orders/neworder/customer",
    name: "ViewCustomerDetails",
    component: ViewCustomerDetails,
    exact: true,
  },
  {
    path: "/backoffice/viewCashCollectorDetails",
    name: "viewCashCollectorDetails",
    component: viewCashCollectorDetails,
    exact: true,
  },
  {
    path: "/backoffice/orders/orderProgress",
    name: "ViewOrderProgress",
    component: ViewOrderProgress,
    exact: true,
  },
  {
    path: "/backoffice/orders/viewVehicleDetails",
    name: "viewVehicleDetails",
    component: viewVehicleDetails,
    exact: true,
  },
  {
    path: "/backoffice/returnItemDashboard",
    name: "returnItemDashboard",
    component: returnItemDashboard,
    exact: true,
  },
  {
    path: "/backoffice/returnItems",
    name: "returnItem",
    component: returnItem,
    exact: true,
  },
  //=====================================BackOffice routes ends here==============================================

];

export default backOfficeRoutes;
