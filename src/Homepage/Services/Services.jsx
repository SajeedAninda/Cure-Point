import React, { useState } from 'react'
import doctorImg from '../../assets/doctor.png'
import teethImage from '../../assets/teeth.png'
import cosmeticImage from '../../assets/cosmetic.png'
import surgeryImage from '../../assets/surgery.jpg'

const Services = () => {
  const [activeTab, setActiveTab] = useState('Cavity Protection')

  const tabImages = {
    'Cavity Protection': teethImage,
    'Cosmetic Dentistry': cosmeticImage,
    'Oral Surgery': surgeryImage
  }

  const handleTabClick = tabName => {
    setActiveTab(tabName)
  }

  return (
    <div className='h-fit'>
      <div className='w-[90%] lg:w-[1150px] mx-auto flex justify-between items-center gap-6 py-20'>
        <div className='imgDiv flex-1'>
          <img src={doctorImg} alt='' />
        </div>

        <div className='textDiv flex-1'>
          <h1 className='text-[#1E1E1E] text-[40px] font-bold'>Our Services</h1>
          <p className='text-[16px] text-gray-500 font-normal mt-3'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>

          <div className='buttonTabs w-full inline-flex justify-between items-center border border-gray-300 rounded-xl mt-6'>
            {Object.keys(tabImages).map(tabName => (
              <button
                key={tabName}
                onClick={() => handleTabClick(tabName)}
                className={`text-[16px] font-bold px-6 py-3 transition-opacity duration-300 ease-in-out rounded-lg ${
                  activeTab === tabName
                    ? 'bg-[#F7A582] text-[#1e1e1e]'
                    : 'bg-white text-gray-500'
                }`}
              >
                {tabName}
              </button>
            ))}
          </div>
          <div className='tabImages mt-4'>
            <img
              className='rounded-xl object-contain w-full h-[350px]'
              src={tabImages[activeTab]}
              alt={activeTab}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
