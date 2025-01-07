import React, { useState, useEffect } from 'react'
import heroBg from '../../../assets/images/home/desktop/image-hero.jpg'
import mobileHeroBg from '../../../assets/images/home/mobile/image-hero.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [showImage, setShowImage] = useState(false)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const imageTimeout = setTimeout(() => {
      setShowImage(true)
    }, 1000)

    const textTimeout = setTimeout(() => {
      setShowText(true)
    }, 2000)

    return () => {
      clearTimeout(imageTimeout)
      clearTimeout(textTimeout)
    }
  }, [])

  return (
    <div className='bg-[#181918] h-[80vh] lg:h-screen'>
      <div className='w-[100%] lg:w-[1130px] mx-auto relative'>
        <div
          className={`text-Div absolute left-1/2 lg:left-0 top-1/2 transform -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 transition-opacity duration-700 ${
            showText ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className='text-[#ffffff80] text-[14px] tracking-[12px] font-bold text-center lg:text-left'>
            NEW PRODUCT
          </p>
          <h1 className='text-white text-[32px] md:text-[40px] lg:text-[56px] font-bold mt-3 w-full lg:w-[50%] uppercase leading-[60px] text-center lg:text-left'>
            XX99 Mark II Headphones
          </h1>
          <p className='text-[#ffffff80] text-[15px] mt-5 w-full lg:w-[48%] text-center lg:text-left'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <div className='mt-8 flex justify-center lg:justify-start'>
            <Link
              to={'/xx99-mark-two-headphones'}
              className='bg-[#d87d4a] px-10 py-3 hover:bg-[#db956c] text-white font-bold uppercase text-[13px] transition-colors duration-300 ease-in-out'
            >
              See Product
            </Link>
          </div>
        </div>

        {/* Images for different screen sizes */}
        <img
          className={`transition-opacity duration-700 ${
            showImage ? 'opacity-100' : 'opacity-0'
          } block lg:hidden`}
          src={mobileHeroBg}
          alt='Mobile Hero Background'
        />
        <img
          className={`transition-opacity duration-700 ${
            showImage ? 'opacity-100' : 'opacity-0'
          } hidden lg:block`}
          src={heroBg}
          alt='Desktop Hero Background'
        />
      </div>
    </div>
  )
}

export default Hero
