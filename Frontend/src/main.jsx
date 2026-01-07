import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import Layout from './Components/Layout.jsx'
import AdminPanel from './Components/AdminPanel.jsx'
const router =createBrowserRouter([{
  element:<App/>,
  path:"/",
  children:[
    {
      element:<Layout/>,
      path:"/"
    },
    {
      element:<AdminPanel/>,
      path:'/admin/users'
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
