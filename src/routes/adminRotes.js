import AdminLogin from "../views/admin/admin.login";
import backOffice from "../views/backOffice/backOffice.login";

let adminRoutes = [
  {
    path: "/",
    name: "admin_login",
    component: AdminLogin,
    exact: true,
  },
];

export default adminRoutes;