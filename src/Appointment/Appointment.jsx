import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css' // Import styles for react-calendar
import pillImg from '../assets/bg-pill2.png'
import vectorImg from '../assets/Vector.png'
import appointmentChair from '../assets/appointment-chair.png'
import appointmentBg from '../assets/appointment-bg.png'
import 'react-calendar/dist/Calendar.css'
import './CalendarStyles.css'

const Appointment = () => {
  const [value, onChange] = useState(new Date())

  return (
    <div>
      {/* Header Section */}
      <div className='headerDiv bg-[#07332F] h-[50vh] w-full'>
        <div className='w-[95%] lg:w-[1150px] h-full mx-auto flex flex-col justify-center items-start relative'>
          <img
            className='absolute bottom-0 left-0 rotate-180 w-[200px]'
            src={vectorImg}
            alt=''
          />
          <p className='text-white text-[16px]'>Home / Appointment</p>
          <p className='text-white text-[30px] font-bold mt-3'>Appointment</p>
          <img
            className='absolute -right-20 w-[200px] top-16'
            src={pillImg}
            alt=''
          />
        </div>
      </div>

      {/* Appointment Date Section */}
      <div
        className='appointmentDateDiv bg-cover bg-center bg-no-repeat h-screen w-full flex justify-center items-center'
        style={{ backgroundImage: `url(${appointmentBg})` }}
      >
        <div className='w-[95%] lg:w-[1150px] h-full mx-auto flex justify-between items-center'>
          <div className='w-[40%] flex items-center justify-center bg-white p-4 rounded-lg shadow-lg'>
            <Calendar onChange={onChange} value={value} />
          </div>
          <div className='w-[60%] flex justify-center items-center'>
            <img
              className='w-full max-w-[500px] object-cover'
              src={appointmentChair}
              alt='Appointment Chair'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment
