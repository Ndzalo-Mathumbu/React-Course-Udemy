import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "/index.css";
// import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./UI/Loader.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
