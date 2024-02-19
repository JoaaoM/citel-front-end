import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.css'
import PageUpload from "./pages/page-upload";
import PageDashboard from "./pages/page-dashboard";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/upload", 
        element: <PageUpload/>
      },
      {
        path: "/dashboard/:id", 
        element: <PageDashboard/>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
