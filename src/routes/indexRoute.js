import login from "../views/signin/login"

let indexRoutes = [

    {
      path: "/",
      name: "Login",
      component: login,
      exact: true,
    },

];

export default indexRoutes;