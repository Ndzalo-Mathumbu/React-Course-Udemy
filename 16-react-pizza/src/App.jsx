import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";
import AppLayout from "./UI/AppLayout";
import { createOrder, getMenu, getOrder } from "./Services/apiRestaurant";

const Home = lazy(() => import("./UI/Home"));
const Menu = lazy(() => import("./Features/Menu/Menu"));
const Cart = lazy(() => import("./Features/Cart/Cart"));
const Order = lazy(() => import("./Features/Order/Order"));
const CreateOrder = lazy(() => import("./Features/Order/CreateOrder"));
const Error = lazy(() => import("./UI/Error"));

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
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
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: async function ({ params }) {
          const order = await getOrder(params.orderId);
          return order;
        },
        errorElement: <Error />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: async function ({ request }) {
          const formData = await request.formData();
          const data = Object.fromEntries(formData);
          console.log(data);

          const order = {
            ...data,
            cart: JSON.parse(data.cart),
            priority: data.priority === "on",
          };

          const newOrder = await createOrder(order);

          console.log(order);
          return redirect(`/order/${newOrder.id}`);
        },
      },
    ],
  },
]);

const App = function () {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
