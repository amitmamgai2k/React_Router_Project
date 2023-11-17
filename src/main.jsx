import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Layout from './components/Layout.jsx';
import Home from './components/Home/Home.jsx';
const router =  createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
      path:"About",
      element:<About/>
      },
      {
        path:"Contact",
        element:<Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
