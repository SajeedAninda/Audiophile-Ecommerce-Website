import React from 'react'
import audioGearImg from '../../assets/images/shared/desktop/image-best-gear.jpg'

const AudioGear = () => {
  return (
    <div className='w-[100%] lg:w-[1130px] mx-auto mb-32 flex flex-col lg:flex-row gap-8 justify-between items-center  px-6 lg:px-0'>
      <div className='w-full lg:w-[50%]'>
        <h1 className='uppercase text-[40px] leading-[50px] text-[#191919] font-bold'>
          Bringing you the <span className='text-[#d87d4a]'>best</span> audio
          gear
        </h1>
        <p className='text-[15px] text-[#00000080] mt-8 w-[90%]'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div className='div rounded-xl w-full lg:w-[50%]'>
        <img
          className='rounded-xl object-cover w-full'
          src={audioGearImg}
          alt=''
        />
      </div>
    </div>
  )
}

export default AudioGear
