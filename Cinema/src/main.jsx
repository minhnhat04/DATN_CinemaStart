import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

// Import Compoments //
import HeaderCinemaUser from "./compoments/layouts/User/header_cinema_user";
import PageHomeUser from "./compoments/pages/User/pageHomeUser";
import Introduce from "./compoments/pages/User/Introduce";
import All from "./compoments/pages/User/all";
import Event from "./compoments/pages/User/event";
import Promotion from "./compoments/pages/User/promotion";

// Import scss, css //
import "./index.css";
import "./scss/User/headerUser.scss";
import "./scss/User/homeUser.scss";
import "./scss/User/introduce.scss";
import "./scss/User/footer.scss";
import "./scss/User/all.scss";
import "./scss/User/event.scss";
import "./scss/User/promotion.scss"

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
        element: <Introduce />,
      },
      {
        path: "/All",
        element: <All />,
      },
      {
        path: "/Event",
        element: <Event />,
      },
      {
        path: "/Promotion",
        element: <Promotion />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routers} />
);
