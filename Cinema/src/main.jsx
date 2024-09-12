import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";

// Import Compoments //
import HeaderCinemaUser from "./compoments/layouts/User/header_cinema_user";
import PageHomeUser from "./compoments/pages/User/pageHomeUser";
import Introduce from "./compoments/pages/User/Introduce";

// Import scss, css //
import './index.css'
import './scss/User/headerUser.scss'
import './scss/User/homeUser.scss'
import './scss/User/introduce.scss'
import './scss/User/footer.scss'

const routers = createBrowserRouter([
  {
    path: "/",
    element: <HeaderCinemaUser />,
    children: [
      {
        path: "",
        element: <PageHomeUser />,
      },
      {
        path: "/Introduce",
        element: <Introduce />
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routers} />
);
