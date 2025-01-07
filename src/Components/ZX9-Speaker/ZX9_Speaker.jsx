import React from 'react'
import zx9SpeakerImg from '../../assets/images/home/desktop/image-speaker-zx9.png'
import mobileZx9SpeakerImg from '../../assets/images/home/mobile/image-speaker-zx9.png'
import speakerBg from '../../assets/images/home/desktop/pattern-circles.svg'
import { Link } from 'react-router-dom'

const ZX9_Speaker = () => {
  return (
    <div className='px-6 lg:px-0 mt-[500px] lg:mt-0'>
      <div className='w-[100%] lg:w-[1130px] h-[590px] rounded-xl mb-20 mx-auto bg-[#d87d4a] relative overflow-hidden'>
        <img
          className='absolute lg:-top-40 lg:-left-60 w-full'
          src={speakerBg}
          alt=''
        />
        {/* Speaker Image for Mobile */}
        <div className='absolute top-10 left-1/2 transform -translate-x-1/2 lg:hidden'>
          <img className='w-[200px]' src={mobileZx9SpeakerImg} alt='' />
        </div>
        {/* Speaker Image for Desktop */}
        <div className='absolute -bottom-4 left-28 hidden lg:block'>
          <img className='w-[410px]' src={zx9SpeakerImg} alt='' />
        </div>

        {/* Text Div for Desktop */}
        <div className=' absolute top-1/2 transform -translate-y-1/2 -right-36 hidden lg:block'>
        <h1 className='text-white text-[56px] font-bold mt-3 w-[50%] uppercase leading-[60px]'>
          ZX9 Speaker
        </h1>
        <p className='text-white text-[15px] mt-5 w-[48%]'>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>

        <div className='mt-8'>
          <Link
            to={'/zx9-speaker'}
            className='bg-[#191919] px-10 py-3 hover:bg-[#413f3f] text-white font-bold uppercase text-[13px]  transition-colors duration-300 ease-in-out'
          >
            See Product
          </Link>
        </div>
      </div>

        {/* Text Div for Mobile and Tablet */}
        <div className='absolute bottom-10 left-1/2 -translate-x-1/2 text-center lg:hidden'>
          <h1 className='text-white text-[32px] md:text-[40px] font-bold uppercase leading-[40px]'>
            ZX9 Speaker
          </h1>
          <p className='text-white text-[15px] mt-5 px-6'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          <div className='mt-8'>
            <Link
              to={'/zx9-speaker'}
              className='bg-[#191919] px-10 py-3 hover:bg-[#413f3f] text-white font-bold uppercase text-[13px] transition-colors duration-300 ease-in-out'
            >
              See Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZX9_Speaker
