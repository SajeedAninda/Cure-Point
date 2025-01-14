import React from 'react'
import doctorImg1 from '../../assets/home-doctor-img1.png'
import doctorImg2 from '../../assets/home-doctor-img2.png'
import doctorImg3 from '../../assets/home-doctor-img3.png'
import { FaCalendarAlt, FaDollarSign, FaStar } from 'react-icons/fa'
import { IoLocation } from 'react-icons/io5'

const ExpertDoctors = () => {
  return (
    <div>
      <div className='w-[90%] lg:w-[1150px] mx-auto my-28'>
        <div className='flex justify-center flex-col items-center text-center'>
          <h1 className='text-[40px] font-bold text-[#1e1e1e]'>
            Our Expert Doctors
          </h1>
          <p className='text-[18px] font-normal text-[#1e1e1e] w-[80%] mx-auto mt-3'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 mt-10 gap-8'>
          <div className='border border-gray-300 p-4 rounded-xl'>
            <img className='w-full object-cover' src={doctorImg1} alt='' />
            <div className='mt-3'>
              <h4 className='text-[20px] font-bold text-[#1e1e1e]'>
                Vlodymyr Zelensky
              </h4>
              <p className='text-[14px] font-normal text-gray-500'>
                Senior Physiotherapist
              </p>
            </div>
            <div className='stars flex gap-1 items-center mt-3'>
              <FaStar className='text-[#F2871D] text-[20px]' />
              <FaStar className='text-[#F2871D] text-[20px]' />
              <FaStar className='text-[#F2871D] text-[20px]' />
              <FaStar className='text-[#F2871D] text-[20px]' />
              <FaStar className='text-[#F2871D] text-[20px]' />
            </div>

            <div className='flex gap-4 items-center mt-3'>
              <IoLocation className='text-[20px] text-gray-500' />
              <p className='text-[14px] text-gray-500 font-semibold'>
                Dhanmondi, Dhaka, Bangladesh
              </p>
            </div>

            <div className='flex gap-4 items-center mt-3'>
              <FaCalendarAlt className='text-[20px] text-gray-500' />
              <p className='text-[14px] text-gray-500 font-semibold'>
                Available on Mon, 22nd December
              </p>
            </div>

            <div className='flex gap-4 items-center mt-3'>
              <FaDollarSign className='text-[20px] text-gray-500' />
              <p className='text-[14px] text-gray-500 font-semibold'>$15</p>
            </div>

            <button className='text-[#F7A582] text-[16px] font-bold bg-transparent border-2 border-[#F7A582] px-6 py-2 w-full transition-all duration-300 ease-in-out rounded-xl mt-5 hover:bg-[#F7A582] hover:text-white'>
              View Profile
            </button>
          </div>

          <div className='border border-gray-300 p-4 rounded-xl'>
            <img className='w-full object-cover' src={doctorImg2} alt='' />
            <div className='mt-3'>
              <h4 className='text-[20px] font-bold text-[#1e1e1e]'>
                Vlodymyr Zelensky
              </h4>
              <p className='text-[14px] font-normal text-gray-500'>
                Senior Physiotherapist
              </p>
            </div>
            <div className='stars flex gap-1 items-center mt-3'>
              <FaStar className='text-[#F2871D] text-[20px]' />
              <FaStar className='text-[#F2871D] text-[20px]' />
              <FaStar className='text-[#F2871D] text-[20px]' />
              <FaStar className='text-[#F2871D] text-[20px]' />
              <FaStar className='text-[#F2871D] text-[20px]' />
            </div>

            <div className='flex gap-4 items-center mt-3'>
              <IoLocation className='text-[20px] text-gray-500' />
              <p className='text-[14px] text-gray-500 font-semibold'>
                Dhanmondi, Dhaka, Bangladesh
              </p>
            </div>

            <div className='flex gap-4 items-center mt-3'>
              <FaCalendarAlt className='text-[20px] text-gray-500' />
              <p className='text-[14px] text-gray-500 font-semibold'>
                Available on Mon, 22nd December
              </p>
            </div>

            <div className='flex gap-4 items-center mt-3'>
              <FaDollarSign className='text-[20px] text-gray-500' />
              <p className='text-[14px] text-gray-500 font-semibold'>$15</p>
            </div>
            <button className='text-[#F7A582] text-[16px] font-bold bg-transparent border-2 border-[#F7A582] px-6 py-2 w-full transition-all duration-300 ease-in-out rounded-xl mt-5 hover:bg-[#F7A582] hover:text-white'>
              View Profile
            </button>
          </div>

          <div className='border border-gray-300 p-4 rounded-xl'>
            <img className='w-full object-cover' src={doctorImg3} alt='' />
            <div className='mt-3'>
              <h4 className='text-[20px] font-bold text-[#1e1e1e]'>
                Vlodymyr Zelensky
              </h4>
              <p className='text-[14px] font-normal text-gray-500'>
                Senior Physiotherapist
              </p>
            </div>
            <div className='stars flex gap-1 items-center mt-3'>
              <FaStar className='text-[#F2871D] text-[20px]' />
              <FaStar className='text-[#F2871D] text-[20px]' />
              <FaStar className='text-[#F2871D] text-[20px]' />
              <FaStar className='text-[#F2871D] text-[20px]' />
              <FaStar className='text-[#F2871D] text-[20px]' />
            </div>

            <div className='flex gap-4 items-center mt-3'>
              <IoLocation className='text-[20px] text-gray-500' />
              <p className='text-[14px] text-gray-500 font-semibold'>
                Dhanmondi, Dhaka, Bangladesh
              </p>
            </div>

            <div className='flex gap-4 items-center mt-3'>
              <FaCalendarAlt className='text-[20px] text-gray-500' />
              <p className='text-[14px] text-gray-500 font-semibold'>
                Available on Mon, 22nd December
              </p>
            </div>

            <div className='flex gap-4 items-center mt-3'>
              <FaDollarSign className='text-[20px] text-gray-500' />
              <p className='text-[14px] text-gray-500 font-semibold'>$15</p>
            </div>
            <button className='text-[#F7A582] text-[16px] font-bold bg-transparent border-2 border-[#F7A582] px-6 py-2 w-full transition-all duration-300 ease-in-out rounded-xl mt-5 hover:bg-[#F7A582] hover:text-white'>
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpertDoctors
