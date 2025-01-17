import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import pillImg from '../assets/bg-pill2.png'
import vectorImg from '../assets/Vector.png'
import appointmentChair from '../assets/appointment-chair.png'
import appointmentBg from '../assets/appointment-bg.png'
import 'react-calendar/dist/Calendar.css'
import './CalendarStyles.css'
import orthodonticsImg from '../assets/orthodontics.png'
import cosmeticImg from '../assets/cosmetic1.png'
import cleaningImg from '../assets/cleaning.png'
import cavityImg from '../assets/cavity.png'
import pediatricImg from '../assets/pediatric.png'
import oralImg from '../assets/oral.png'

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

      {/* Services Section  */}
      <div className='w-[95%] lg:w-[1150px] h-full mx-auto pb-32'>
        <p className='text-[20px] text-[#F7A582] text-center'>
          Available Services on{' '}
          {new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          }).format(value)}
        </p>
        <h1 className='text-[32px] text-[#1e1e1e] font-bold py-5 text-center'>
          Please Select a Service
        </h1>

        <div className='mt-6 grid grid-cols-1 lg:grid-cols-3 gap-12 '>
          <div className='rounded-xl px-12 py-6 flex items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-200 ease-in bg-white gridShadows '>
            <img className='w-[20%]' src={orthodonticsImg} alt="" />
            <h3 className='text-[#1e1e1e] w-[60%] font-bold text-[22px]'>Teeth <br /> Orthodontics</h3>
          </div>

          <div className='rounded-xl px-12 py-6 flex items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-200 ease-in bg-white gridShadows '>
            <img className='w-[20%]' src={cosmeticImg} alt="" />
            <h3 className='text-[#1e1e1e] w-[60%] font-bold text-[22px]'>Cosmetic  <br /> Dentistry</h3>
          </div>

          <div className='rounded-xl px-12 py-6 flex items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-200 ease-in bg-white gridShadows '>
            <img className='w-[20%]' src={cleaningImg} alt="" />
            <h3 className='text-[#1e1e1e] w-[60%] font-bold text-[22px]'>Teeth <br /> Cleaning</h3>
          </div>

          <div className='rounded-xl px-12 py-6 flex items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-200 ease-in bg-white gridShadows '>
            <img className='w-[20%]' src={cavityImg} alt="" />
            <h3 className='text-[#1e1e1e] w-[60%] font-bold text-[22px]'>Cavity <br /> Protection</h3>
          </div>

          <div className='rounded-xl px-12 py-6 flex items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-200 ease-in bg-white gridShadows '>
            <img className='w-[20%]' src={pediatricImg} alt="" />
            <h3 className='text-[#1e1e1e] w-[60%] font-bold text-[22px]'>Pediatric <br /> Dental</h3>
          </div>

          <div className='rounded-xl px-12 py-6 flex items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-200 ease-in bg-white gridShadows '>
            <img className='w-[20%]' src={oralImg} alt="" />
            <h3 className='text-[#1e1e1e] w-[60%] font-bold text-[22px]'>Oral <br /> Surgery</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment
