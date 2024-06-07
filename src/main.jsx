import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sobre from './pages/sobre/Sobre.jsx'
import Home from './pages/home/Home.jsx'
import Personagens from './pages/personagens/Personagens.jsx'
import Vagoes from './pages/vagoes/Vagoes.jsx'
import App from './App.jsx'
import Crime from './pages/crime/Crime.jsx'
import Investigacao from './pages/investigacao/Investigacao.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/suspeitos",
          element: <Personagens />
        },
        {
          path: "/vagoes",
          element: <Vagoes />
        },
        {
          path: "/sobre",
          element: <Sobre />
        },
        {
          path: "/crime",
          element: <Crime />
        },
        {
          path: "/investigacao",
          element: <Investigacao />
        },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
