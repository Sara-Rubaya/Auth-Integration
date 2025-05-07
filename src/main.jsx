import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Layouts/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Login from './Component/Login/Login.jsx';
import Register from './Component/Register/Register.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Oders from './Component/Oders/Oders.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true,
        Component:Home,
      },
      {
        path:'login',
        Component:Login
      },
      {
        path: 'register',
        Component:Register,
      },
      {
        path:'oders',
        // Component: Oders,
        element: <PrivateRoute><Oders></Oders></PrivateRoute>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
   
  </StrictMode>,
)
