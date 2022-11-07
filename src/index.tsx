import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import "./assets/styles/index.scss";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import LoadingOverlay from "@/components/LoadingOverlay";
import Page from "@/components/Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Page>
        <LoadingOverlay />
        <RouterProvider router={router} />
      </Page>
    </Provider>
  </React.StrictMode>
);
