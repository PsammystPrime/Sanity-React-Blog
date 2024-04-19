import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./styles/layout.css";
import Featured from "./components/Featured.jsx";
import All from "./components/All.jsx";
import SinglePost from "./components/article.jsx";
import Software from "./components/Software.jsx";
import Productivity from "./components/Productivity.jsx";
import Writing from "./components/Writing.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "featured",
    element: <Featured />,
  },
  {
    path: "all",
    element: <All />,
  },
  {
    path: "/post/:slug",
    element: <SinglePost />,
  },
  {
    path: "/software",
    element: <Software />,
  },
  {
    path: "/productivity",
    element: <Productivity />,
  },
  {
    path: "/writing",
    element: <Writing />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
