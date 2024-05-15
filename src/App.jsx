import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './Home';

 
import Group22 from './pages/Group22';
 


const router = createBrowserRouter([
  { path: '/', element: <Home /> },

 ,
  
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}