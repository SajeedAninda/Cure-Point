import React from 'react'
import { FaHome } from 'react-icons/fa'
import { MdMeetingRoom, MdWorkHistory } from 'react-icons/md'
import { Link } from 'react-router-dom'

const UserSidebar = () => {
  return (
    <div className='bg-white h-full w-[25%] flex flex-col items-center'>
      <Link
        to={'/user/appointmentBookings'}
        className='text-[#898989] font-semibold text-[20px] hover:bg-[#F1F5F9] hover:text-[#191919] transition-all duration-150 w-full py-6 flex justify-center items-center gap-2'
      >
        My Appointments
        <MdMeetingRoom />
      </Link>
      <Link
        to={'appointmentHistory'}
        className='text-[#898989] font-semibold text-[20px] hover:bg-[#F1F5F9] hover:text-[#191919] transition-all duration-150 w-full py-6 flex justify-center items-center gap-2'
      >
        Appointment Payment History
        <MdWorkHistory />
      </Link>

      <Link
        to={'/'}
        className='text-[#898989] font-semibold text-[20px] hover:bg-[#F1F5F9] hover:text-[#191919] transition-all duration-150 w-full py-6 flex justify-center items-center gap-2'
      >
        Home
        <FaHome />
      </Link>
    </div>
  )
}

export default UserSidebar
