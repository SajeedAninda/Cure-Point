import React from 'react'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'

const ContactUs = () => {
  return (
    <div>
      <div className='w-[90%] lg:w-[1150px] mx-auto my-28 bg-[#07332F] px-24 py-16 rounded-xl flex justify-between gap-8'>
        <div className='leftDiv w-[40%]'>
          <h1 className='text-[40px] font-bold text-white'>Contact Us</h1>
          <p className='text-[14px]  text-white mt-4'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi.
          </p>
          <div className='flex gap-4 items-center mt-4'>
            <BsFillTelephoneOutboundFill className='text-[20px] text-white' />
            <p className='text-[18px] text-white font-semibold'>
              +880 1825-181918
            </p>
          </div>
          <div className='flex gap-4 items-center mt-4'>
            <IoLocationOutline className='text-[20px] text-white' />
            <p className='text-[18px] text-white font-semibold'>
              Dhanmondi, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        <div className='rightDiv w-[60%]'>
          <div className='w-full flex gap-4'>
            <input
              className='w-[50%] text-white placeholder:text-white px-4 py-3 rounded-lg bg-[#1b3d3a] border border-transparent focus:outline-none focus:border-white focus:ring focus:ring-white'
              type='name'
              placeholder='Name'
            />
            <input
              className='w-[50%] text-white placeholder:text-white px-4 py-3 rounded-lg bg-[#1b3d3a] border border-transparent focus:outline-none focus:border-white focus:ring focus:ring-white'
              type='email'
              placeholder='Email'
            />
          </div>
          <div className='w-full flex gap-4 mt-6'>
            <input
              className='w-[50%] text-white placeholder:text-white px-4 py-3 rounded-lg bg-[#1b3d3a] border border-transparent focus:outline-none focus:border-white focus:ring focus:ring-white'
              type='tel'
              placeholder='Mobile No.'
            />
            <input
              className='w-[50%] text-white placeholder:text-white px-4 py-3 rounded-lg bg-[#1b3d3a] border border-transparent focus:outline-none focus:border-white focus:ring focus:ring-white'
              type='text'
              placeholder='Doctors Name'
            />
          </div>

          <div className='w-full flex gap-4 mt-6'>
            <div className='relative w-[50%]'>
              <input
                className='w-full text-white placeholder:text-white px-4 py-3 rounded-lg bg-[#1b3d3a] border border-transparent focus:outline-none focus:border-white focus:ring focus:ring-white appearance-none'
                type='date'
              />
            </div>

            <div className='relative w-[50%]'>
              <input
                className='w-full text-white placeholder:text-white px-4 py-3 rounded-lg bg-[#1b3d3a] border border-transparent focus:outline-none focus:border-white focus:ring focus:ring-white appearance-none'
                type='time'
              />
            </div>
          </div>

          <button className='text-white text-[16px] font-bold bg-[#F7A582] px-6 py-3 hover:opacity-70 transition-opacity duration-300 ease-in-out rounded-lg mt-6 w-full'>
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
