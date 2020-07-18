import AdminDashboard from "../views/admin/adminDashboard";
import BackOfficeStaffAdd from "../views/admin/BackOfficeStaffAdd";
import HR_STAFF from "../views/admin/HR_Staff"

let adminRoutes = [
  {
    path: "/admin",
    name: "Admin_Dashboard",
    component: AdminDashboard,
    exact: true,
  },
  {
    path: "/admin/BackOfficeStaffAdd",
    name: "BackOffice_Staff_Registration",
    component: BackOfficeStaffAdd,
    exact: true,
  },
  {
    path: "/admin/HR_Staff",
    name: "HR_Staff_Registration",
    component: HR_STAFF,
    exact: true,
  },
];

export default adminRoutes;
