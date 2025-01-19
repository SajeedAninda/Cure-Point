import React, { useContext } from 'react'
import logo from '../../src/assets/logo.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider'

const UserDashboard = () => {
  let { user, logOut } = useContext(AuthContext)

  let handleLogout = () => {
    logOut().then(console.log('Logged Out Done'))
  }

  return (
    <div className=''>
      <div className='DashboardNavbar h-[13vh] text-white flex items-center z-50 w-full bg-[#07332F]'>
        <div className='w-[95%] lg:w-[1150px] mx-auto flex justify-between items-center'>
          <div>
            <img className='w-[150px]' src={logo} alt='' />
          </div>

          <div className='links text-white flex items-center gap-12'>
            <Link
              to={'/'}
              className='hover:opacity-70 transition-opacity text-[18px] font-semibold duration-300 ease-in-out cursor-pointer list-none hover:underline'
            >
              Home
            </Link>
            <li className='hover:opacity-70 transition-opacity text-[18px] font-semibold duration-300 ease-in-out cursor-pointer list-none hover:underline'>
              About
            </li>
            <Link
              to={'/appointment'}
              className='hover:opacity-70 transition-opacity text-[18px] font-semibold duration-300 ease-in-out cursor-pointer list-none hover:underline'
            >
              Appointment
            </Link>
            {user && (
              <Link
                to={'/user/appointmentBookings'}
                className='hover:opacity-70 transition-opacity text-[18px] font-semibold duration-300 ease-in-out cursor-pointer list-none hover:underline'
              >
                My Bookings
              </Link>
            )}
            {user ? (
              <button
                onClick={handleLogout}
                className='transition-opacity text-[18px] font-semibold duration-300 ease-in-out cursor-pointer list-none hover:text-red-500 hover:underline'
              >
                Log Out
              </button>
            ) : (
              <Link
                to={'/login'}
                className='hover:opacity-70 transition-opacity text-[18px] font-semibold duration-300 ease-in-out cursor-pointer list-none hover:underline'
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard
