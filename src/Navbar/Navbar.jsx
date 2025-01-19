import React, { useState, useEffect, useContext } from 'react';
import logo from '../../src/assets/logo.png';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  let { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.17;
      if (window.scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let handleLogout = () => {
    logOut().then(console.log('Logged Out Done'));
  };

  return (
    <div
      className={`h-[13vh] text-white flex items-center z-50 fixed top-0 left-0 w-full transition-all duration-300 ${
        scrolled ? 'bg-[#07332F]' : 'bg-transparent'
      }`}
    >
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
              to='/user/appointmentBookings'
              className={({ isActive }) =>
                `text-[18px] font-semibold transition-opacity duration-300 ease-in-out cursor-pointer list-none hover:underline ${
                  isActive ? 'bg-[#046B63] px-4 py-2 rounded-lg' : ''
                }`
              }
            >
              My Bookings
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
  );
};

export default Navbar;
