import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App';

import Aboutme from './Components/Aboutme';

import Services from './Components/Services';
import ExtraBanner from './Components/ExtraBanner';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Testimonial from './Components/Testimonial';
import GetInTouch from './Components/GetInTouch';
import Footer from './Components/Footer';
import ArsenalDetails from './Components/ArsenalDetails';
import TeamPulseDetails from './Components/TeamPulseDetails';
import CareDetails from './Components/CareDetails';

// Main router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    
  },
  {
    path: "/ArsenalDetails",
    element: <ArsenalDetails></ArsenalDetails>
  },
  {
    path: "/TeamPulseDetails",
    element: <TeamPulseDetails></TeamPulseDetails>
  },
  {
    path: "/CareDetails",
    element: <CareDetails></CareDetails>
  },
  {
    path: "/aboutme",
    element: <Aboutme />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/extrabanner",
    element: <ExtraBanner />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/testimonial",
    element: <Testimonial />,
  },
  {
    path: "/getintouch",
    element: <GetInTouch />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
