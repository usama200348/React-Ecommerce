import { StrictMode } from 'react'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Layout from './Layout/Layout.jsx';
import Login from './Component/Login/Login.jsx';
import Signup from './Component/Pages/SignUp/Signup.jsx';
import Home from './Component/Pages/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Login/>
      },
      {
        path:'register',
        element:<Signup/>
      },
      {
        path:'home',
        element:<Home/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)