import React from 'react'
import yx1EarphoneImg from '../../assets/images/home/desktop/image-earphones-yx1.jpg'
import { Link } from 'react-router-dom'

const YX1_Eaphone = () => {
  return (
    <div className='w-[100%] lg:w-[1130px] mx-auto mb-28 flex flex-col lg:flex-row gap-8 justify-between items-stretch  px-6 lg:px-0'>
      {/* Image Div */}
      <div className='rounded-xl w-full lg:w-[50%]'>
        <img
          className='rounded-xl object-cover w-full h-full'
          src={yx1EarphoneImg}
          alt='YX1 Earphone'
        />
      </div>

      {/* Text Div */}
      <div className='w-full lg:w-[50%] rounded-xl py-24 pl-24 bg-[#f1f1f1]'>
        <h1 className='uppercase text-[28px] text-[#191919] font-bold'>
          YX1 Earphone
        </h1>
        <div className='mt-8'>
          <Link to={"/yx1-earphones"} className='bg-transparent px-10 py-3 hover:bg-[#191919] text-[#191919] hover:text-white border border-[#191919] font-bold uppercase text-[13px] transition-colors duration-300 ease-in-out'>
            See Product
          </Link>
        </div>
      </div>
    </div>
  )
}

export default YX1_Eaphone
