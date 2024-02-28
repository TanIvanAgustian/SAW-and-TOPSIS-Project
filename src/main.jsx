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
import client from "./ApolloClient";
import AdminRoot from "./routes/AdminRoot";
import AboutUs from "./layout/user/aboutus";
import ListAnggota from "./layout/user/aboutus/ListAnggota";
import NotFound from "./components/NotFound";
import LoggedIn, { LoggedOut } from "./auth/PrivateRoute";
import UsersData from "./layout/admin/usersdata";
import AddUsers from "./layout/admin/usersdata/AddUser";
import EditUsers from "./layout/admin/usersdata/EditUser";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<LoggedIn />}>
        <Route element={<Root />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about us" element={<AboutUs />} />
          <Route path="/about us/anggota" element={<ListAnggota />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<LoggedOut />}>
        <Route element={<AdminRoot />}>
          <Route path="/admin" element={<UsersData />} />
          <Route path="/admin/adduser" element={<AddUsers />} />
          <Route path="/admin/edituser/:id" element={<EditUsers/>} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
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
