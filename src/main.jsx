import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import Root from "./routes/Root";
import Dashboard from "./layout/user/dashboard";
import Login from "./layout/Login";
import DashboardAdmin from "./layout/admin/dashboard/DashboardAdmin";
import client from "./ApolloClient";
import AdminRoot from "./routes/AdminRoot";
import AboutUs from "./layout/user/aboutus";
import ListAnggota from "./layout/user/aboutus/ListAnggota";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Root />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about us" element={<AboutUs />} />
        <Route path="/about us/anggota" element={<ListAnggota />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route element={<AdminRoot />}>
        <Route path="/admin" element={<DashboardAdmin />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
