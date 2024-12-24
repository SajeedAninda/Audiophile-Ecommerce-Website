import React from 'react'
import zx9SpeakerImg from '../../assets/images/home/desktop/image-speaker-zx9.png'

const ZX9_Speaker = () => {
  return (
    <div className='w-[100%] lg:w-[1130px] h-[590px] rounded-xl mb-20 mx-auto bg-[#d87d4a] relative overflow-hidden'>
      <div className='absolute -bottom-4 left-28'>
        <img className=' w-[410px]' src={zx9SpeakerImg} alt='' />
      </div>
      <div className=' absolute top-1/2 transform -translate-y-1/2 -right-36'>
        <h1 className='text-white text-[56px] font-bold mt-3 w-[50%] uppercase leading-[60px]'>
          ZX9 Speaker
        </h1>
        <p className='text-white text-[15px] mt-5 w-[48%]'>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>

        <button className='bg-[#191919] px-10 py-3 hover:bg-[#413f3f] text-white font-bold uppercase text-[13px] mt-8 transition-colors duration-300 ease-in-out'>
          See Product
        </button>
      </div>
    </div>
  )
}

export default ZX9_Speaker
