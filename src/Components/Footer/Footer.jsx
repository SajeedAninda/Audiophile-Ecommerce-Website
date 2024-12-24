import React from 'react'
import logo from '../../assets/images/shared/desktop/logo.svg'
import { FaInstagram, FaSquareFacebook, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-[#191919]'>
      <div className='w-[100%] lg:w-[1130px] mx-auto py-20 flex justify-between gap-20'>
        <div className='flex-1'>
          <img className='' src={logo} alt='' />
          <p className='mt-12 text-[15px] text-[#ffffff80]'>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className='mt-12 text-[15px] text-[#ffffff80]'>
            Copyright 2025. All Rights Reserved
          </p>
        </div>

        <div className='flex-1 flex flex-col justify-between'>
          <div className='links flex gap-10 items-center justify-end text-[13px] text-white font-semibold uppercase tracking-widest'>
            <p className='hover:text-[#d87d4a] cursor-pointer transition-all duration-300 delay-75'>
              Home
            </p>
            <p className='hover:text-[#d87d4a] cursor-pointer transition-all duration-300 delay-75'>
              Headphones
            </p>
            <p className='hover:text-[#d87d4a] cursor-pointer transition-all duration-300 delay-75'>
              Speakers
            </p>
            <p className='hover:text-[#d87d4a] cursor-pointer transition-all duration-300 delay-75'>
              Earphones
            </p>
          </div>

          <div className='logo flex gap-4 justify-end'>
            <FaSquareFacebook className='text-white text-[30px] hover:text-[#d87d4a] cursor-pointer transition-all duration-300 delay-75' />

            <FaTwitter className='text-white text-[30px] hover:text-[#d87d4a] cursor-pointer transition-all duration-300 delay-75' />

            <FaInstagram className='text-white text-[30px] hover:text-[#d87d4a] cursor-pointer transition-all duration-300 delay-75' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
