import React, { useState, useEffect } from 'react'
import logo from '../../src/assets/logo.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

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
          <li className='hover:opacity-70 transition-opacity text-[18px] font-semibold duration-300 ease-in-out cursor-pointer list-none hover:underline'>
            Home
          </li>
          <li className='hover:opacity-70 transition-opacity text-[18px] font-semibold duration-300 ease-in-out cursor-pointer list-none hover:underline'>
            About
          </li>
          <li className='hover:opacity-70 transition-opacity text-[18px] font-semibold duration-300 ease-in-out cursor-pointer list-none hover:underline'>
            Appointment
          </li>
          <li className='hover:opacity-70 transition-opacity text-[18px] font-semibold duration-300 ease-in-out cursor-pointer list-none hover:underline'>
            Login
          </li>
        </div>
      </div>
    </div>
  )
}

export default Navbar
