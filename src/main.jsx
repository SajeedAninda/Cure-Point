import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Authentication/Login/Login.jsx'
import Register from './Authentication/Register/Register.jsx'
import AuthProvider from './Authentication/AuthProvider/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
