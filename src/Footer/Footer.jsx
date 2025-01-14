import React from 'react'
import footerLogo from '../assets/Footer-logo.png'

const Footer = () => {
  return (
    <div className='bg-slate-200'>
      <div className='w-[90%] lg:w-[1150px] mx-auto '>
        <div className='grid grid-cols-2 lg:grid-cols-4 justify-between gap-12 py-20 border-b-2 border-gray-300'>
          <div>
            <img className='w-[150px]' src={footerLogo} alt='' />
            <p className='mt-4 text-[16px] text-slate-600'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. has been since the printer took.
            </p>
            <button className='text-[#F7A582] text-[16px] font-bold bg-transparent border-2 border-[#F7A582] px-6 py-2 transition-all duration-300 ease-in-out rounded-xl mt-5 hover:bg-[#F7A582] hover:text-white'>
              Appointment
            </button>
          </div>

          <div>
            <h3 className='text-[#1e1e1e] font-bold text-[20px]'>
              Quick Links
            </h3>
            <div className='mt-5'>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500'>
                About Us
              </li>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500 mt-3'>
                Services
              </li>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500 mt-3'>
                Doctors
              </li>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500 mt-3'>
                Department
              </li>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500 mt-3'>
                Online Payment
              </li>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500 mt-3'>
                Contact Us
              </li>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500 mt-3'>
                My Account
              </li>
            </div>
          </div>

          <div>
            <h3 className='text-[#1e1e1e] font-bold text-[20px]'>
              Doc House Services
            </h3>
            <div className='mt-5'>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500'>
                Pediatric Clinic
              </li>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500 mt-3'>
                Diagnosis Clinic
              </li>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500 mt-3'>
                Cardiac Clinic
              </li>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500 mt-3'>
                Laboratory Analysis
              </li>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500 mt-3'>
                Gyanecological Clinic
              </li>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500 mt-3'>
                Personal Counsiling
              </li>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500 mt-3'>
                Dental Clinic
              </li>
            </div>
          </div>

          <div>
            <h3 className='text-[#1e1e1e] font-bold text-[20px]'>
              Working Hours
            </h3>
            <div className='mt-5'>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500'>
                Monday. 10am - 7am
              </li>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500 mt-3'>
                Tuesday. 10am - 7am
              </li>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500 mt-3'>
                Wednesday. 10am - 7am
              </li>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500 mt-3'>
                Thursday. 10am - 7am
              </li>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500 mt-3'>
                Friday. 10am - 7am
              </li>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500 mt-3'>
                Saturday. 10am - 7am
              </li>
              <li className='hover:opacity-70 transition-opacity text-[18px] font-medium duration-300 ease-in-out cursor-pointer list-none hover:underline text-gray-500 mt-3'>
                Sunday. 10am - 7am
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className='py-12'>
        <p className='text-gray-500 font-semibold text-[18px] text-center'>Copyright © 2025 - All right reserved by Doc House Ltd</p>
      </div>
    </div>
  )
}

export default Footer
