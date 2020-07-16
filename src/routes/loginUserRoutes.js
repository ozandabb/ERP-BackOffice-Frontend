import Login from "../views/signin/login"

let loginUserRoutes = [
    // my account  route
    {
      path: "/",
      name: "Login",
      component: Login,
      exact: true,
    },
]

export default loginUserRoutes;