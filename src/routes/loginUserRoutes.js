import HRDashboard from "../views/HR/HRDashboard"

let loginUserRoutes = [
    // my account  route
    {
      path: "/hrstaff",
      name: "HRstaff Dashboard",
      component: HRDashboard,
      exact: true,
    },
]

export default loginUserRoutes;