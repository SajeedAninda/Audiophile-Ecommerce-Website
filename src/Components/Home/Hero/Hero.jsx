import React from 'react'
import heroBg from '../../../assets/images/home/desktop/image-hero.jpg'

const Hero = () => {
  return (
    <div className='bg-[#181918] h-screen'>
      <div className='w-[100%] lg:w-[1130px] mx-auto relative'>
        <div className='text-Div absolute left-0 top-1/2 transform -translate-y-1/2'>
          <p className='text-[#ffffff80] text-[14px] tracking-[12px] font-bold'>
            NEW PRODUCT
          </p>
          <h1 className='text-white text-[56px] font-bold mt-3 w-[50%] uppercase leading-[60px]'>
            XX99 Mark II Headphones
          </h1>
          <p className='text-[#ffffff80] text-[15px] mt-5 w-[48%]'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <button className='bg-[#d87d4a] px-10 py-3 hover:bg-[#db956c]  text-white font-bold uppercase text-[13px] mt-8'>
            See Product
          </button>
        </div>
        <img className='' src={heroBg} alt='' />
      </div>
    </div>
  )
}

export default Hero