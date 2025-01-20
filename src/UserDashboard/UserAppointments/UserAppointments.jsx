import React from 'react'
import { FaTrash } from 'react-icons/fa'
import useAppointmentData from '../../Hooks/useAppointmentData'

const UserAppointments = () => {
  let { appointmentData, refetch } = useAppointmentData()

  console.log(appointmentData)

  return (
    <div className='w-[75%] text-[22px] px-10 py-6'>
      <h3 className='text-[#191919] text-[22px] font-bold'>
        Scheduled Unpaid Appointments: 6
      </h3>
      <div className='table w-full mt-4'>
        <div className='w-full py-3 grid grid-cols-12 items-center bg-[#E6E6E6] rounded-t-xl text-[#191919] text-[14px] font-bold'>
          <div className='col-span-1'></div>
          <div className='col-span-3'>Name</div>
          <div className='col-span-2'>Date</div>
          <div className='col-span-2'>Time</div>
          <div className='col-span-2'>Treatment</div>
          <div className='col-span-1'>Payment</div>
          <div className='col-span-1'>Delete</div>
        </div>

        {appointmentData.map((data, index) => {
          return (
            <div className='w-full py-3 grid grid-cols-12 items-center bg-white text-[#898989] text-[14px] font-semibold'>
              <div className='col-span-1 flex justify-center'>{index + 1}</div>
              <div className='col-span-3'>{data?.name}</div>
              <div className='col-span-2'>{data?.selectedDate}</div>
              <div className='col-span-2'>{data?.selectedTime}</div>
              <div className='col-span-2'>{data?.selectedService?.name}</div>
              <div className='col-span-1'>
                <button className='px-4 py-3 bg-[#07332F] text-white rounded-lg hover:bg-opacity-50 transition-all duration-150'>
                  Pay
                </button>
              </div>
              <div className='col-span-1'>
                <button className='px-4 py-4 bg-red-600 text-white rounded-lg hover:bg-opacity-50 transition-all duration-150'>
                  <FaTrash />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserAppointments
