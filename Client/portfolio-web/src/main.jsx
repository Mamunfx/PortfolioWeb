import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App';
import Navbar from './Components/Navbar';
import Services from './Components/services';
import Aboutme from './Components/Aboutme';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:"/",
        element:<Navbar></Navbar>
      },
      {
        path:"/Services",
        element:<Services></Services>
      },
      {
        path:"/AboutMe",
        element:<Aboutme></Aboutme>
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
