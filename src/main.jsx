import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import '@fontsource-variable/sofia-sans-extra-condensed/wght.css'
import '@fontsource-variable/instrument-sans/wght.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/home.css'
import './styles/pages.css'
import { Layout } from './components/Layout.jsx'
import { Home } from './pages/Home.jsx'
import { Parcours } from './pages/Parcours.jsx'
import { Competences } from './pages/Competences.jsx'
import { Projets } from './pages/Projets.jsx'
import { ProjetDetail } from './pages/ProjetDetail.jsx'
import { Contact } from './pages/Contact.jsx'
import { NotFound } from './pages/NotFound.jsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/parcours', element: <Parcours /> },
      { path: '/competences', element: <Competences /> },
      { path: '/projets', element: <Projets /> },
      { path: '/projets/:slug', element: <ProjetDetail /> },
      { path: '/contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
