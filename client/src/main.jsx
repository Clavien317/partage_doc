import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Envoyer_fic from './pages/Envoyer_fic.jsx'
import Liste from './pages/Liste.jsx'
import Inscrir from './pages/Inscir.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter(
[
  {
    path:"/",
    element: <App />
  },
  {
    path:"/envoyer",
    element: <Envoyer_fic />
  },
  {
    path:"/connected/:id",
    element: <Home />
  }
  ,
  {
    path:"/liste/:id",
    element: <Liste />
  },
  {
    path:"/inscrir",
    element:<Inscrir />
  },
  {
    path:"/login",
    element: <Login />
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
