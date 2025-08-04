import { StrictMode } from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Layout from './Layout/Layout.jsx';
import Login from './Component/Login/Login.jsx';
import Signup from './Component/Pages/SignUp/Signup.jsx';
import Home from './Component/Pages/Home/Home.jsx';
import AdPost from './Component/Pages/AdPost/AdPost.jsx';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes.jsx';


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
        //Protect Routes Can't Reached To This Page Until User Logged In
        element:<ProtectedRoutes><Home/></ProtectedRoutes> 
         },
      {
        //Protect Routes Can't Reached To This Page Until User Logged In
          path:'/AdPost',
        element:<ProtectedRoutes><AdPost/></ProtectedRoutes>
      }
    ]
  },
  {
    path:'*',
    element: <h1>Page Not Found</h1>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)