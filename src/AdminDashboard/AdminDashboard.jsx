import React, { useContext } from 'react'
import logo from '../../src/assets/logo.png'
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider'
import { NavLink, Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar/AdminSidebar'

const AdminDashboard = () => {
  let { user, logOut } = useContext(AuthContext)

  let handleLogout = () => {
    logOut().then(console.log('Logged Out Done'))
  }

  return (
    <div>
      <div className='DashboardNavbar h-[13vh] text-white flex items-center z-50 w-full bg-[#07332F]'>
        <div className='w-[95%] lg:w-[1150px] mx-auto flex justify-between items-center'>
          <div>
            <img className='w-[150px]' src={logo} alt='Logo' />
          </div>

          <div className='links text-white flex items-center gap-12'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `text-[18px] font-semibold transition-opacity duration-300 ease-in-out cursor-pointer list-none hover:underline ${
                  isActive ? 'bg-[#046B63] px-4 py-2 rounded-lg' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                `text-[18px] font-semibold transition-opacity duration-300 ease-in-out cursor-pointer list-none hover:underline ${
                  isActive ? 'bg-[#046B63] px-4 py-2 rounded-lg' : ''
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to='/appointment'
              className={({ isActive }) =>
                `text-[18px] font-semibold transition-opacity duration-300 ease-in-out cursor-pointer list-none hover:underline ${
                  isActive ? 'bg-[#046B63] px-4 py-2 rounded-lg' : ''
                }`
              }
            >
              Appointment
            </NavLink>
            {user && (
              <NavLink
                to='/adminDashboard'
                className={({ isActive }) =>
                  `text-[18px] font-semibold transition-opacity duration-300 ease-in-out cursor-pointer list-none hover:underline ${
                    isActive ? 'bg-[#046B63] px-4 py-2 rounded-lg' : ''
                  }`
                }
              >
                Dashboard
              </NavLink>
            )}
            {user ? (
              <button
                onClick={handleLogout}
                className='text-[18px] font-semibold transition-opacity duration-300 ease-in-out cursor-pointer list-none hover:text-red-500 hover:underline'
              >
                Log Out
              </button>
            ) : (
              <NavLink
                to='/login'
                className={({ isActive }) =>
                  `text-[18px] font-semibold transition-opacity duration-300 ease-in-out cursor-pointer list-none hover:underline ${
                    isActive ? 'bg-[#046B63] px-4 py-2 rounded-lg' : ''
                  }`
                }
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
      <div className='bg-[#F1F5F9] h-[130vh] flex justify-between'>
        <AdminSidebar></AdminSidebar>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default AdminDashboard
