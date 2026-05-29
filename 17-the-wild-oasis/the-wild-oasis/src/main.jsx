import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App, { queryClient } from "./App.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Spinner from "./ui/Spinner.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>,
);
