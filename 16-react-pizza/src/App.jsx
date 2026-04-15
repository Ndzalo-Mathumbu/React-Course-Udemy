import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import AppLayout from "./UI/AppLayout";
import { getMenu } from "./Services/apiRestaurant";

const Home = lazy(() => import("./UI/Home"));
const Menu = lazy(() => import("./Features/Menu/Menu"));
const Cart = lazy(() => import("./Features/Cart/Cart"));
const Order = lazy(() => import("./Features/Order/Order"));
const CreateOrder = lazy(() => import("./Features/Order/CreateOrder"));

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: async function () {
          const menu = await getMenu();
          return menu;
        },
      },
      { path: "/cart", element: <Cart /> },
      { path: "/order/:orderId", element: <Order /> },
      { path: "/order/new", element: <CreateOrder /> },
    ],
  },
]);

const App = function () {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
