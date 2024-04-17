import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import App from "../App";
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
    ],
  },
]);

export default router;
