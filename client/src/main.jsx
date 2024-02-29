import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Envoyer_fic from './pages/Envoyer_fic.jsx'

const router = createBrowserRouter(
[
  {
    path:"/",
    element: <App />
  },
  {
    path:"/envoyer",
    element: <Envoyer_fic />
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
