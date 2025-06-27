import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayou from './Components/Layouts/MainLayou.jsx';
import Home from './Components/Home.jsx';
import AddTask from './Components/AddTask.jsx';
import UpdatedTask from './Components/UpdatedTask.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Authprovider from './Providers/Authprovider.jsx';
import BrowseTasks from './Components/BrowseTasks.jsx';
import TaskDetails from './Components/TaskDetails.jsx';
import MyPostedTask from './Components/MyPostedTask.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes.jsx';
import AboutUs from './Pages/AboutUs.jsx';
const router = createBrowserRouter([
  {
    path: "/",

    element: <MainLayou />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        Component: Home

      },
      {
        path: "addtask",
        element: (
          <PrivateRoutes>
            <AddTask></AddTask>
          </PrivateRoutes>
        )
      },
      {
        path: "browsertask",

        Component: BrowseTasks,
        loader: () => fetch('https://b11a10-server-side-paul-96-shimu.vercel.app/freelancer'),
      },
      {
        path: "taskdetails/:id",
        loader: ({ params }) => fetch(`https://b11a10-server-side-paul-96-shimu.vercel.app/freelancer/${params.id}`),
        element: (
          <PrivateRoutes>
            <TaskDetails></TaskDetails>
          </PrivateRoutes>
        )
      },
      {
        path: "Mypostedtasks/:email",

        element: (
          <PrivateRoutes>
            <MyPostedTask></MyPostedTask>
          </PrivateRoutes>
        )
      },
      {
        path: "updatedtask/:id",
        loader: ({ params }) => fetch(`https://b11a10-server-side-paul-96-shimu.vercel.app/freelancer/${params.id}`),
        Component: UpdatedTask
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "aboutus",
        Component: AboutUs
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)
