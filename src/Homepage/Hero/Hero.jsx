import React from 'react'
import heroImg from '../../assets/hero-doctors-image.png'
import pillImg1 from "../../assets/bg-pill1.png";
import pillImg2 from "../../assets/bg-pill2.png";
import vectorImg from "../../assets/Vector.png";

const Hero = () => {
  return (
    <div className='bg-[#07332F] h-[86vh]'>
      <div className='w-[90%] lg:w-[1150px] mx-auto flex justify-between items-center'>
        <div className='textDiv flex-1'>
            <h1 className='text-white text-[60px] leading-[65px] font-semibold'>
            Your Best Medical Help Center
            </h1>
            <p className='text-white text-[18px] font-semibold mt-4'>
            Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.
            </p>
            <button className='text-white text-[16px] font-bold bg-[#F7A582] px-6 py-3 hover:opacity-70 transition-opacity duration-300 ease-in-out rounded-xl mt-8'>
                All Service
            </button>
        </div>

        <div className="imageDiv flex-1">
            <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
