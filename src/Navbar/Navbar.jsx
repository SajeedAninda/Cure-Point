import React, { useState, useEffect, useContext } from 'react'
import logo from '../../src/assets/logo.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  let { user, logOut } = useContext(AuthContext)

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.17
      if (window.scrollY > scrollThreshold) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  let handleLogout = () => {
    logOut().then(console.log('Logged Out Done'))
  }

  return (
    <div
      className={`h-[13vh] text-white flex items-center z-50 fixed top-0 left-0 w-full transition-all duration-300 ${
        scrolled ? 'bg-[#07332F]' : 'bg-transparent'
      }`}
    >
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
  )
}

export default Navbar
