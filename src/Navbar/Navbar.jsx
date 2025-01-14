import React from 'react'
import logo from '../../src/assets/logo.png'

const Navbar = () => {
  return (
    <div className='h-[14vh] bg-[#07332F] text-white flex items-center'>
      <div className='w-[95%] lg:w-[1150px] mx-auto flex justify-between items-center'>
        <div>
          <img className='w-[150px]' src={logo} alt='' />
        </div>

        <div className='links text-white flex items-center gap-12'>
          <li className='hover:opacity-70 transition-opacity text-[18px] font-semibold duration-300 ease-in-out cursor-pointer list-none'>
            Home
          </li>
          <li className='hover:opacity-70 transition-opacity text-[18px] font-semibold duration-300 ease-in-out cursor-pointer list-none'>
            About
          </li>
          <li className='hover:opacity-70 transition-opacity text-[18px] font-semibold duration-300 ease-in-out cursor-pointer list-none'>
            Appointment
          </li>
          <li className='hover:opacity-70 transition-opacity text-[18px] font-semibold duration-300 ease-in-out cursor-pointer list-none'>
            Login
          </li>
        </div>
      </div>
    </div>
  )
}

export default Navbar
