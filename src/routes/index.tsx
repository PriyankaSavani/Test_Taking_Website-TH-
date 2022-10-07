import React from "react";
import { useRoutes } from "react-router-dom";

// landing page or home page
const LandingPage = React.lazy(() => import("../pages/Landing"));

// test
const Test = React.lazy(() => import('../pages/Test'))

// result
const Result = React.lazy(() => import("../pages/Result"));

const AllRoutes = () => {
  return useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "/test", element: <Test /> },
    { path: "/result", element: <Result /> },
    {
      // auth protected routes
    },
  ]);
};

export default AllRoutes;
