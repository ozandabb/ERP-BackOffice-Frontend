import backOfficeDashboard from "../views/backOffice/BackOffice.dashboard";
import ViewOrders from "../views/backOffice/view.orders";

let backOfficeRoutes = [
  {
    path: "/backOfficeDashboard",
    name: "backOfficeDashboard",
    component: backOfficeDashboard,
    exact: true,
  },

  {
    path: "/backOfficeDashboard/orders",
    name: "orders",
    component: ViewOrders,
    exact: true,
  },
];

export default backOfficeRoutes;
