import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./styles/layout.css";
import Featured from "./components/Featured.jsx";
import All from "./components/All.jsx";
import { SinglePost } from "./components/article.jsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
