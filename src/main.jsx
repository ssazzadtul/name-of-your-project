import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!
      <h1>this is sazzad</h1>
    </div>,
  },
  {
    path: "/contact",
    element: <div>I am in a contruct page</div>
  },
  {
    path: "/home",
    element: <Home>home</Home>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
