import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Root from './components/Root';
import AuthProvider from './contexts/AuthProvider';
import Order from './components/Order';
import PrivateRoutes from './components/PrivateRoutes';
import Profile from './components/Profile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/order",
        element: <PrivateRoutes><Order/></PrivateRoutes>,
      },
      {
        path: "/profile",
        element: <PrivateRoutes> <Profile></Profile> </PrivateRoutes>,
      },

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
