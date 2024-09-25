
import * as React from "react";
import {
  createBrowserRouter,
  
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Account from "../Pages/Account/Account";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/account',
          element:<Account></Account>
        }
      ]
    },
  ]);

export default router;