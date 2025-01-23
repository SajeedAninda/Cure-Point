import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Authentication/Login/Login.jsx'
import Register from './Authentication/Register/Register.jsx'
import AuthProvider from './Authentication/AuthProvider/AuthProvider.jsx'
import Appointment from './Appointment/Appointment.jsx'
import Homepage from './Homepage/Homepage.jsx'
import UserDashboard from './UserDashboard/UserDashboard.jsx'
import UserAppointments from './UserDashboard/UserAppointments/UserAppointments.jsx'
import UserAppointmentHistory from './UserDashboard/UserAppointmentHistory/UserAppointmentHistory.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AdminDashboard from './AdminDashboard/AdminDashboard.jsx'
import UserList from './AdminDashboard/UserList/UserList.jsx'
import AddDoctors from './AdminDashboard/AddDoctors/AddDoctors.jsx'

// Tanstack query client
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>
      },
      {
        path: 'appointment',
        element: <Appointment></Appointment>
      }
    ]
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: 'user/appointmentBookings',
    element: <UserDashboard></UserDashboard>,
    children: [
      {
        path: '',
        element: <UserAppointments></UserAppointments>
      },
      {
        path: 'appointmentHistory',
        element: <UserAppointmentHistory></UserAppointmentHistory>
      }
    ]
  },
  {
    path: 'adminDashboard',
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: '',
        element: <UserList></UserList>
      },
      {
        path: 'addDoctors',
        element: <AddDoctors></AddDoctors>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
)
