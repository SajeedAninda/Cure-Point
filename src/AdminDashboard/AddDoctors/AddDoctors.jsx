import React from 'react'
import { FaUpload } from 'react-icons/fa'

const AddDoctors = () => {
  return (
    <div className='w-[75%] h-fit px-10 py-6'>
      <h3 className='text-[24px] font-bold text-[#191919]'>Add A New Doctor</h3>
      <form className='bg-white w-[60%] rounded-lg h-fit px-10 py-12 mt-6'>
        <div>
          <label htmlFor='doctorName' className=' font-semibold text-[#191919]'>
            Name
          </label>
          <br />
          <input
            className='py-3 mt-2 rounded-lg px-4 placeholder:text-gray-400 border-2 border-gray-300 w-full'
            type='text'
            placeholder='Please Enter Doctors Name'
          />
        </div>

        <div className='mt-6'>
          <label
            htmlFor='doctorsEmail'
            className=' font-semibold text-[#191919]'
          >
            Email
          </label>
          <br />
          <input
            className='py-3 mt-2 rounded-lg px-4 placeholder:text-gray-400 border-2 border-gray-300 w-full'
            type='email'
            placeholder='Please Enter Doctors Email'
          />
        </div>

        <div className='mt-6'>
          <label
            htmlFor='doctorsEmail'
            className=' font-semibold text-[#191919]'
          >
            Speciality
          </label>
          <br />
          <select
            className='py-3 mt-2 rounded-lg px-4 placeholder:text-gray-400 border-2 border-gray-300 w-full'
            name=''
            id=''
          >
            <option value='orthodontics'>Teeth Orthodontics</option>
            <option value='cosmetic'>Cosmetic Dentistry</option>
            <option value='teethCleaning'>Teeth Cleaning</option>
            <option value='cavity'>Cavity Protection</option>
            <option value='pediatric'>Pediatric Dental</option>
            <option value='oral'>Oral Surgery</option>
          </select>
        </div>

        <div className='mt-10 w-full border-2 border-dotted border-gray-400 p-10 rounded-lg flex flex-col justify-center items-center gap-3 cursor-pointer hover:bg-gray-200 transition-all duration-200'>
          <p className='text-gray-500 font-semibold'>Upload Your Photo</p>
          <FaUpload className='text-gray-500'/>
        </div>
        <button className='w-full py-3 rounded-lg bg-[#07332F] text-white hover:bg-opacity-50 transition-all duration-300 mt-6'>
            Add
        </button>
      </form>
    </div>
  )
}

export default AddDoctors
