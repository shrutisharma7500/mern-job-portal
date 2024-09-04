import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App.jsx';
import Home from '../pages/Home'; // Adjust the path as needed
import About from '../pages/About'; // Adjust the path as needed
import Createjob from '../pages/Createjob.jsx';
import Jobslist from '../pages/Jobslist.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path:'/about',
        element: <About />,

      },
      {
        path:'/post-job',
        element: <Createjob />,

      },
     {
      path:'/jobs-list',
      element:<Jobslist />
     }
    ],
   

  },
]);

export default router;
