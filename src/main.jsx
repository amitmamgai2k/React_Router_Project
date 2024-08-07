import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter,Route, createRoutesFromElements } from 'react-router-dom';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Layout from './components/Layout.jsx';
import Home from './components/Home/Home.jsx';
import User from './components/User/User.jsx';
import Github from './components/Github/Github.jsx';

// const router =  createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//       path:"About",
//       element:<About/>
//       },
//       {
//         path:"Contact",
//         element:<Contact/>
//       },
//       {
//         path:'user/:userid',
//         element:<User/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github' element={<Github/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
