import React from 'react'
import useAppointmentData from '../../Hooks/useAppointmentData'
import useAxiosInstance from '../../Hooks/useAxiosInstance'

const UserAppointmentHistory = () => {
  let { appointmentData, loading, refetch } = useAppointmentData()
  let axiosInstance = useAxiosInstance()


  if (loading) {
    return (
      <div className='text-left text-6xl text-[#191919] font-bold'>
        Loading...
      </div>
    )
  }

  let paidAppointments = appointmentData?.filter(
    data => data.paymentStatus === 'paid'
  )

  return (
    <div className='w-[75%] text-[22px] px-10 py-6'>
      <h3 className='text-[#191919] text-[22px] font-bold'>
        Paid Appointments: {paidAppointments?.length || 0}
      </h3>
      {paidAppointments?.length === 0 ? (
        <div className='text-center text-lg font-semibold text-gray-500'>
          No data found
        </div>
      ) : (
        <div className='table w-full mt-4'>
          <div className='w-full py-3 grid grid-cols-12 items-center bg-[#E6E6E6] rounded-t-xl text-[#191919] text-[14px] font-bold'>
            <div className='col-span-1'></div>
            <div className='col-span-3'>Name</div>
            <div className='col-span-2'>Date</div>
            <div className='col-span-2'>Time</div>
            <div className='col-span-2'>Treatment</div>
            <div className='col-span-2 flex justify-center'>Status</div>
          </div>

          {paidAppointments?.map((data, index) => (
            <div
              key={data._id}
              className='w-full py-3 grid grid-cols-12 items-center bg-white text-[#898989] text-[14px] font-semibold'
            >
              <div className='col-span-1 flex justify-center'>{index + 1}</div>
              <div className='col-span-3'>{data.name}</div>
              <div className='col-span-2'>{data.selectedDate}</div>
              <div className='col-span-2'>{data.selectedTime}</div>
              <div className='col-span-2'>{data.selectedService?.name}</div>
              <div className='col-span-2 text-green-600 text-center flex justify-center'>Paid</div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default UserAppointmentHistory
