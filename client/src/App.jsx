//import { useState } from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'

// import CreateTask from './pages/CreateTask';
//  import DeleteTask from './pages/DeleteTask';
//  import Navigation from './pages/Navigation';
// import UpdateTask from './pages/UpdateTask';
// import ViewTask from './pages/ViewTask';
import Wallet from './pages/Wallet';
// import ViewAllTask from './pages/ViewAllTask';

function App() {


    const router = createBrowserRouter([
      {path: '/', element: <Wallet/>}//,
      // {path: '/view-all-task', element: <ViewAllTask/>},
      // {path: '/create-task', element: <CreateTask/>},
      // {path: '/delete-task', element: <DeleteTask/>},
      // {path: '/Navigation', element: <Navigation/>},
      // {path: '/update-task', element: <UpdateTask/>},
      // {path: '/view-task', element: <ViewTask/>}
  ])

  
  return (
    <>
    <RouterProvider router = {router}/>
    </>
  )
}

export default App
