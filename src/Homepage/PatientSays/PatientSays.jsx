import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { PiQuotesFill } from 'react-icons/pi'

const PatientSays = () => {
  return (
    <div>
      <div className='w-[90%] lg:w-[1150px] mx-auto'>
        <div className='flex justify-center flex-col items-center text-center'>
          <h1 className='text-[40px] font-bold text-[#1e1e1e]'>
            What Our Patients Says
          </h1>
          <p className='text-[18px] font-normal text-[#1e1e1e] w-[80%] mx-auto mt-3'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 py-16 relative'>
          <div className='p-3 cursor-pointer rounded-full border border-[#F7A582] flex justify-between items-center absolute transform -left-8 top-1/2 -translate-y-1/2 group hover:bg-[#F7A582] z-20 select-none'>
            <IoIosArrowBack className='text-[#F7A582] font-bold text-[30px] group-hover:text-white' />
          </div>

          <div className='p-3 cursor-pointer rounded-full border border-[#F7A582] flex justify-between items-center absolute transform -right-8 top-1/2 -translate-y-1/2 group hover:bg-[#F7A582] z-20 select-none'>
            <IoIosArrowForward className='text-[#F7A582] font-bold text-[30px] group-hover:text-white' />
          </div>
          <div className='border border-gray-300 rounded-xl py-8 px-12 relative'>
            <PiQuotesFill className='text-[70px] absolute right-5 top-5 text-[#F7A582] font-bold' />
            <div className='flex gap-3 items-center'>
              <img
                className='w-[55px] border border-[#F7A582] rounded-full'
                src='https://randomuser.me/api/portraits/men/78.jpg'
                alt=''
              />
              <div>
                <h4 className='text-[20px] font-bold text-[#1e1e1e]'>
                  Ahmad Hasan
                </h4>
                <p className='text-[14px] font-normal text-gray-500'>
                  Product Designer
                </p>
              </div>
            </div>

            <div className='text-[14px] font-normal text-gray-500 mt-6'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              velit mollitia ut expedita laboriosam aliquid doloremque alias,
              praesentium animi cumque repellendus reiciendis enim dolor, maxime
              dolorem dicta ad maiores molestias. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Aliquam, iusto.
            </div>
          </div>

          <div className='border border-gray-300 rounded-xl py-8 px-12 relative'>
            <PiQuotesFill className='text-[70px] absolute right-5 top-5 text-[#F7A582] font-bold' />
            <div className='flex gap-3 items-center'>
              <img
                className='w-[55px] border border-[#F7A582] rounded-full'
                src='https://randomuser.me/api/portraits/women/32.jpg'
                alt=''
              />
              <div>
                <h4 className='text-[20px] font-bold text-[#1e1e1e]'>
                  Fairooz Moontaha
                </h4>
                <p className='text-[14px] font-normal text-gray-500'>
                  Product Designer
                </p>
              </div>
            </div>

            <div className='text-[14px] font-normal text-gray-500 mt-6'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              velit mollitia ut expedita laboriosam aliquid doloremque alias,
              praesentium animi cumque repellendus reiciendis enim dolor, maxime
              dolorem dicta ad maiores molestias. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Aliquam, iusto.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientSays
