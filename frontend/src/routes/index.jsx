import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import App from "../App";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

//
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // app yha parent h aur children means home
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
