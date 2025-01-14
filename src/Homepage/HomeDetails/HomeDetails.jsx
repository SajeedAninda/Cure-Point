import React from 'react'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import { FiClock } from 'react-icons/fi'
import { IoLocationOutline } from 'react-icons/io5'

const HomeDetails = () => {
  return (
    <div className='w-[90%] lg:w-[1150px] mx-auto pb-28'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='bg-[#07332F] px-12 py-8 rounded-xl flex justify-between gap-8'>
          <FiClock className='text-[50px] font-bold text-white' />
          <div>
            <h3 className='text-[25px] font-bold text-white'>Opening Hours</h3>
            <p className='text-[18px] font-normal text-white'>
              Open 9.00 am to 5.00pm Everyday
            </p>
          </div>
        </div>

        <div className='bg-[#F7A582] px-12 py-8 rounded-xl flex justify-between gap-8'>
          <IoLocationOutline className='text-[50px] font-bold text-white' />
          <div>
            <h3 className='text-[25px] font-bold text-white'>Our Locations</h3>
            <p className='text-[18px] font-normal text-white'>
              Open 9.00 am to 5.00pm Everyday
            </p>
          </div>
        </div>

        <div className='bg-[#07332F] px-12 py-8 rounded-xl flex justify-between gap-8'>
          <BsFillTelephoneOutboundFill className='text-[50px] font-bold text-white' />
          <div>
            <h3 className='text-[25px] font-bold text-white'>Contact Us</h3>
            <p className='text-[18px] font-normal text-white'>
              Open 9.00 am to 5.00pm Everyday
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeDetails
