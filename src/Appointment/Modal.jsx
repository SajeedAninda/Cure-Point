import React, { useContext } from 'react'
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider'

const Modal = ({
  isOpen,
  onClose,
  selectedService,
  selectedDate,
  selectedTime
}) => {
  if (!isOpen) return null

  let { user } = useContext(AuthContext)

  let handleAppointment = e => {
    e.preventDefault()
    let name = e.target.name.value
    let phoneNumber = e.target.phoneNumber.value
    let appointmentDetails = {
      name,
      email: user?.email,
      phoneNumber,
      selectedService,
      selectedTime,
      selectedDate
    }

    console.log(appointmentDetails)
  }

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
      onClick={onClose}
    >
      <div
        className='bg-white rounded-lg shadow-lg w-[90%] max-w-[400px] p-6 relative'
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-lg font-bold'>{selectedService.name}</h2>
          <button
            onClick={onClose}
            className='text-white py-1 px-3 hover:bg-opacity-70 rounded-full bg-[#07332F] text-[20px] font-bold hover:text-gray-800'
          >
            &times;
          </button>
        </div>

        {/* Modal Content */}
        <div className='space-y-4'>
          <div className='bg-gray-100 rounded-lg px-4 py-2'>
            {new Intl.DateTimeFormat('en-US', {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            }).format(selectedDate)}
          </div>
          <div className='bg-gray-100 rounded-lg px-4 py-2'>{selectedTime}</div>
          <form onSubmit={handleAppointment}>
            <input
              type='text'
              name='name'
              required
              placeholder='Full Name'
              className='w-full border rounded-lg px-4 py-2 focus:outline-none'
            />
            <input
              type='tel'
              name='phoneNumber'
              required
              placeholder='Phone Number'
              className='w-full border rounded-lg px-4 py-2 mt-3 focus:outline-none'
            />
            <div className='bg-gray-100 rounded-lg px-4 py-2 mt-3'>{user?.email}</div>

            {/* Submit Button */}
            <button
              type='submit'
              className='bg-[#07332F] text-white font-bold w-full py-2 rounded-lg mt-4 hover:opacity-90'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
