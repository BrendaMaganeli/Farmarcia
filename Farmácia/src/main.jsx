import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import Servicos from './Pages/Servicos.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{

      path: '/',
      element: <Home />
    },
  {
    path: '/servicos',
    element: <Servicos />
  }]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
