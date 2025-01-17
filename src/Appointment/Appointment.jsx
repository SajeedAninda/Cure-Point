import React from 'react'
import pillImg from '../assets/bg-pill2.png'
import vectorImg from '../assets/Vector.png'

const Appointment = () => {
  return (
    <div className=''>
      <div className='headerDiv bg-[#07332F] h-[50vh] w-full '>
        <div className='w-[95%] lg:w-[1150px] h-full mx-auto flex flex-col justify-center items-start relative'>
          <img
            className='absolute bottom-0 left-0 rotate-180 w-[200px]'
            src={vectorImg}
            alt=''
          />
          <p className='text-white  text-[16px]'>Home / Appointment</p>
          <p className='text-white  text-[30px] font-bold mt-3'>Appointment</p>
          <img className='absolute -right-20 w-[200px] top-16' src={pillImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Appointment
