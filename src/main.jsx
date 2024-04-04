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
import 'aos/dist/aos.css';

import Root from "./routes/Root";
import Dashboard from "./layout/user/dashboard";
import Login from "./layout/Login";
import client from "./ApolloClient";
import AdminRoot from "./routes/AdminRoot";
import AboutUs from "./layout/user/aboutus";
import ListAnggota from "./layout/user/organization";
import NotFound from "./components/NotFound";
import LoggedIn, { LoggedOut } from "./auth/PrivateRoute";
import UsersData from "./layout/admin/usersdata";
import AddUsers from "./layout/admin/usersdata/AddUser";
import EditUsers from "./layout/admin/usersdata/EditUser";
import Events from "./layout/admin/events";
import AddEvents from "./layout/admin/events/AddEvent";
import EditEvents from "./layout/admin/events/EditEvent";
import News from "./layout/admin/news";
import AddNews from "./layout/admin/news/AddNews";
import EditNews from "./layout/admin/news/EditNews";
import Programs from "./layout/user/program";
import DetailPrograms from "./layout/user/program/detailProgram";
import RankData from "./layout/admin/rank";
import AddRank from "./layout/admin/rank/AddRank";
import EditRank from "./layout/admin/rank/EditRank";
import NewsDisplay from "./layout/user/news";
import NewsDetail from "./layout/user/news/NewsDetail";
import Competition from "./layout/admin/competition";
import AddCompetition from "./layout/admin/competition/AddCompetition";
import EditCompetition from "./layout/admin/competition/EditCompetition";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<LoggedIn />}>
        <Route element={<Root />}>
          <Route path="/" element={<Dashboard />} />

          <Route path="/about us" element={<AboutUs />} />

          <Route path="/Programs/:ProgramType" element={<Programs />} />
          <Route path="/programs/content/:id" element={<DetailPrograms />} />

          <Route path="/news" element={<NewsDisplay />} />
          <Route path="/news/:id" element={<NewsDetail />} />

          <Route path="/organization" element={<ListAnggota />} />
          
        </Route>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<LoggedOut />}>
        <Route element={<AdminRoot />}>
          <Route path="/admin" element={<UsersData />} />
          <Route path="/admin/adduser" element={<AddUsers />} />
          <Route path="/admin/edituser/:id" element={<EditUsers/>} />
          
          <Route path="/admin/programs" element={<Events />} />
          <Route path="/admin/programs/addevent" element={<AddEvents />} />
          <Route path="/admin/programs/editevent/:id" element={<EditEvents />} />

          <Route path="/admin/news" element={<News />} />
          <Route path="/admin/news/addnews" element={<AddNews />} />
          <Route path="/admin/news/editnews/:id" element={<EditNews />} />

          <Route path="/admin/rank" element={<RankData />} />
          <Route path="/admin/rank/addrank/:competitionId" element={<AddRank/>} />
          <Route path="/admin/rank/editrank/:id" element={<EditRank/>} />

          <Route path="/admin/competition" element={<Competition />} />
          <Route path="/admin/competition/addcompetition" element={<AddCompetition/>} />
          <Route path="/admin/competition/editcompetition/:id" element={<EditCompetition/>} />
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
