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
import LoginAdmin from "./admin/LoginAdmin.jsx"
import HomeAdmin from "./admin/HomeAdmin.jsx"
import ListeEtudiant from './admin/ListeEtudiant.jsx'
import ListeLivre from './admin/ListeLivre.jsx'
import ModifierStatut from './admin/ModifierStatut.jsx'




const router = createBrowserRouter(
[
  {
    path:"/",
    element: <App />
  },
  {
    path:"/envoyer/:id/delegue",
    element: <Envoyer_fic />
  },
  {
    path:"/connected/:id",
    element: <Home />
  }
  ,
  {
    path:"/liste/:id/visiteur",
    element: <Liste />
  },
  {
    path:"/inscrir",
    element:<Inscrir />
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path:"/login-admin",
    element: <LoginAdmin />
  },
  {
    path:"/accueil/admin",
    element: <HomeAdmin />
  },
  {
    path:"/liste/etudiant",
    element: <ListeEtudiant />
  },
  {
    path:"/liste/livre",
    element: <ListeLivre />
  },
  {
    path:"/modifier/statut/:id",
    element: <ModifierStatut />
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
